class Constants {
    
    static DB_CONNECTION_STRING: string  = "mongodb://localhost/warriors";

    static API_URL: string = "https://api.instagram.com/v1/${entity}/${operation}";

    static CLIENT_ID: string = 'e68d567fc23744c69192001fb17130ec';
    static CLIENT_SECRET: string = 'be302fe8ab48430bbd2861b3b5f91b29';
    static GRANT_TYPE: string = 'authorization_code';
    static REDIRECT_URI: string = 'http://localhost:4200/auth_code';
}
Object.seal(Constants);
export = Constants;
