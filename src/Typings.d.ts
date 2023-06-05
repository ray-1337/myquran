export interface MostBaseRequest<T = undefined> {
  status: boolean;
  data: T extends undefined ? never : T;
}

export interface PrayerCityContent {
  id: string;
  lokasi: string;
}

export interface PraySchedule extends PrayerCityContent {
  daerah: string;

  koordinat: {
    lat: number;
    lon: number;
    lintang: string;
    bujur: string;
  };

  jadwal: Record<PrayScheduleType | "tanggal" | "date", string>;
}

export interface TafsirContent {
  tafsir_id: number;
  aya_name: string;
  sura_id: number;
  aya_number: number;
  text: string;
}

type PrayScheduleType = "imsak" | "subuh" | "terbit" | "dhuha" | "dzuhur" | "ashar" | "maghrib" | "isya";