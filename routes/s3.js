
const fs = require('fs')

//const randomBytes = promisify(crypto.randomBytes)
require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')


const region = "us-west-2"
const bucketName = "infuzex-docapp"
const accessKeyId = process.env.AWS_BUCKET_ACCESSKEY
const secretAccessKey = process.env.AWS_BUCKET_SECRETKEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  //signatureVersion: 'v4'
})





//upload a file to s3

// export async function generateUploadURL() {
//     const rawBytes = await randomBytes(16)
//     const imageName = rawBytes.toString('hex')
  
//     const params = ({
//       Bucket: bucketName,
//       Key: imageName,
//       Expires: 60
//     })
    
//     const uploadURL = await s3.getSignedUrlPromise('putObject', params)
//     return uploadURL
//   }




 function uploadFile(file)
{
  const fileStream = fs.createReadStream(file.path)

  const uploadParams = ({
          Bucket: bucketName,
          Body:fileStream ,
          Key: file.filename,
          Expires: 60
        })


        return s3.upload(uploadParams).promise()
        

}

exports.uploadFile = uploadFile

//download a file from s3



function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream