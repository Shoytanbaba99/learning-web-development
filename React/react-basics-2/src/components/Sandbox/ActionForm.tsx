import React from "react";
import { useFormStatus } from "react-dom";
// SENSEI: 1. Define the props contract for our typed form.
// It needs:
// - onUpdate (a callback function that takes a newStatus (string) AND a newUser (string) and returns nothing)
interface ActionFormProps {
    onUpdate: (newStatus: string, newUser: string) => Promise<void>;
}

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className={`w-full mt-2 py-2 rounded font-bold transition-colors text-white ${
                pending
                    ? "bg-gray-700 opacity-50 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
            }`}
        >
            {pending ? "Executing..." : "Execute Action"}
        </button>
    );
};

const ActionForm = ({ onUpdate }: ActionFormProps) => {
    // SENSEI: 2. Implement the asynchronous submitAction here.
    // - It must receive the browser's native `formData` object as an argument.
    // - What is the TypeScript type of `formData`? (Hint: It is `FormData`)

    const submitAction = async (formData: FormData) => {
        // A. Extract "username" and "status" from the formData using .get()
        // B. Call the onUpdate callback passing these extracted values
        const username = String(formData.get("username"));
        const status = String(formData.get("status"));

        await onUpdate(status, username);
    };

    return (
        <form
            action={submitAction}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col gap-4"
        >
            <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider text-center">
                System Action Override
            </h3>

            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-bold">Operator Name</label>
                <input
                    name="username"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="bg-gray-900 border border-gray-700 p-2 rounded text-sm focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-500 font-bold">New Status</label>
                <select
                    name="status"
                    required
                    className="bg-gray-900 border border-gray-700 p-2 rounded text-sm focus:outline-none focus:border-blue-500"
                >
                    <option value="Active">Active</option>
                    <option value="On Break">On Break</option>
                    <option value="Offline">Offline</option>
                </select>
            </div>

            <SubmitButton></SubmitButton>
        </form>
    );
};

export default ActionForm;
