export const config = {
  app: {
    auth: {
      secret: new TextEncoder().encode(process.env.APP_AUTH_SECRET),
    },
  },
  db: {
    url: process.env.DB_URL ?? "",
    authToken: process.env.DB_AUTH_TOKEN,
  },
};
