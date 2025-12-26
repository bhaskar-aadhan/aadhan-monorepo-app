import { z } from "zod";

export const influencerFormSchema = () => {
    const baseSchema = z.object({
        first_name: z
            .string()
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
        email: z.string().email({ message: "Invalid email address" }),
        phone_number: z.string().min(10, { message: 'Must be a valid mobile number' })
            .max(14, { message: 'Must be a valid mobile number' }),
        fb_account_url: z.string().url({ message: "Must be a valid Facebook Account URL" }),
        fb_followers: z.string().min(1, { message: "Facebook followers is required" }),
        insta_account_url: z.string().url({ message: "Must be a valid Instagram Account URL" }),
        insta_followers: z.string().min(1, { message: "Instagram followers is required" }),
        yt_account_url: z.string().url({ message: "Must be a valid Youtube Channel URL" }),
        yt_subscribers: z.string().min(1, { message: "Youtube subscribers is required" }),
        other_url: z.string().optional(),
        category: z.string().optional(),
    }).refine((data) => {
        const otherUrlFilled = !!data.other_url?.trim();
        const categoryFilled = !!data.category?.trim();
        return (
            (otherUrlFilled && categoryFilled) || (!otherUrlFilled && !categoryFilled)
        );
    }, {
        path: ['category'],
        message: 'Both "Other URL" and "Category" must be filled or both left empty',
    });

    return baseSchema;
};

export const InfluencerFormSchema = () => influencerFormSchema();
const schemaInstance = InfluencerFormSchema();
export type InfluencerFormtypes = z.infer<typeof schemaInstance>;
