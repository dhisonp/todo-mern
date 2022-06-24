# Introduction
Just a simple To Do app using the MERN stack. Nothing special.


# How to Install
## Installation
At root directory, <br/>
`
npm install
`

## Client
`cd client` <br/>
`npm start` <br/>
Port: 3000

## Server
Requires a MongoDB atlas connection. Atlas URL is stored in `'/server/.env'`. For tutorials on how to set up MongoDB Atlas, refer to their <a href="https://www.mongodb.com/docs/atlas/getting-started/">official documentation</a>. <br/>
`cd server` <br/>
`npm run dev` <br/>
Port: 8080 <br/>

### .env contents
`DATABASE_URL="[ATLASURL]"`

# Tech Stack
## Frameworks
- MongoDB
- Express.js
- React.js
- Node.js
## Libraries
- Styled Components
- React Icons
- Axios

# To Do
## Future Features
- Edit and Manual Sort
- Priorities?
- Categories (Open, Doing, Done)
- Light/Dark Mode