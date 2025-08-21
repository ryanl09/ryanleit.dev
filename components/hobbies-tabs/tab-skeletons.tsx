import { Skeleton } from '../ui/skeleton';

export function RoyaleTabSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-[100px] w-[100px] rounded-full" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-20" />
            <div className="mt-2 space-y-1">
              <Skeleton className="h-3 w-20" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-5 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        <Skeleton className="h-3 w-20 mb-2" />
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-12" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-5 w-8" />
          </div>
        </div>
        <Skeleton className="h-3 w-28 mt-4 mb-2" />
        <div className="relative w-fit">
          <Skeleton className="h-[50px] w-[50px]" />
          <Skeleton className="h-6 w-6 absolute top-0 -right-2" />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative">
                  <Skeleton className="h-[50px] w-[50px]" />
                  <Skeleton className="h-6 w-6 absolute top-0 -right-2" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="relative">
                  <Skeleton className="h-[50px] w-[50px]" />
                  <Skeleton className="h-6 w-6 absolute top-0 -right-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-[30px] w-[30px]" />
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function RivalsTabSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-[100px] w-[100px] rounded-full" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="space-y-1">
              <Skeleton className="h-3 w-20" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-[30px] w-[30px]" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
            <div className="space-y-1">
              <Skeleton className="h-3 w-16" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-[30px] w-[30px]" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
