# @repo/types

Shared TypeScript type definitions for all apps in the monorepo.

## Purpose

This package provides a centralized location for type definitions that are used across multiple apps. By maintaining types in a shared package, we ensure consistency and avoid duplication.

## Installation

This package is automatically available in the monorepo. Add it to your app's dependencies:

```json
{
  "dependencies": {
    "@repo/types": "workspace:*"
  }
}
```

## Usage

### Import all types

```typescript
import type { ApiResponse, User, ContentType } from '@repo/types';
```

### Import from specific modules

```typescript
// Import only common types
import type { ApiResponse, PaginationParams } from '@repo/types/common';

// Import only API types
import type { HttpMethod, ApiRequestConfig } from '@repo/types/api';

// Import only model types
import type { User, Content } from '@repo/types/models';
```

## Structure

```
src/
├── index.ts      # Main entry point (re-exports all modules)
├── common.ts     # Common types (ApiResponse, Pagination, etc.)
├── api.ts        # API-related types (HTTP methods, request configs)
└── models.ts     # Domain model types (User, Content, etc.)
```

## Adding New Types

### 1. Choose the appropriate module

- **common.ts**: Generic utility types, shared interfaces
- **api.ts**: HTTP/API-related types
- **models.ts**: Business domain entities

### 2. Add your type definition

```typescript
// In src/models.ts
export interface Product {
  id: string;
  name: string;
  price: number;
}
```

### 3. Export from index.ts (if needed)

The index.ts already re-exports all modules, so your type will be automatically available.

### 4. Run type checking

```bash
pnpm run check-types
```

## Best Practices

1. **Use descriptive names**: Make type names clear and self-documenting
2. **Add JSDoc comments**: Document complex types with comments
3. **Keep types pure**: Avoid importing runtime code in type files
4. **Use enums for constants**: Define string/number constants as enums
5. **Extend base types**: Use inheritance to avoid duplication

## Examples

### API Response with typed data

```typescript
import type { ApiResponse, User } from '@repo/types';

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: '1',
    email: 'user@example.com',
    name: 'John Doe',
    role: UserRole.USER,
    status: Status.ACTIVE,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
};
```

### Paginated response

```typescript
import type { PaginatedResponse, Content } from '@repo/types';

const contents: PaginatedResponse<Content> = {
  items: [/* ... */],
  total: 100,
  page: 1,
  limit: 10,
  hasNext: true,
  hasPrevious: false,
};
```

## Type Checking

Run type checking in this package:

```bash
cd packages/types
pnpm run check-types
```

Run type checking across all packages:

```bash
# From monorepo root
pnpm run check-types
```
