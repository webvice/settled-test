# React-Redux Demo

A sample Redux-React application using LoopBack

### Techonologies used
- **React**
- **Redux**
- **Loopback (extension of express)**
		Provides Rest API framework
		More details at https://loopback.io
- **React-Router**
- **React-Thunk (for asynchronous callbacks to API)**

- **Testing**
		Mocha
		Chai
		Supertest

### Get Started
- **Clone this repository or use npm**
```bash
$ git clone https://github.com/tngan/loopback-redux-react-boilerplate.git
```

- **To setup the project**
```bash
$ npm install
```

- **Start the server (default port is set to 3000)**
```bash
$ npm start
```

- **To Test**
```bash
$ npm test
```

### Details
- There is no user management logic, so for now all data can be viewed.
- Data will be lost when server is stopped/restarted as we are using server db memory for storing data.
- I have used the proper redux flow.
- There is a scope in code improvement.
- I have used listings instead of properties as it conflicts with technical terms.
- I did try redux-saga but it seemed bit difficult so i have not used it for now.

### Notes
- I have used redux for the first time, so it's a learning curve for me.
- In 2-4 weeks i will be comfortable with it.
