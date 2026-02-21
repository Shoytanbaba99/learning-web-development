import { InvestigationCard } from "@/components/shared/investigation-card";
import Link from "next/link";
export default function Home() {
    return (
        <main className="min-h-screen bg-background relative overflow-x-hidden p-10 md:p-20 flex flex-col items-center">
            {/* Subtle Texture Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <header className="relative z-10 mb-24 text-center">
                <h1 className="text-6xl font-black tracking-tighter text-primary uppercase italic">
                    Evidence_Board
                </h1>
                <p className="text-muted-foreground mt-4 tracking-[0.4em] text-[10px] uppercase opacity-50">
                    Analytical_Instruments // Terminal_V1.0
                </p>
            </header>

            <div className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12 w-full max-w-7xl px-4">
                <div className="break-inside-avoid-column">
                    <Link href="/codeforces" className="block max-w-sm mx-auto group">
                        <InvestigationCard rotation="rotate-1">
                            <h2 className="text-sm font-bold text-primary border-b border-border pb-3 mb-6 tracking-widest uppercase">
                                Case_01: CODEFORCES
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-background/50 p-5 border border-border rounded-xl">
                                    <p className="text-muted-foreground text-[9px] uppercase tracking-widest mb-2 opacity-50">
                                        Target_Handle
                                    </p>
                                    <p className="text-primary font-mono text-lg tracking-tight">
                                        Shoytanbaba99
                                    </p>
                                </div>
                                <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed">
                                    &quot;Solve more dogs...;
                                </p>
                            </div>
                        </InvestigationCard>
                    </Link>
                </div>

                <div className="break-inside-avoid-column">
                    <Link href="/taskmaster" className="block max-w-sm mx-auto group">
                        <InvestigationCard rotation="-rotate-1">
                            <h2 className="text-sm font-bold text-primary border-b border-border pb-3 mb-6 tracking-widest uppercase">
                                Case_02: TASKMASTER
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-background/50 p-5 border border-border rounded-xl">
                                    <p className="text-muted-foreground text-[9px] uppercase tracking-widest mb-2 opacity-50">
                                        Status
                                    </p>
                                    <p className="text-primary font-mono text-lg tracking-tight">
                                        Active_Investigation
                                    </p>
                                </div>
                                <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed">
                                    &quot;Organize the chaos.&quot;
                                </p>
                            </div>
                        </InvestigationCard>
                    </Link>
                </div>

                <div className="break-inside-avoid-column">
                    <div className="block max-w-xs mx-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <InvestigationCard rotation="-rotate-1">
                            <div className="h-48 flex flex-col items-center justify-center border-2 border-dashed border-border rounded-2xl text-muted-foreground/30">
                                <span className="text-[10px] uppercase font-bold tracking-[0.3em]">
                                    Awaiting_Intel
                                </span>
                            </div>
                        </InvestigationCard>
                    </div>
                </div>

                <div className="break-inside-avoid-column">
                    <div className="block max-w-xs mx-auto opacity-20">
                        <InvestigationCard rotation="rotate-3">
                            <div className="h-32 bg-muted/10 border border-border rounded-xl" />
                        </InvestigationCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
