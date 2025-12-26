import { z } from "zod";
import { verifyJob } from ".";

export const JobdescriptionFormSchema = (apiUrl: string = '', jobId: string = '') => {
    const baseSchema = z.object({
        first_name: z.string()
            .min(2, { message: "First Name is required" })
            .regex(/^(?!\d+$)[a-zA-Z\s.'-]+$/, {
                message: "First Name must contain letters and cannot be only numbers"
            }),
        last_name: z
            .string()
            .min(1, { message: "Last Name is required" })
            .regex(/^(?!\d+$)[a-zA-Z\s.'-]+$/, {
                message: "Last Name must contain letters and cannot be only numbers"
            }),
        address: z.string().min(10, { message: "adress is required" }),
        candidate_email: z.string()
            .email({ message: "Invalid email address" })
        // .superRefine(async (email, ctx) => {
        //     try {
        //         const isVerifiedStatus = await verifyJob(apiUrl, jobId, email);
        //         if (isVerifiedStatus === 409) {
        //             ctx.addIssue({
        //                 code: z.ZodIssueCode.custom,
        //                 message: "You have already applied for this job"
        //             });
        //             return false;
        //         }
        //         return true;
        //     } catch (error: any) {
        //         ctx.addIssue({
        //             code: z.ZodIssueCode.custom,
        //             message: error.message ?? "Email verification failed"
        //         });
        //         return false;
        //     }
        // })
        ,
        phone_number: z.string().min(10, { message: 'Must be a valid mobile number' })
            .max(14, { message: 'Must be a valid mobile number' }),
        is_fresher: z.boolean(),
        message: z.string()
            .trim()
            .refine((value) => {
                const wordCount = value.split(/\s+/).filter(Boolean).length;
                return wordCount <= 500;
            }, {
                message: 'message cannot exceed 500 words',
            }),
        job_id: z.string(),
        work_experience: z.array(z.object({
            company_name: z.string().min(1, { message: "Company name is required" }),
            job_title: z.string().min(1, { message: "Job title is required" }),
            country: z.string().min(1, { message: "Country is required" }),
            job_type: z.string().min(1, { message: "Job type is required" }),
            job_type_others: z.string(),
            start_month: z.string().min(1, { message: "Start month is required" }),
            start_year: z.string().min(1, { message: "Start year is required" }),
            end_month: z.string().min(1, { message: "End month is required" }),
            end_year: z.string().min(1, { message: "End year is required" }),
            is_working: z.boolean().or(z.string())
        })).optional(),
        current_ctc: z.string().optional(),
        expected_ctc: z.string().optional(),
        notice_period: z.string().optional(),
        education_details: z.array(z.object({
            degree_type: z.string().min(1, { message: "Degree type is required" }),
            degree_type_others: z.string(),
            school: z.string().min(1, { message: "school is required" }),
            subjects_studied: z.string().min(1, { message: "Subjects studied is required" }),
            graduation_year: z.string().min(1, { message: "Graduation year is required" }),
            is_enrolled: z.boolean().or(z.string())
        })),
        resume: z
            .instanceof(File, { message: "Resume must be a file" })
            .refine(file => file.size > 0, { message: "Resume is required" })
            .refine(file => file.type === "application/pdf", { message: "Only PDF files are allowed" })
            .refine(file => file.size <= 10 * 1024 * 1024, { message: "File size must be less than 10MB" })

        // resume: z
        //     .any()
        //     .refine(file => file instanceof File && file.size > 0, {
        //         message: "Resume is required"
        //     })
        //     .refine(file => file instanceof File && file.type === "application/pdf", {
        //         message: "Only PDF files are allowed"
        //     })
        //     .refine(file => file instanceof File && file.size <= 10 * 1024 * 1024, {
        //         message: "File size must be less than 10MB"
        //     })
    });

    return baseSchema.partial({ is_fresher: true, job_id: true }).refine((data) => {
        if (!data.is_fresher) {
            // Require at least one valid work experience
            if (!data.work_experience || data.work_experience.length === 0) return false;

            const requiredCtcFields = [data.current_ctc, data.expected_ctc, data.notice_period];
            if (requiredCtcFields.some((val) => !val || val.trim() === '')) return false;
        }
        return true;
    }, {
        message: "Please complete all CTC and work experience fields, or mark yourself as a fresher",
        path: ['work_experience'],
    });
};

export const JDFormSchema = () => JobdescriptionFormSchema();

const schemaInstance = JDFormSchema();
export type JDFormtypes = z.infer<typeof schemaInstance>;