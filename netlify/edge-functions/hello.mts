import type { Config, Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response("Hello, world! Edge", {
    headers: {
      'content-type': 'text/html'
    }
  });
};

export const config: Config = {
  path: "/hello"
};