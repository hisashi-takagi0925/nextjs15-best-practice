import {
  Table as TableShadcn,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/shadcn/components/ui/table";
import { ReactNode } from "react";

type Props = {
  title?: string;
  columns: ReactNode[];
  rows: ReactNode[][];
};

export const Table = ({ title, columns, rows }: Props) => {
  return (
    <TableShadcn>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableShadcn>
  );
};
