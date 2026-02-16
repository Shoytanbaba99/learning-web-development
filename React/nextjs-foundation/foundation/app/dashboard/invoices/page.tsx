"use client";
import { useActionState } from "react";
import { createInvoice } from "@/app/lib/action";
import { SubmitButton } from "@/app/ui/SubmitButton";

export default function InvoicesPage() {
    const [state, formAction] = useActionState(createInvoice, { message: "" });

    return (
        <form action={formAction} className="flex flex-col gap-4 w-64">
            <input name="amount" type="number" className="border p-2 text-black" />
            <SubmitButton />
            <p className="mt-2 text-sm font-medium">{state.message}</p>
        </form>
    );
}
