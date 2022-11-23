import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const awsAuth = {
  // optional if auth done in html before
  region: "us-east-1", // for example : 'us-east-1'
  accessKeyId: "AKIAXU5DD2ZZ2L34DK6N",
  secretAccessKey: "73tlAylH8wbJaZYVY5E5JhpkhQf5pAtTGO2LBE9v",
  bucket: "phuongjolly-portfolio",
};

export default async function s3Uploader(file, key, contentType) {
  const client = new S3Client({
    region: awsAuth.region,
    credentials: {
      accessKeyId: awsAuth.accessKeyId,
      secretAccessKey: awsAuth.secretAccessKey,
    },
  });

  const putRequest = new PutObjectCommand({
    Body: file,
    Bucket: awsAuth.bucket,
    Key: key,
    ContentType: contentType,
    ACL: "public-read",
  });
  await client.send(putRequest);
  return `https://${awsAuth.bucket}.s3.amazonaws.com/${key}`;
}

export async function readFile(file, setData) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setData({ name: file.name, type: file.type, url: reader.result });
  };
}
