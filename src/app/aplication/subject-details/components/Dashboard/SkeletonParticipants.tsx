import { Skeleton } from '@/components/Skeleton';

export function SkeletonParticipants() {
   return (
      <Skeleton className="w-full h-full py-3 px-5 flex items-center gap-2 bg-zinc-200">
         <>
            <Skeleton className="bg-zinc-300 w-10 h-10" variant="circle" />
            <div className="w-10/12 space-y-1">
               <Skeleton className="bg-zinc-300 w-1/2" variant="text" />
               <Skeleton className="bg-zinc-300 h-4 w-1/2" variant="text" />
            </div>
         </>
      </Skeleton>
   );
}
