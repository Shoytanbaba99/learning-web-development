import { GuestbookList } from "./GuestbookList";
import { GuestbookForm } from "./GuestbookForm";
import { GuestbookProvider } from "./GuestbookContext";

export type GuestbookEntry = {
  id: string;
  createdAt: string;
  name: string;
  message: string;
};
export type FormState = {
  status: "success" | "error" | "idle";
  errors?: {
    name?: string;
    message?: string;
  };
};
export function Guestbook() {
  return (
    <GuestbookProvider>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-start space-y-10 px-4 py-16">
        <div className="space-y-2 text-center">
          <h1 className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent">
            The Guestbook
          </h1>
          <p className="mx-auto max-w-sm text-sm text-zinc-400">
            Leave a message, sign your name, and claim your spot on this wall.
          </p>
        </div>
        <div className="space-y-8">
          <GuestbookForm />
          <div className="space-y-4">
            <h2 className="px-1 text-xs font-bold tracking-widest text-zinc-500 uppercase">
              Recent Signatures
            </h2>
            <GuestbookList />
          </div>
        </div>
      </div>
    </GuestbookProvider>
  );
}
