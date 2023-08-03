/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly AUTH_DOMAIN: string;
  readonly PROJECT_ID: string;
  readonly STORAGE_BUCKET: string;
  readonly MESSAGING_SENDER_ID: string;
  readonly APP_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
