import { Skeleton } from '@/components/Skeleton';

export function HeaderSkeleton() {
   return (
      <Skeleton className="rounded-md min-h-[150px] overflow-hidden">
         <Skeleton className="h-[60px] bg-zinc-400 rounded-t-none" />
      </Skeleton>
   );
}
