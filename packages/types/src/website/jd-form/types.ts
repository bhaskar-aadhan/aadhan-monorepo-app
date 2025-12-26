
export type JdFormWorkExperience = {
    company_name: string;
    job_title: string;
    country: string;
    job_type: string;
    job_type_others: string;
    start_month: string;
    start_year: string;
    end_month: string;
    end_year: string;
    is_working: boolean | string
}

export type JdFormEducationDetails = {
    degree_type: string;
    degree_type_others: string;
    school: string;
    subjects_studied: string;
    graduation_year: string;
    is_enrolled: boolean | string;
}

export type JdFormTypes = {
    first_name: string;
    last_name: string;
    address: string;
    email: string;
    phone_number: string;
    is_fresher: boolean | string,
    message: string;
    job_id: string;
    work_experience: JdFormWorkExperience[],
    education_details: JdFormEducationDetails[],
    resume: null | File
}