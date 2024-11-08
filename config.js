//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349019760022";
global.owner = process.env.OWNER_NUMBER || "2349019760022";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pDMWFnQTNFeGVEeEtIWVZLa2t5UktVYVBuZjA3UjFoU3d1Y2dRRlZrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3Jrek9DMlZkbGYrdnY0VklKSmRIRUxTemJmdGVOdllvKzV3Y1diQ2xYTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSm9iZ0dOSUJyeFNWcVJJU0psaUJlTW9nVzVNdmhuOFVxYldYbStQODBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMWtjYUpTaWYySjBSYTdMdndWZWRWTGxYbDVtM1ZZZmI0bGZMMGFSWkJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCTGN1QllEcTBDQlZRTDh6ajZVWjh4WFBDcmZWOVBiN0haS29pSDRJSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9MdUJHdCszWjQ2aStqQmNjcmpuMnZsb1o2bGNOTzVaVFJwVzdqT2VsMTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BYTlN3U3VFL3Q1Y25OSWp0cktEeFllendUY1MxQnU1ZlVoTTIwS0JIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXZDNXE1MGMrOUNZU0FnUE5SVDQvUUh0QzVnWFFHU0h0NGw0NWZMbXBYMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRnSThRMnJRVmpvYWI4K0dacVlyN0ttbk84a1FMRHJvOGV3Q2pYSDhTb3Z3andNSWRaZ2l3YXhXbGJnb2dia1E1SzBBRmgxWWZDcUtrZ21jV2E4WER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJzalRWWW9rNlJrOHlaVWlIZ0xXNmVObHorakE1REg2endUUHR2cWFkcGFZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyNU9TMWotYlJ4V09Cc3NrTXhmTEFRIiwicGhvbmVJZCI6IjQ2MmJjOWIwLWI5NTUtNDNiZi05Y2NkLWFmYjk3MzczYjM1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cEFaeCsrcXB5MTZtTXYyck00REZ0VlNBWE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSk16QnQ3d2JzbXY5R2wxeGxQVTJzZFMyTW9rPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxNN1NCTTNSIiwibWUiOnsiaWQiOiIyMzQ5MDE5NzYwMDIyOjY2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNajZpS1VCRUxQSXQ3a0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJubk9MUGJ4azRyRmhiTDI0Um1URXdXK2dUNWsyYnFNdnc1dXlHUTJNRFcwPSIsImFjY291bnRTaWduYXR1cmUiOiJXVHdSaGlNWGU4eFhPVU9MUzBxY1VvNHlHemRXT0o0SE1nejdZUURFTFNvcFF1aHdYbmVScnM2SjhXRUtXZ28wWnlCTUJCYTd1VUl5N0syNDdFK2dEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiLzlQYkt6RGV4QzdCd094K3FJQ0IzYnY2djA2RDZ4Z0hoNWgwRitnYVRydDBzQWtsdUU0ZGFteUdiZitaeTFXYTdJU05BLy8zYnpleUk0UmgwdjB0Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE5NzYwMDIyOjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo1eml6MjhaT0t4WVd5OXVFWmt4TUZ2b0UrWk5tNmpMOE9ic2hrTmpBMXQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzEwNjA4MDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FpIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
