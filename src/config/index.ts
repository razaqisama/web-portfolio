export const config = {
  db: {
    url: process.env.DB_URL ?? "",
    authToken: process.env.DB_AUTH_TOKEN,
  },
};
