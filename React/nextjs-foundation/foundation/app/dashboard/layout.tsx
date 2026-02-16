import Link from "next/link";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-slate-900 p-4 border-r text-white">
                <h2 className="font-bold mb-4">Sidebar</h2>
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard/stats">Stats</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/settings">Settings</Link>
                    </li>
                </ul>
            </aside>
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
