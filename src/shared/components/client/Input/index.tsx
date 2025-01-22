import { Input as InputShadcn } from "@/lib/shadcn/components/ui/input";
import { cn } from "@/lib/shadcn/components/utils/utils";

type Props = {
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  maxLength?: number;
  currentLength?: number;
  errorMessage?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  label,
  placeholder,
  required,
  fullWidth = false,
  maxLength,
  currentLength,
  errorMessage,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <div className={cn("flex flex-col gap-2 h-18", fullWidth && "w-full")}>
      {label && (
        <div className="flex items-center gap-2">
          <div className="text-sm font-bold text-gray-500 ">{label}</div>
          {required && <div className="text-red-500">*</div>}
        </div>
      )}
      <InputShadcn
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div className="flex justify-between">
        {errorMessage && (
          <div className=" text-red-500 text-xs font-bold">{errorMessage}</div>
        )}
        {maxLength && (
          <div className="text-sm text-gray-500">
            {currentLength} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
};
