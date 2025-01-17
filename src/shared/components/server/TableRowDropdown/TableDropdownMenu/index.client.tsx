"use client";

import { DropdownMenuItem } from "@/lib/shadcn/components/ui/dropdown-menu";

type Props = {
  action: {
    label: string;
    action: () => Promise<void>;
  };
};

export const TableDropdownMenu = ({ action }: Props) => {
  return (
    <DropdownMenuItem
      className="cursor-pointer hover:bg-gray-100"
      key={action.label}
      onClick={action.action}
    >
      {action.label}
    </DropdownMenuItem>
  );
};
