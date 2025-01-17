import { Skeleton } from "@/lib/shadcn/components/ui/skeleton";

export const TableSkeleton = () => {
  const ROW_COUNT = 10;

  return (
    <div className="space-y-8 w-full">
      {Array.from({ length: ROW_COUNT }).map((_, index) => {
        return <Skeleton key={index} className="h-4 w-full bg-gray-200" />;
      })}
    </div>
  );
};
