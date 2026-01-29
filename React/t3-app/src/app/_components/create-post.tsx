"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
      className="flex w-full max-w-xs flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Type a new post..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full border border-gray-700 bg-white/5 px-4 py-2 text-white placeholder:text-gray-400 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-300"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white transition hover:bg-white/20"
        disabled={createPost.isPending}
      >
        {createPost.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
