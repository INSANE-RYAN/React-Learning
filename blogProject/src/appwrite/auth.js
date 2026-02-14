import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteEndpoint)
            .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            }else {
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw error;
            
            
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Auth error:", error);
            // Catch all auth-related errors (401, missing scopes, not authenticated)
            const errorMessage = error?.message || '';
            const errorCode = error?.code || error?.status;
            
            if (errorCode === 401 || 
                errorMessage.includes('401') ||
                errorMessage.includes('Unauthorized') ||
                errorMessage.includes('missing scopes') ||
                errorMessage.includes('User') && errorMessage.includes('role: guests')) {
                console.log("User not authenticated - returning null");
                return null;
            }
            
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            console.log("Logout error:", error);
            throw error;
        }
    }

    async checkAuth() {
        try {
            return await this.account.get();
        } catch (error) {
            return null;
        }
    }
}



const authService = new AuthService();

export default authService;