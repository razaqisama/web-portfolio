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
  aws: {
    s3: {
      name: process.env.AWS_S3_BUCKET_NAME,
      region: process.env.AWS_S3_BUCKET_REGION,
      accessKey: process.env.AWS_S3_BUCKET_ACCESS_KEY,
      secretKey: process.env.AWS_S3_BUCKET_SECRET_KEY,
    },
  },
};
