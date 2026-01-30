# T3 Post Feed with Auth (Day 10 Project)

This project is a Full CRUD (Create, Read, Update, Delete) application built with the [T3 Stack](https://create.t3.gg/), now enhanced with Authentication. It demonstrates how to use Next.js, tRPC, Prisma, Tailwind CSS, and NextAuth.js together.

**Live Demo:** [https://learning-web-development-kappa.vercel.app/](https://learning-web-development-kappa.vercel.app/)

## Features

-   **Authentication:** Secure login using Discord OAuth (via NextAuth.js).
-   **Protected Procedures:** Only authenticated users can create or manage posts.
-   **Create Posts:** Users can add new posts to the feed (Requires Login).
-   **Read Posts:** Displays a real-time list of posts ordered by creation date (Public).
-   **Update Posts:** Toggle the "completed" status of a post.
-   **Delete Posts:** Remove posts from the database.
-   **Database:** Uses PostgreSQL (via Prisma) to persist data.

## Tech Stack

-   [Next.js](https://nextjs.org)
-   [NextAuth.js](https://next-auth.js.org)
-   [tRPC](https://trpc.io)
-   [Prisma](https://prisma.io)
-   [Tailwind CSS](https://tailwindcss.com)

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up the database:**
    Make sure you have a valid `DATABASE_URL` in your `.env` file (see `.env.example`).
    ```bash
    npx prisma db push
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.