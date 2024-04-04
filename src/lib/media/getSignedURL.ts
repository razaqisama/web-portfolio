"use server";

import { config } from "@/config";
import { generateRandomString } from "@/utils/generateRandomString";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: config.aws.s3.region ?? "",
  credentials: {
    accessKeyId: config.aws.s3.accessKey ?? "",
    secretAccessKey: config.aws.s3.secretKey ?? "",
  },
});

const acceptedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const acceptedSize = 1024 * 1024 * 10;

export async function getSignedURL(
  key: string,
  type: string,
  size: number,
  checksum: string,
) {
  if (!acceptedTypes.includes(type) || size > acceptedSize) {
    return {
      data: undefined,
      error: "Invalid file type or file too large",
    };
  }

  const uniqueName = `${key}-${generateRandomString()}`;

  const cmd = new PutObjectCommand({
    Bucket: config.aws.s3.name,
    Key: uniqueName,
    ContentType: type,
    ContentLength: size,
    ChecksumSHA256: checksum,
  });

  const signedURL = await getSignedUrl(s3, cmd, {
    expiresIn: 60,
  });

  return {
    data: {
      url: signedURL,
      name: uniqueName,
    },
    error: undefined,
  };
}
