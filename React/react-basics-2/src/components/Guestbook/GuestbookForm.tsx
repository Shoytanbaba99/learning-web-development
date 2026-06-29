import { useFormStatus } from "react-dom";
import { FormState } from "./Guestbook";
import { useActionState } from "react";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <>
            <button type="submit" disabled={pending}>
                {pending ? "Submitting" : "Sign Guestbook"}
            </button>
        </>
    );
}

export function GuestbookForm({
    onAddEntry,
}: {
    onAddEntry: (name: string, message: string) => void;
}) {
    async function handleSubmit(prevState: FormState, formData: FormData): Promise<FormState> {
        const name = formData.get("name")?.toString().trim() ?? "";
        const message = formData.get("message")?.toString().trim() ?? "";
        const errors: FormState["errors"] = {};
        if (!name) {
            errors.name = "Name is Required.";
        }
        if (!message) {
            errors.message = "message is required.";
        }
        if (Object.keys(errors).length > 0) {
            return {
                status: "error",
                errors,
            };
        }
        onAddEntry(name, message);
        return { status: "success" };
    }
    const [state, formAction] = useActionState(handleSubmit, { status: "idle" });
    return (
        <form action={formAction}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                {state.errors?.name && <p style={{ color: "red" }}>{state.errors.name}</p>}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input type="text" id="message" name="message" />
                {state.errors?.message && <p style={{ color: "red" }}>{state.errors.message}</p>}
            </div>
            <SubmitButton />
            {state.status === "success" && <p style={{ color: "green" }}>Success!</p>}
        </form>
    );
}
