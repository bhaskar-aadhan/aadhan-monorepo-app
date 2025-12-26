export interface Category {
    language_id: number;
    display_name: string;
    target: number;
    status: string;
    created_by: number;
    updated_by: number;
    created_date: string;
    updated_date: string;
    category_id: number;
    category_name: string;
    displayin_app: boolean;
    display_for_reporters: boolean;
    image_url: string | null;
}

export type CategoryResposnse = {
    "success": boolean;
    "message": string;
    "data": Category[];
}