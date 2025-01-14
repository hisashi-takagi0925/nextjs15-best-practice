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
    <DropdownMenuItem key={action.label} onClick={action.action}>
      {action.label}
    </DropdownMenuItem>
  );
};
