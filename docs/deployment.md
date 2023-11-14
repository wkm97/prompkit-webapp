# Web Application
## GCP Services
- Compute Engine (database)
- Cloud Run
- Cloud Build
- Cloud Storage
- Artifact Registry
- Custom domain mapping feature in cloudrun
## Enable the following API and Services
- Cloud Run Admin API
## Project Setup
1. Create a new project in GCP.
2. Create a service account with `Editor` and `Service Account User` roles for resource deployment, and create a key.
3. Create OAuth consent screen (required by OAuth client ID creation)
  - add authorized domain, examples: quicklyprompt.com
4. Create OAuth client ID (for application authorization).
  - application type, Web application
  - add Authorised JavaScript origins, example: https://staging.quicklyprompt.com
  - add Authorised redirect URIs, example: https://staging.quicklyprompt.com/api/auth/callback/google
  - copy Client ID and Client secret for deployment
5. Use terraform to deploy resources for database
  - set the postgresql connection string created for deployment
  - fresh database, run `yarn mikro-orm migration:fresh` to create schema
6. Create a NEXTAUTH_SECRET using `openssl rand -base64 32` and set it for deployment.
7. Get the base64 string of service account json and set it for deployment, `base64 -i quick-prompt-testing-e53f9051de9d.json`
8. Create a github workflow for webapp deployment, example: .github/workflows/google-cloudrun-source.yml
9. After deployment, map custom domain for webapp https://cloud.google.com/run/docs/mapping-custom-domains#map
10. Login to the web app and populate the data (optional)
  - seeding data, run `yarn mikro-orm seeder:run -c SmallFakeDataSeeder`

## Getting Started
First, run the development server:

```bash
yarn dev
# or
yarn local:dev
```
## References
### Github Action
- https://github.com/google-github-actions/example-workflows/tree/main/workflows/deploy-cloudrun
- https://www.youtube.com/watch?v=IjUnQ9kMnVo
- https://medium.com/weekly-webtips/this-is-how-i-deploy-next-js-into-google-cloud-run-with-github-actions-1d7d2de9d203
### Database
- https://joncloudgeek.com/blog/deploy-postgres-container-to-compute-engine/
