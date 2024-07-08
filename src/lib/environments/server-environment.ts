import { z } from "zod";

const EnvironmentVariablesSchema = z.object({
  EMAIL_HOST: z.string(),
  EMAIL_PORT: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),
});

const serverEnv = EnvironmentVariablesSchema.parse(process.env);

export { serverEnv };
