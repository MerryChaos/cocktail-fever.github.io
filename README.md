# Setup Gmail

Use OAuth2 authentication to authorize Nodemailer to send emails on behalf of your Gmail account. Here's how you can set up OAuth2 authentication with Nodemailer:

1. Go to the Google Cloud Console (https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Go to the "OAuth consent screen" tab and fill in the required information.
4. Go to the "Credentials" tab and click "Create credentials" > "OAuth client ID".
5. Select "Desktop app" as the application type and create the client ID.
6. You will receive a "Client ID" and "Client secret" that you can use for OAuth2 authentication.
7. Set the following enviroment variables in `.env` using the "Client ID" and "Client secret":
```.env
GOOGLE_USER=your-email@gmail.com
GOOGLE_CLIENT_ID=YOUR_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_CLIENT_SECRET
```
8. To obtain the "Refresh token" and "Access token," you can use the OAuth 2.0 Playground (https://developers.google.com/oauthplayground/). Make sure to authorize the "https://www.googleapis.com/auth/gmail.send" scope under "Gmail API" to get the necessary permissions to send emails.
9. Set the following enviroment variables in `.env` using the "Refresh token" and "Access token":
```.env
GOOGLE_REFRESH_TOKEN=YOUR_REFRESH_TOKEN
GOOGLE_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
```