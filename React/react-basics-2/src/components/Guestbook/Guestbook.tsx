import { useState } from "react";
import { GuestbookList } from "./GuestbookList";
import { GuestbookForm } from "./GuestbookForm";

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
    const [entries, setEntries] = useState<GuestbookEntry[]>([]);

    function addEntry(name: string, message: string) {
        const id = crypto.randomUUID();
        const createdAt = new Date().toDateString();
        const newEntry = { name, message, id, createdAt };
        setEntries((prev) => [newEntry, ...prev]);
    }
    function removeEntry(id: string) {
        setEntries((prev) => prev.filter((item) => item.id !== id));
    }
    return (
        <>
            <h2>Guestbook</h2>
            <GuestbookForm onAddEntry={addEntry}></GuestbookForm>
            <GuestbookList entries={entries} onDelete={removeEntry}></GuestbookList>
        </>
    );
}
