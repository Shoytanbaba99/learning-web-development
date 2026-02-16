import { Skeleton } from "@/components/ui/skeleton";

export function CodeforcesSkeleton() {
    return (
        <div className="flex flex-col lg:flex-row gap-12 w-full animate-pulse mt-12">
            <div className="lg:w-3/5 space-y-6">
                <Skeleton className="h-6 w-32 bg-[#0d0d0d]"></Skeleton>
                <Skeleton className="h-64 w-full bg-[#0d0d0d] rounded-2xl"></Skeleton>
            </div>

            <div className="lg:w-2/5 space-y-6">
                <Skeleton className="h-6 w-48 bg-[#1c1c1c]"></Skeleton>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Skeleton key={i} className="h-12 w-full bg-[#1c1c1c]"></Skeleton>
                    ))}
                </div>
            </div>
        </div>
    );
}
