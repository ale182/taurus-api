import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV,
  timeZone: process.env.TZ,
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
  version: process.env.APP_VERSION,
  port: process.env.APP_PORT,
  token: process.env.APP_TOKEN,
}))
