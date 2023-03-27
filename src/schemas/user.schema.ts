import { z, infer } from "zod";

const userSchema = z.object({
  firstName: z
    .string({ required_error: "firstName is required" })
    .min(6, "first name is too short"),
  lastName: z
    .string({ required_error: "firstName is required" })
    .min(6, "last name is too short"),
  email: z
    .string({ required_error: "firstName is required" })
    .email("please provide a valid email"),
  password: z.string({ required_error: "firstName is required" }),
});

export type createUserInput = z.TypeOf<typeof userSchema>;
export type loginUserInput = Omit<createUserInput, "firstName" | "lastName">;
