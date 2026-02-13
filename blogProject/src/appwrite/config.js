import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteEndpoint)
            .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);
    }

    async createPost(title, slug, content, featuredImage, status, userId) {
        try {
            return await databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error :: ", error);
            
        }

    }

    async deletePost(slug) {
        try {
            return await databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error :: ", error);
            
        }
    }

    async getPost(slug) {
        try {
            return await databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error :: ", error); 
            return false;
        }
    }
    
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error :: ", error); 
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error :: ", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            return await bucket.deleteFile(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error :: ", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error :: ", error);
            return false;
        }
    }

    async getFileDownload(fileId) {
        try {
            return await bucket.getFileDownload(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFileDownload :: error :: ", error);
            return false;
        }
    }
}


const service = new Service()
export default service