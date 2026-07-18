import * as Dialog from "@radix-ui/react-dialog";

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  children: React.ReactNode;
}

export function ConfirmDeleteModal({ onConfirm, children }: ConfirmDeleteModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl z-50 focus:outline-none text-white">
          <Dialog.Title className="text-lg font-bold text-zinc-100">Are you sure?</Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-zinc-400 leading-relaxed">
            This action cannot be undone. This signature will be permanently deleted.
          </Dialog.Description>

          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button className="rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition-all cursor-pointer">
                Cancel
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                onClick={onConfirm}
                className="rounded-xl bg-red-600 hover:bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition-all cursor-pointer shadow-lg shadow-red-600/10"
              >
                Delete Entry
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
