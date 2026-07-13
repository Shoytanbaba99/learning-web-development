import { useGuestbook } from "./GuestbookContext";

export function GuestbookList() {
  const { entries, removeEntry } = useGuestbook();
  if (!entries.length) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-800/80 bg-zinc-900/20 py-12 text-center">
        <p className="text-sm font-medium text-zinc-500">
          No entries yet. Be the first to sign the guestbook!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div
          key={entry.id}
          className="group flex items-start justify-between gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-5 shadow-md backdrop-blur-sm transition-all hover:border-zinc-800"
        >
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-zinc-200">{entry.name}</h3>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span className="text-[10px] font-medium tracking-wider text-zinc-500 uppercase">
                {entry.createdAt}
              </span>
            </div>
            <p className="text-sm leading-relaxed wrap-break-word whitespace-pre-wrap text-zinc-400">
              {entry.message}
            </p>
          </div>
          <button
            onClick={() => removeEntry(entry.id)}
            className="shrink-0 cursor-pointer rounded-lg border border-red-950/30 bg-red-950/20 px-3 py-1.5 text-xs font-semibold text-red-400/80 transition-all hover:border-red-950/60 hover:bg-red-950/40 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
