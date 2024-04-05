import { config } from "@/config";
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: config.aws.s3.region ?? "",
  credentials: {
    accessKeyId: config.aws.s3.accessKey ?? "",
    secretAccessKey: config.aws.s3.secretKey ?? "",
  },
});
