/**
 * Array utility functions
 */

/**
 * Remove duplicate values from array
 */
export function unique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

/**
 * Chunk array into smaller arrays of specified size
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

/**
 * Shuffle array randomly
 */
export function shuffle<T>(arr: T[]): T[] {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Group array items by a key
 */
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
    return arr.reduce((groups, item) => {
        const groupKey = String(item[key]);
        if (!groups[groupKey]) {
            groups[groupKey] = [];
        }
        groups[groupKey].push(item);
        return groups;
    }, {} as Record<string, T[]>);
}

/**
 * Remove falsy values from array
 */
export function compact<T>(arr: (T | null | undefined | false | 0 | '')[]): T[] {
    return arr.filter(Boolean) as T[];
}

/**
 * Get the last item in an array
 */
export function last<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

/**
 * Get the first item in an array
 */
export function first<T>(arr: T[]): T | undefined {
    return arr[0];
}

/**
 * Check if arrays are equal (shallow comparison)
 */
export function areArraysEqual<T>(arr1: T[], arr2: T[]): boolean {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((item, index) => item === arr2[index]);
}

/**
 * Sum all numbers in an array
 */
export function sum(arr: number[]): number {
    return arr.reduce((total, num) => total + num, 0);
}

/**
 * Get average of numbers in an array
 */
export function average(arr: number[]): number {
    return arr.length === 0 ? 0 : sum(arr) / arr.length;
}
