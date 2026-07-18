import { useFormStatus } from "react-dom";
import { FormState } from "./Guestbook";
import { useActionState, useEffect, useRef } from "react";
import { useGuestbook } from "./GuestbookContext";
import { cn } from "../../utils/cn";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full cursor-pointer rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white shadow-lg transition-all duration-200",
        pending
          ? "cursor-not-allowed bg-indigo-800/40 text-zinc-500"
          : "shadow-indigo-600/10 hover:bg-indigo-500 active:scale-[0.99]",
      )}
    >
      {pending ? "Submitting..." : "Sign Guestbook"}
    </button>
  );
}

export function GuestbookForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { addEntry } = useGuestbook();
  useEffect(() => {
    nameInputRef.current?.focus();
  }, []); // automatic focus on name
  const failedAttemptsRef = useRef<number>(0);
  async function handleSubmit(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const errors: FormState["errors"] = {};
    if (!name) {
      errors.name = "Name is required.";
    }
    if (!message) {
      errors.message = "Message is required.";
    }
    if (Object.keys(errors).length > 0) {
      failedAttemptsRef.current += 1;
      return {
        status: "error",
        errors,
      };
    }
    addEntry(name, message);
    console.log("Submitted Successful", failedAttemptsRef.current);
    failedAttemptsRef.current = 0;
    return { status: "success" };
  }
  const [state, formAction] = useActionState(handleSubmit, { status: "idle" });

  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (state.status === "error") {
      if (state.errors?.name) {
        nameInputRef.current?.focus();
      } else if (state.errors?.message) {
        messageInputRef.current?.focus();
      }
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="space-y-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 shadow-xl backdrop-blur-md"
    >
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="name"
          className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
        >
          Name
        </label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          name="name"
          placeholder="your name"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 focus:outline-none"
        />
        {state.errors?.name && (
          <p className="mt-1 text-xs font-medium text-red-400">{state.errors.name}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
        >
          Message
        </label>
        <textarea
          ref={messageInputRef}
          id="message"
          name="message"
          placeholder="Write a message..."
          rows={3}
          className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 focus:outline-none"
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs font-medium text-red-400">{state.errors.message}</p>
        )}
      </div>

      <SubmitButton />
      {state.status === "success" && (
        <p className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 py-2.5 text-center text-xs font-semibold text-emerald-400">
          Successfully signed the guestbook!
        </p>
      )}
    </form>
  );
}
