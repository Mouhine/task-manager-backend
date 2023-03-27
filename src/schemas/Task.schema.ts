import { z, ZodTypeAny } from "zod";

const subTask = z.object({
  id: z.string().optional(),
  title: z.string(),
  checked: z.boolean(),
});

const taskSchema = z.object({
  id: z.string().optional(),
  title: z.string({ required_error: "title is required" }),
  description: z.string(),
  createdAt: z.date().optional(),
  subTasks: z.array(subTask).optional(),
  status: z.enum(["DOING", "DONE", "TODO"]),
});
export type Task = z.TypeOf<typeof taskSchema>;
