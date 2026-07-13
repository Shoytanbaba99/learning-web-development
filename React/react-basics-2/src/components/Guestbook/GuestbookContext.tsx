import { createContext, use, useState } from "react";
import { GuestbookEntry } from "./Guestbook";
import { useLocalStorage } from "./useLocalStorage";

interface GuestbookContextType {
  entries: GuestbookEntry[];
  addEntry: (name: string, message: string) => void;
  removeEntry: (id: string) => void;
}

export const GuestbookContext = createContext<GuestbookContextType | undefined>(undefined);

export function GuestbookProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useLocalStorage<GuestbookEntry[]>("guestbook_entries", []);

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
    <GuestbookContext.Provider value={{ entries, addEntry, removeEntry }}>
      {children}
    </GuestbookContext.Provider>
  );
}

export function useGuestbook() {
  const context = use(GuestbookContext);
  if (context === undefined) {
    throw new Error("useGuestbook must be used within a GuestbookProvider");
  }
  return context;
}
