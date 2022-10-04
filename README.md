# Office Viewer
This is a proof of concept for an app to track the occupation and capacity of several office spaces.

[View website](https://office-viewer-2929b.web.app/)

## Tech Stack
- The frontend library used to build this app is [React](https://github.com/facebook/create-react-app).
- [Firebase](https://firebase.google.com/) was used for hosting services and for its realtime NoSQL database, Firestore. 
- API calls were made with the help of TanStack's [React Query](https://tanstack.com/query/v4) which allows for asynchronous state management during these calls. 
- Navigation was handled with [React Router](https://reactrouter.com/en/main) witch makes it easy to handle both static and dynamic routing.

## Running Office Viewer Locally
The first thing you need to do is clone this repository to your local repository. You should have git already installed. See instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

1. Clone the repository
```
$ git clone https://github.com//markgalante/office-viewer
```

2. Install dependencies:
```
  yarn install
```

3. Now try running the app. This below command will run the app on localhost:3000. Make sure you don't have other apps running:
```
$ yarn run
```

4. To make use of your own project's Firestore and hosting services, initiate your project and replace the current `firebaseConfig` with your own inside **src/config.ts**:
```typescript
    const firebaseConfig = {
      apiKey: "...",
      authDomain: "...",
      projectId: "...",
      storageBucket: "...",
      messagingSenderId: "...",
      appId: "...",
      measurementId: "...",
      databaseURL: "..."
    };
```

4. For deployment, make sure that you've got Firebase CLI installed. See instructions [here](https://firebase.google.com/docs/cli).

## Other commands

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```
$ yarn test
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```
$ yarn build
```
