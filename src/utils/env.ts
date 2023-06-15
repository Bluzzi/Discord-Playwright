import "dotenv/config";
import { z } from "zod";

// DTO:
export const envDTO = z.object({
  DISCORD_TOKEN: z.string().nonempty()
});

// Variables:
const parser = envDTO.safeParse(process.env);

if (!parser.success) throw Error("Missing environment variable");

export const env = parser.data;