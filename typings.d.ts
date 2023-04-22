declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: string;
    NESTJS_CLEAN_ARCH_DB_CONNECTION: string;
  }
}
