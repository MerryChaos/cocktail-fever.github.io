import { OAuth2Client } from "google-auth-library";

export interface GoogleAuthCredentials {
    clientId: string;
    clientSecret: string;
    refreshToken: string;
}

export class GoogleAuthService {
    private _oauth2Client: OAuth2Client;
    private _user: string;

    public get user(): string {
        return this._user;
    }

    public set user(user: string) {
        this._user = user;
    }

    constructor(credentials: GoogleAuthCredentials, user: string) {
        // Create an OAuth2 client
        this._oauth2Client = new OAuth2Client(
            credentials.clientId,
            credentials.clientSecret,
        )
        
        // Set the refresh token
        this._oauth2Client.setCredentials({ refresh_token: credentials.refreshToken });

        // Set the google user
        this._user = user;
    }

    public async getAccessToken(): Promise<any> {
        return await this._oauth2Client.getAccessToken();
    }
}