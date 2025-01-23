import { z } from "zod";

export const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(1, { message: "タイトルは必須です" }),
  body: z.string().min(1, { message: "本文は必須です" }),
});
