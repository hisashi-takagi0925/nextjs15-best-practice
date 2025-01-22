import { z } from "zod";
import { postSchema } from "../schema";

export type PostEntity = z.infer<typeof postSchema>;
