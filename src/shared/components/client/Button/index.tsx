import { ButtonProps } from "@/lib/shadcn/components/ui/button";
import { cn } from "@/lib/shadcn/components/utils/utils";

type Props = ButtonProps & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: Props) => {
  return (
    <Button {...props} className={cn("min-w-24 font-bold", props.className)}>
      {children}
    </Button>
  );
};
