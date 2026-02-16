"use client";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className={`p-2 rounded text-white ${pending ? "bg-gray-400" : "bg-green-500"}`}
        >
            {pending ? "Processing..." : "Create Invoice"}
        </button>
    );
}
