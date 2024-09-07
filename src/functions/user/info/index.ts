import schema from "@/functions/auth/login/schema";
import { generatePath, handlerPath } from "@/lib/handler-resolver";
import { AwsFunction } from "@/types";

export const userInfo: AwsFunction = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: "get",
        path: generatePath(__dirname),
      },
    },
  ],
};
