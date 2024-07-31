
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




## Initialization

Go to ad-sso/

### Start server in devolopment mode:

Run this command to start the server:

using npm:
```bash
npm start
```
using yarn:
```bash
yarn start
```

using pnpm:

```bash
pnpm run start
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
## 🔗 Links
[portfolio](https://www.ayushdhar.com/)



## License

[MIT]

