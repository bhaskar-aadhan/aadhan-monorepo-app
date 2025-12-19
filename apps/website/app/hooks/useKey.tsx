import { useState } from "react";
import { v4 as uuid4 } from 'uuid';

export const useKey = () => {
    const [key] = useState<string>(() => uuid4())
    return key
}