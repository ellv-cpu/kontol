module.exports = {
  // ─── TELEGRAM ──────────────────────────────────────────────────────────────
  BOT_NAME: "BOT BUILD APK ELXZ",
  BOT_VERSION: "1.0",
  BOT_TOKEN: "8927867622:AAHoamY8ghUinzUmxZ0wygQylVjZ_XkvslQ",
  API_ID: 39326863,
  API_HASH: "08fe9c2b3358360da2aa7c9b07b4bb16",

  // ─── ACCESS ────────────────────────────────────────────────────────────────
  ADMIN_IDS: [7571009414],
  OWNER_ID: 7571009414,

  // ─── GITHUB ────────────────────────────────────────────────────────────────
  // WAJIB: Generate token baru di https://github.com/settings/tokens
  // Classic token → centang scope: repo + workflow
  // Atau Fine-grained → Repository access: ellv-cpu/ellnichollv
  //   Permissions: Contents (Read and write), Actions (Read and write), Metadata (Read)
  // Token lama sudah INVALID (401 Bad credentials) → ganti sekarang!
  GITHUB_TOKEN: "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",
  GITHUB_USERNAME: "ellv-cpu",
  GITHUB_REPO: "ellnichollv",

  // ─── CHANNEL / UI ──────────────────────────────────────────────────────────
  CHANNEL_USERNAME: "@informasichnlel",
  WELCOME_PHOTO: "https://files.catbox.moe/e1j1zy.jpg",
  NEW_USER: "https://files.catbox.moe/e1j1zy.jpg",

  // ─── BUILD ─────────────────────────────────────────────────────────────────
  TMP_DIR: "./tmp",
  BUILD_TIMEOUT_MS: 30 * 60 * 1000,
  POLL_INTERVAL_MS: 7000,
  WEB2APK_MAINTENANCE: false,
};
