"use client";
import { useActionState } from "react";
import signGuestBook from "../lib/guestbook";

export default function GuestbookPage() {
    const [state, formAction] = useActionState(signGuestBook, { greetings: "" });
    return (
        <div className="p-8">
            <form action={formAction} className="space-y-4">
                <input
                    name="name"
                    placeholder="Your Name"
                    className="border p-2 text-black block"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Sign GuestBook
                </button>
            </form>
            {state.greetings && (
                <p className="mt-4 p-4 bg-green-100 text-green-800 rounded">{state.greetings}</p>
            )}
        </div>
    );
}
