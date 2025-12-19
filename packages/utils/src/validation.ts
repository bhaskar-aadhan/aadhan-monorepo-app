/**
 * Validation utility functions
 */

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Validate phone number (basic)
 */
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Check if string is a valid UUID
 */
export function isUUID(str: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(str);
}

/**
 * Check if value is a number
 */
export function isNumeric(value: unknown): boolean {
    return !isNaN(Number(value)) && isFinite(Number(value));
}

/**
 * Validate password strength
 * Returns: { valid: boolean, strength: 'weak' | 'medium' | 'strong' }
 */
export function validatePassword(password: string): {
    valid: boolean;
    strength: 'weak' | 'medium' | 'strong';
    issues: string[];
} {
    const issues: string[] = [];
    let strength: 'weak' | 'medium' | 'strong' = 'weak';

    if (password.length < 8) {
        issues.push('Password must be at least 8 characters');
    }
    if (!/[a-z]/.test(password)) {
        issues.push('Password must contain lowercase letters');
    }
    if (!/[A-Z]/.test(password)) {
        issues.push('Password must contain uppercase letters');
    }
    if (!/\d/.test(password)) {
        issues.push('Password must contain numbers');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        issues.push('Password must contain special characters');
    }

    const valid = issues.length === 0;

    if (valid) {
        if (password.length >= 12) {
            strength = 'strong';
        } else if (password.length >= 10) {
            strength = 'medium';
        }
    }

    return { valid, strength, issues };
}

/**
 * Check if string contains only alphanumeric characters
 */
export function isAlphanumeric(str: string): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
    const digits = cardNumber.replace(/\D/g, '');
    if (digits.length < 13 || digits.length > 19) return false;

    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i]);

        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        isEven = !isEven;
    }

    return sum % 10 === 0;
}
