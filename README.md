
# AD-SSO

## Description
This project is a Single Sign-On (SSO) solution that involves three Next.js front-end applications and three Node.js back-end servers. The architecture is designed to support user authentication across three different websites using a central authentication mechanism. The authentication process utilizes Kinda.

## Project Structure

- **Front-end**: 3 Next.js applications
  - These applications handle the user interface and interact with the back-end services for authentication and data retrieval.
  
- **Back-end**: 3 Node.js servers
  - These servers manage the core business logic, data processing, and interactions with the authentication service.
  
- **Authentication**: Single website for user authentication
  - This website is responsible for user login and session management.


## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn or pnpm
- A Kinda free account and configuration
- Firebase free account
- Port: 3000, 3001, 3002, 8000, 8001, 8002

### Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/dharayush7/ad-sso.git
```

# Installation

#### 2. Installing dependencies:
Go to the follwoing path and run ```npm install ``` or ```yarn``` or ``` pnpm i```

- ad-sso/
- ad-sso/authServer/server/
- ad-sso/authServer/client/
- ad-sso/server1/server/
- ad-sso/server1/client/
- ad-sso/server2/server/
- ad-sso/server2/client/
## Kinde SetUp
Create a free account in kinde by visiting https://kinde.com/
#### 3. Project Creation
create a free project in kinda by selecting. 

- Give an application name.
- Application type: Back-end web
- Back end SDKs: Next JS
- Set post logout URL
- Set call back URL
- Go to Details section
- Find heading "Allowed logout redirect URLs"
- Change it to "http://localhost:3000/logout"
- Scroll down and click to save

#### 4. Set Up Environment Variables

- Go to ```ad-sso/authServer/client``` and create ```.env```
- Go to Quick Start section in kinde
- Find heading "Update environment vars"
- Copy those valaue and paste it in .env file
- .env file look like this

```
KINDE_CLIENT_ID= // client id
KINDE_CLIENT_SECRET= // client secret
KINDE_ISSUER_URL= // issuer url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```
- Change the last secound line ```http://localhost:3000``` to ```http://localhost:3000/logout```

- Now the .env file look like this
```
KINDE_CLIENT_ID= // client id
KINDE_CLIENT_SECRET= // client secret
KINDE_ISSUER_URL= // issuer url
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000/logout
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard
```




## Firebase Setup
Create a free account of Firebase.

#### 5. Create project:
Create a new project in firebase. Add web app in this app.

#### 6. Utlity Setup:
don't copy firebase config now. Go to build section and go firestore database. Activate this utlity.

#### 7. Rules configure:
- Go to rules section in firestore database.
- The default rule look like this.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2024, 8, 2);
    }
  }
}
```
- Now the change the last line ```allow read, write: if request.time < timestamp.date(2024, 8, 2);``` to ```allow read, write: if true;```

- Now the rule look like this

``` 
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

#### 8. Copy Cofigurarion:

- Go to project overview settings icon and click project settings.
- Under the section "your app" the default app was selected.
- Now copy "firebaseConfig" . 
- The firebaseConfig look like this
```
const firebaseConfig = {
  apiKey: // api id,
  authDomain:  // auth domain,
  databaseURL:  // database url,
  projectId: // project ID,
  storageBucket: // strorage Bucket,
  messagingSenderId: // Messaging sender id,
  appId: // app id 
};
```

- Now to ```ad-sso/authServer/server/src/service/firebase.ts``` paste it in this...

```
const firebaseConfig = {
  // Paste hare firebase config
};
```



## Initialization

Go to ad-sso/

### Start server in devolopment mode:

Run this command to start the server:

using npm:
```bash
npm run dev
```
using yarn:
```bash
yarn dev
```

using pnpm:

```bash
pnpm run dev
```

### Build project and Initialize server:


#### To Build:
    
Using npm:
 ```bash
npm run build
```
Using yarn:

```bash
yarn build
```
Using pnpm:
```bash
pnpm run build
```

#### To Start: 

Using npm:
 ```bash
npm start
```
Using yarn:

```bash
yarn start
```
Using pnpm:
```bash
pnpm run start
```


## Usage

3 Websites are live: 

- [localhost:3000](localhost:3000)
- [localhost:3001](localhost:3001)
- [localhost:3002](localhost:3002)

Now go to this websites and login any website, you are automatically logged in all sites.
And log out are also same.
## 🔗 Links
[portfolio](https://www.ayushdhar.com/)



## License

[MIT]

