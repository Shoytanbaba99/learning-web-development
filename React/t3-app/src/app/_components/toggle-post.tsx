"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function TogglePost({ id }: { id: number }) {
  const router = useRouter();
  const togglePost = api.post.toggle.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  return (
    <button
      onClick={() => togglePost.mutate({ id: id })}
      disabled={togglePost.isPending}
      className="ml-2 rounded-full bg-green-500/20 px-4 py-2 font-bold text-green-200 transition hover:bg-green-500/40"
    >
      {togglePost.isPending ? "..." : "Done"}
    </button>
  );
}
