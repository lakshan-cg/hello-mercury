# Hello Mercury

A single-page, space-themed website that displays the text "Hello Mercury" centered on the screen with a dark background, stars, and planetary aesthetics.

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: None
- **Database**: None
- **Deployment**: Vercel (Frontend)

## Prerequisites

- Node.js 18.x or later
- npm or yarn

## Local Development

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploying the Frontend (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to Vercel and click **Add New... > Project**.
3. Import your repository.
4. Vercel will automatically detect that it's a Next.js project.
5. Ensure the **Framework Preset** is set to `Next.js`.
6. Set the **Root Directory** to `frontend`.
7. Click **Deploy**.

Since this project has no backend or database, no environment variables are strictly required to be configured for deployment.