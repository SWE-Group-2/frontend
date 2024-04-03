export function getProfilePictureUrl(userId: number): string {
    const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME_PROFILEPICS;
    const bucketRegion = import.meta.env.VITE_AWS_DEFAULT_REGION;
    return `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/profilepic_${userId}.png`;
}

export function getUploadedCvUrl(userId: number): string {
    const bucketName = import.meta.env.VITE_AWS_BUCKET_NAME_CVS;
    const bucketRegion = import.meta.env.VITE_AWS_DEFAULT_REGION;
    return `https://${bucketName}.s3.${bucketRegion}.amazonaws.com/cv_${userId}.pdf`;
}