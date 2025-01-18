import { CustomHttpError } from "../customHttpError";

type Props = {
  error: unknown;
  onError?: (error: CustomHttpError) => void;
};

export const errorHandler = ({ error, onError }: Props) => {
  if (error instanceof CustomHttpError) {
    onError?.(error);
  }
  throw error;
};
