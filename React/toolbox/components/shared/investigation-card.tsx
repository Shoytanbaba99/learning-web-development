import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    rotation?: string;
}

export function InvestigationCard({ children, rotation = "rotate-0" }: Props) {
    return (
        <div
            className={`relative bg-[#1c1c1c] border border-[#272C31] p-6 rounded-sm shadow-xl transition-transform hover:scale-105 hover:z-10 ${rotation}`}
        >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E6C07B] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-[#B9986F]/20" />

            {children}
        </div>
    );
}
