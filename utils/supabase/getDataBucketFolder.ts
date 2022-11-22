import supabase from "../../service/supabase";

async function getDataBucketFolder(
    bucketName: string,
    folderName: string
) {
    const { data, error } = await supabase.storage
        .from(`${bucketName}`)
        .list(`${folderName}`, {
            limit: 100,
            offset: 0,
            sortBy: { column: "name", order: "asc" },
        });
    if (error) {
        console.error(error);
        return [];
    }
    return data;
};

export default getDataBucketFolder