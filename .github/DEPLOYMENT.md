# GitHub Actions Deployment Setup

This repository uses GitHub Actions to automatically deploy apps to Cloudflare Workers when changes are detected.

## Workflows

### 1. Deploy Website (`deploy-website.yml`)
- **Triggers**: Pushes to `main` branch affecting `apps/website/**` or `packages/**`
- **Deploys to**: Cloudflare Workers
- **Build**: Uses Turborepo to build the `aadhan` package

### 2. Deploy APIs (`deploy-apis.yml`)
- **Triggers**: Pushes to `main` branch affecting `apps/apis/**` or `packages/**`
- **Deploys to**: Cloudflare Workers
- **Build**: Direct deployment with minification

## Required GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

| Secret Name | Description | How to Get |
|------------|-------------|------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API token with Workers deployment permissions | [Create API Token](https://dash.cloudflare.com/profile/api-tokens) - Use "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare account ID | Found in Cloudflare Dashboard → Workers & Pages → Overview |

## How It Works

### Path-Based Deployment
The workflows use path filters to deploy only when relevant files change:

- **Website deploys** when:
  - Files in `apps/website/**` change
  - Files in `packages/**` change (shared dependencies)
  - `pnpm-lock.yaml` or `turbo.json` changes

- **APIs deploys** when:
  - Files in `apps/apis/**` change
  - Files in `packages/**` change (shared dependencies)
  - `pnpm-lock.yaml` or `turbo.json` changes

### Manual Deployment
You can manually trigger deployments:
1. Go to Actions tab in GitHub
2. Select the workflow (Deploy Website or Deploy APIs)
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## First-Time Setup

1. **Add Cloudflare Secrets**:
   ```bash
   # Get your Cloudflare Account ID
   # Visit: https://dash.cloudflare.com/ → Workers & Pages
   
   # Create API Token
   # Visit: https://dash.cloudflare.com/profile/api-tokens
   # Use template: "Edit Cloudflare Workers"
   ```

2. **Add secrets to GitHub**:
   - Navigate to your repository
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`

3. **Test the workflows**:
   - Make a small change to `apps/website/README.md`
   - Commit and push to `main`
   - Check the Actions tab to see the workflow run

## Troubleshooting

### Workflow doesn't trigger
- Verify the changed files match the path filters
- Check that you pushed to the `main` branch
- Ensure the workflow files are in `.github/workflows/`

### Deployment fails
- Verify `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set correctly
- Check that the API token has Workers deployment permissions
- Review the workflow logs in the Actions tab

### Build fails
- Ensure all dependencies are properly listed in `package.json`
- Check that the build works locally with `pnpm turbo build`
- Review the build logs in the Actions tab
