import { api } from "~/trpc/server";
import { CreatePost } from "./_components/create-post";
import { DeletePost } from "./_components/delete-post";
import { TogglePost } from "./_components/toggle-post";
import { getServerAuthSession } from "~/server/auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerAuthSession();
  const posts = await api.post.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="mb-4 text-4xl font-bold">The T3 Feed</h1>

        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}{" "}
            {/* Session */}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "Sign out" : "Sign in with Discord"}
          </Link>
        </div>
        {session?.user && <CreatePost />}

        <div className="flex w-full max-w-md flex-col gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between rounded-lg bg-gray-800 p-4 shadow-md"
            >
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <p
                    className={
                      post.completed
                        ? "text-gray-500 line-through"
                        : "text-white"
                    }
                  >
                    {post.name}
                  </p>
                  <span className="text-xs text-gray-400">
                    {post.createdAt.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <TogglePost id={post.id} />
                <DeletePost id={post.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
