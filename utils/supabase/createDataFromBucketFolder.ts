import supabase from "../../service/supabase";

function getPublicUrlFromBucketFile(bucketName: string, fileName: string) {
    return supabase.storage.from("airbnb").getPublicUrl(`${bucketName}/${fileName}`)
        .data.publicUrl;
}

function createDataFromBucketFolder(bucketName: string, data: any) {
    const temp = data?.map((item: any) => ({
        publicUrl: getPublicUrlFromBucketFile(bucketName, item.name),
        title: item.name.split(".")[0].replaceAll("_", " "),
    }));
    return temp;
};

export default createDataFromBucketFolder