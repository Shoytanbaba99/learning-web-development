import { api } from "~/trpc/server";
import { CreatePost } from "./_components/create-post"; // <--- IMPORT THIS

export default async function Home() {
  const latestPost = await api.post.getLatest();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="mb-4 text-4xl font-bold">The T3 Connection</h1>

        <CreatePost />

        <div className="mt-8 rounded-xl border border-gray-700 bg-gray-800 p-10 shadow-2xl">
          <p className="mb-2 text-gray-400">
            The latest entry in your database is:
          </p>

          {latestPost ? (
            <p className="animate-pulse text-3xl font-extrabold text-green-400">
              {latestPost.name}
            </p>
          ) : (
            <p className="text-red-400">No posts found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
