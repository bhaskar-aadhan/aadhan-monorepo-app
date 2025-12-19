# @repo/assets

Shared static assets and configuration files for all apps in the monorepo.

## Structure

```
packages/assets/
├── public/              # Static files served publicly
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── .well-known/
│       ├── apple-app-site-association
│       └── assetlinks.json
└── configs/             # Shared configuration files
    └── app-config.json
```

## Installation

Add to your app's dependencies:

```json
{
  "dependencies": {
    "@repo/assets": "workspace:*"
  }
}
```

## Usage

### Method 1: Copy Files to Public Directory

In your build script or setup:

```typescript
import { copyFileSync } from 'fs';
import { resolve } from 'path';

// Copy robots.txt
copyFileSync(
  resolve(__dirname, '../../../packages/assets/public/robots.txt'),
  resolve(__dirname, 'public/robots.txt')
);
```

### Method 2: Import in Code

```typescript
// Import JSON configs
import appConfig from '@repo/assets/configs/app-config.json';

console.log(appConfig.api.baseUrl);
```

### Method 3: Reference in Build Tools

#### Vite Example

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: resolve(__dirname, '../../packages/assets/public'),
});
```

#### Next.js Example

```javascript
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

// pages/api/robots.ts
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const robotsTxt = fs.readFileSync(
    path.resolve(process.cwd(), '../../packages/assets/public/robots.txt'),
    'utf-8'
  );
  res.setHeader('Content-Type', 'text/plain');
  res.send(robotsTxt);
}
```

## Available Files

### Public Files

- **robots.txt** - Search engine crawler instructions
- **sitemap.xml** - Site structure for search engines
- **manifest.json** - PWA manifest
- **apple-app-site-association** - iOS universal links configuration
- **assetlinks.json** - Android app links configuration

### Configuration Files

- **app-config.json** - Shared app configuration

## Adding New Files

1. Add file to appropriate directory (`public/` or `configs/`)
2. Update `package.json` exports:

```json
{
  "exports": {
    "./your-file.txt": "./public/your-file.txt"
  }
}
```

3. Use in your apps

## Best Practices

1. **Environment-specific configs**: Use different files for dev/staging/prod
2. **Version control**: Commit template files, gitignore environment-specific ones
3. **Documentation**: Document what each file is for
4. **Validation**: Validate JSON files before deployment

## Examples

### Robots.txt
```txt
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://yourdomain.com/sitemap.xml
```

### Apple App Site Association
```json
{
  "applinks": {
    "apps": [],
    "details": [{
      "appID": "TEAM_ID.BUNDLE_ID",
      "paths": ["/app/*"]
    }]
  }
}
```

### Android Asset Links
```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.yourapp.package"
  }
}]
```
