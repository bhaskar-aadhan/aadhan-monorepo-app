export const defaultValues = (jobid: string) => ({
    first_name: '',
    last_name: '',
    address: '',
    candidate_email: '',
    phone_number: '',
    is_fresher: false,
    message: '',
    job_id: jobid,
    work_experience: [
        {
            company_name: '',
            job_title: '',
            country: 'IN',
            job_type: '',
            job_type_others: '',
            start_month: '',
            start_year: '',
            end_month: '',
            end_year: '',
            is_working: false
        }
    ],
    current_ctc: '',
    expected_ctc: '',
    notice_period: '',
    education_details: [
        {
            degree_type: '',
            degree_type_others: '',
            school: '',
            subjects_studied: '',
            graduation_year: '',
            is_enrolled: false
        }
    ],
    resume: undefined
});