import { request } from "undici";

const VERSION = 1;

export const baseURL = "https://api.myquran.com/v" + VERSION;

export async function requestHandler<T extends BaseRequest>(path: string): Promise<T | null> {
  const data = await request(baseURL + path, { method: "GET" });
  if (data.statusCode >= 400) return null;

  const parsedData = await data.body.json() as T;
  if (!parsedData.status) return null;

  return parsedData;
};