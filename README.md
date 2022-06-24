# Introduction
Just a simple To Do app using the MERN stack. Nothing special.


# How to Install
At root directory, <br/>
`
npm install
`

## Client
```
cd client
npm start
```

## Server
Requires a MongoDB atlas connection. Atlas URL is stored in `'/server/.env'`. For tutorials on how to set up MongoDB Atlas, refer to their <a href="https://www.mongodb.com/docs/atlas/getting-started/">official documentation</a>. <br/>

```
cd server
npm run dev
```

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