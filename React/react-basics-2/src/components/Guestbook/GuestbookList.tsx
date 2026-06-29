import { GuestbookEntry } from "./Guestbook";
type GuestbookListProps = {
    entries: GuestbookEntry[];
    onDelete: (id: string) => void;
};

export function GuestbookList({ entries, onDelete }: GuestbookListProps) {
    if (!entries.length) {
        return <p>"No entries yet, Be the first to sign the guestbook"</p>;
    }
    return (
        <>
            {entries.map((entry) => (
                <div key={entry.id}>
                    <h3>{entry.name}</h3>
                    <small>{entry.createdAt}</small>
                    <p>{entry.message}</p>
                    <button onClick={() => onDelete(entry.id)}> Delete </button>
                </div>
            ))}
        </>
    );
}
