import { Button } from "@/lib/shadcn/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/lib/shadcn/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { TableDropdownMenu } from "./TableDropdownMenu/index.client";

type Props = {
  actions: {
    label: string;
    action: () => Promise<void>;
  }[];
};

export const TableRowDropdown = ({ actions }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-gray-200"
        >
          <MoreVertical className="text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {actions.map((action) => (
          <TableDropdownMenu key={action.label} action={action} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
