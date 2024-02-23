import AWS from 'aws-sdk';
import fs from 'fs';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3bucketInstance = new AWS.S3();
const s3bucketName = process.env.AWS_S3_BUCKET_NAME;

const uploadFilesToS3 = async (localFilePath) => {
  try {
    if (!localFilePath) return `Error: No LocalFilePath found `;
    const key = `uploads/${Date.now()}_${Math.floor(Math.random() * 1000)}_${localFilePath}`;

    const params = {
      Bucket: s3bucketName,
      Key: key,
      Body: localFilePath,
      ACL: 'public-read',
    };
    const response = await s3bucketInstance.upload(params).promise();
    console.log('File uploaded on S3 bucket successfully');
    return response.Location;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error('Error uploading file to S3:', error);
    throw error;
    return null;
  }
};

export default uploadFilesToS3;
