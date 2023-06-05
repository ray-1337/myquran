import test from "ava";
import { findPrayCityByID, findPrayCityByKeyword, getAllPrayCities, getDailyPraySchedule, getMonthlyPraySchedule, getTafsirByID } from "./Index";

const depok = "1225";

test("find pray city from depok", async (t) => {
  const city = await findPrayCityByKeyword("depok");
  t.is(city?.data[0].id === depok, true);
});

test("find depok city based on ID", async (t) => {
  const city = await findPrayCityByID(depok);
  t.is(city?.data.id === depok, true);
});

test("get all prayer cities", async (t) => {
  const cities = await getAllPrayCities();
  t.is(cities?.length && cities.length >= 1, true);
});

test("get prayer schedule based on a specific day", async (t) => {
  const currentDay = new Date();
  const schedule = await getDailyPraySchedule(depok, currentDay.getFullYear(), currentDay.getMonth(), currentDay.getDay());
  t.is(schedule?.data.id === depok, true);
});

test("get prayer schedule based on a specific month", async (t) => {
  const currentDay = new Date();
  const schedule = await getMonthlyPraySchedule(depok, currentDay.getFullYear(), currentDay.getMonth());
  t.is(schedule?.data.id === depok, true);
});

test("get tafsir content", async (t) => {
  const tafsirID = "1337";
  const schedule = await getTafsirByID(tafsirID);
  t.is(schedule?.data[0].tafsir_id === +tafsirID, true);
});