"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function DeletePost({ id }: { id: number }) {
  const router = useRouter();
  const deletePost = api.post.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  return (
    <button
      onClick={() => deletePost.mutate({ id: id })}
      disabled={deletePost.isPending}
      className="rounded-full bg-red-500/20 px-4 py-2 font-bold text-red-200 transition hover:bg-red-500/40"
    >
      {deletePost.isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
