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
      className={`mt-2 w-full rounded py-2 font-bold text-white transition-colors ${
        pending ? "cursor-not-allowed bg-gray-700 opacity-50" : "bg-blue-600 hover:bg-blue-500"
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
      className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-800 p-6"
    >
      <h3 className="text-center text-sm font-semibold tracking-wider text-gray-400 uppercase">
        System Action Override
      </h3>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-500">Operator Name</label>
        <input
          name="username"
          type="text"
          required
          placeholder="e.g. John Doe"
          className="rounded border border-gray-700 bg-gray-900 p-2 text-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-bold text-gray-500">New Status</label>
        <select
          name="status"
          required
          className="rounded border border-gray-700 bg-gray-900 p-2 text-sm focus:border-blue-500 focus:outline-none"
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
