import { ERROR_MESSAGE } from "@/shared/constants/errorMessage";
import { z } from "zod";
import {
  BODY_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  TITLE_MIN_LENGTH,
} from "../constants/length";

export const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z
    .string()
    .min(TITLE_MIN_LENGTH, {
      message: ERROR_MESSAGE.minLengthWith(TITLE_MIN_LENGTH),
    })
    .max(TITLE_MAX_LENGTH, {
      message: ERROR_MESSAGE.maxLengthWith(TITLE_MAX_LENGTH),
    }),
  body: z.string().min(BODY_MIN_LENGTH, {
    message: ERROR_MESSAGE.minLengthWith(BODY_MIN_LENGTH),
  }),
});
