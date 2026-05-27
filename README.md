# Dhanith Sri Fan Site

Static fan site for Dhanith Sri.

## Local development

Open `index.html` directly, or serve the folder with any static server.

## Deploy to Vercel

This project is a static site, so it can be deployed directly from the repository root.

1. Push this folder to a GitHub repository.
2. Open Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the project root set to the repository root.
5. Leave the build command empty.
6. Leave the output directory empty.
7. Deploy.

Automatic GitHub deploy (optional):

- This repo includes a GitHub Actions workflow at `.github/workflows/deploy-vercel.yml` that will run on pushes to `main` and `gh-pages` and attempt to deploy to Vercel using the Vercel CLI.
- To enable it, create a Vercel Personal Token and add it to your repository secrets as `VERCEL_TOKEN` (Repository → Settings → Secrets → Actions → New repository secret).
- Optional: if you want the workflow to target an existing Vercel project, also add `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` secrets. Otherwise the workflow will create a new deployment.

Create a Vercel token:

1. Go to https://vercel.com/account/tokens and create a new Personal Token.
2. Copy the token and add it to your GitHub repo secrets as `VERCEL_TOKEN`.

After adding the secret, push to `main` (or `gh-pages`) and the action will deploy automatically.

## Notes

- `vercel.json` is already included for clean static hosting.
- The main entry file is `index.html`.
