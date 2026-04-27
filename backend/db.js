import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const adaptor = new JSONFile("db.json");

const defaultData = {
  users: [],
  messages: [],
};

const db = new Low(adaptor, defaultData);

export async function initDB() {
  await db.read();

  db.data ||= defaultData;
  await db.write();
}

export default db;
