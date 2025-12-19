# @repo/utils

Shared utility functions for all apps in the monorepo.

## Installation

Add to your app's dependencies:

```json
{
  "dependencies": {
    "@repo/utils": "workspace:*"
  }
}
```

## Usage

### Import all utilities

```typescript
import { capitalize, unique, formatCurrency } from '@repo/utils';
```

### Import from specific modules

```typescript
// String utilities
import { capitalize, truncate, toKebabCase } from '@repo/utils/string';

// Array utilities
import { unique, chunk, groupBy } from '@repo/utils/array';

// Object utilities
import { pick, omit, deepMerge } from '@repo/utils/object';

// Date utilities
import { formatDate, getRelativeTime, addDays } from '@repo/utils/date';

// Validation utilities
import { isValidEmail, isValidUrl, validatePassword } from '@repo/utils/validation';

// Formatting utilities
import { formatCurrency, formatFileSize, formatNumber } from '@repo/utils/format';
```

## Available Utilities

### String (`@repo/utils/string`)
- `capitalize` - Capitalize first letter
- `toTitleCase` - Convert to title case
- `toKebabCase` - Convert to kebab-case
- `toCamelCase` - Convert to camelCase
- `truncate` - Truncate with ellipsis
- `normalizeWhitespace` - Remove extra whitespace
- `isBlank` - Check if empty/whitespace
- `randomString` - Generate random string

### Array (`@repo/utils/array`)
- `unique` - Remove duplicates
- `chunk` - Split into chunks
- `shuffle` - Randomize order
- `groupBy` - Group by key
- `compact` - Remove falsy values
- `first` / `last` - Get first/last item
- `sum` / `average` - Math operations

### Object (`@repo/utils/object`)
- `deepClone` - Deep clone object
- `isEmpty` - Check if empty
- `pick` / `omit` - Select/exclude keys
- `deepMerge` - Merge objects deeply
- `get` / `set` - Nested property access

### Date (`@repo/utils/date`)

**Built with Day.js - Default timezone: Asia/Kolkata**

- `formatDate` - Format as YYYY-MM-DD
- `formatDateReadable` - Readable format (e.g., "December 19, 2025")
- `formatDateTime` - Format with time (YYYY-MM-DD HH:mm:ss)
- `formatDateTimeReadable` - Readable with time
- `formatTime` / `formatTime12` - Time formatting
- `getRelativeTime` - "2 hours ago"
- `getRelativeTimeTo` - Relative time between two dates
- `addDays` / `addHours` / `addMinutes` - Add time
- `subtractDays` - Subtract days
- `isToday` / `isYesterday` / `isTomorrow` - Date checks
- `isPast` / `isFuture` - Time checks
- `isBetween` - Check if between two dates
- `startOfDay` / `endOfDay` - Day boundaries
- `startOfWeek` / `endOfWeek` - Week boundaries
- `startOfMonth` / `endOfMonth` - Month boundaries
- `diffInDays` / `diffInHours` / `diffInMinutes` - Date differences
- `now` / `nowISO` - Current date/time
- `parseDate` - Parse with custom format
- `isValidDate` - Validate date
- `toTimezone` - Convert to different timezone
- `getTimezoneOffset` - Get timezone offset
- `dayjs` - Direct access to Day.js for advanced usage

### Validation (`@repo/utils/validation`)
- `isValidEmail` - Email validation
- `isValidUrl` - URL validation
- `isValidPhone` - Phone validation
- `isUUID` - UUID validation
- `validatePassword` - Password strength
- `isAlphanumeric` - Alphanumeric check
- `isValidCreditCard` - Luhn algorithm

### Format (`@repo/utils/format`)
- `formatNumber` - Add commas
- `formatCurrency` - Currency formatting
- `formatFileSize` - Bytes to KB/MB/GB
- `formatPercentage` - Percentage formatting
- `formatPhoneNumber` - Phone formatting
- `formatDuration` - Time duration
- `formatCompactNumber` - 1.2K, 3.4M
- `pluralize` - Pluralize words

## Examples

```typescript
import { capitalize, formatCurrency, isValidEmail } from '@repo/utils';

// String
capitalize('hello'); // "Hello"

// Formatting
formatCurrency(1234.56); // "$1,234.56"

// Validation
isValidEmail('user@example.com'); // true
```
