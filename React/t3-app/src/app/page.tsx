import { api } from "~/trpc/server";
import { CreatePost } from "./_components/create-post";
import { DeletePost } from "./_components/delete-post";
import { TogglePost } from "./_components/toggle-post";

export default async function Home() {
  const posts = await api.post.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="mb-4 text-4xl font-bold">The T3 Feed</h1>
        <CreatePost />

        <div className="flex w-full max-w-md flex-col gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between ..."
            >
              <div className="flex items-center gap-2">
                <p
                  className={
                    post.completed ? "text-gray-500 line-through" : "text-white"
                  }
                >
                  {post.name}
                </p>
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
