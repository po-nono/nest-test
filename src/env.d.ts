declare namespace NodeJS {
  interface ProcessEnv {
    DB_HOST: string
    DB_PORT: number
    DB_USER: string
    DB_PASS: string
    DB_NAME: string
  }
}
