import { MostBaseRequest, PraySchedule, TafsirContent, PrayerCityContent } from "./Typings";
import { requestHandler } from "./Util";

export const findPrayCityByKeyword = async (keyword: string) => requestHandler<MostBaseRequest<PrayerCityContent[]>>("/sholat/kota/cari/", keyword);

export const findPrayCityByID = async (cityID: string) => requestHandler<MostBaseRequest<PrayerCityContent>>("/sholat/kota/id/", cityID);

export const getAllPrayCities = async () => requestHandler<PrayerCityContent[]>("/sholat/kota/semua");

export const getDailyPraySchedule = async (cityID: string, year: number, month: number, day: number) => requestHandler<MostBaseRequest<PraySchedule>>("/sholat/jadwal/", cityID, year, month, day);

export const getMonthlyPraySchedule = async (cityID: string, year: number, month: number) => requestHandler<MostBaseRequest<PraySchedule>>("/sholat/jadwal/", cityID, year, month);

export const getTafsirByID = async (tafsirID: string) => requestHandler<MostBaseRequest<TafsirContent[]>>("/tafsir/quran/kemenag/id/", tafsirID);