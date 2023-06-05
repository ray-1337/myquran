import { MostBaseRequest, PrayerCityContent } from "./Typings";
import { request } from "undici";

const VERSION = 1;

export const baseURL = "https://api.myquran.com/v" + VERSION;

export async function requestHandler<T = unknown>(path: string, ...params: Array<string | number>): Promise<T | null> {
  const data = await request(baseURL + path + params.join("/"), { method: "GET" });
  if (data.statusCode >= 400) return null;

  // im dumb at typescript, please enlighten me
  const parsedData = await data.body.json() as T;
  if (isMostBaseRequest(parsedData) && !parsedData.status) return null;

  // stringify id
  if (isIncludePrayerCityContent(parsedData)) {
    parsedData.data.id = String(parsedData.data.id);
  };

  return parsedData as T;
};

function isMostBaseRequest(parsedData: any): parsedData is MostBaseRequest {
  return "status" in parsedData;
};

function isIncludePrayerCityContent(parsedData: any): parsedData is MostBaseRequest<PrayerCityContent> {
  return isMostBaseRequest(parsedData) ? "lokasi" in parsedData.data : false;
};