import { Skeleton } from '@/components/Skeleton';

export function HeaderSkeleton() {
   return (
      <div className="flex flex-col justify-between py-3 gap-6">
         <div className="space-y-1">
            <Skeleton className="bg-zinc-300 w-24 h-2" />
            <Skeleton className="bg-zinc-300 w-44 h-3" />
            <Skeleton className="bg-zinc-300 w-52 h-2" />
         </div>
         <Skeleton className="bg-zinc-300 w-12 h-2" />
      </div>
   );
}
