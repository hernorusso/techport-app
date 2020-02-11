# TechPort App

The main purpose of this project is to demoing an application fitting this [requirements](https://miro.com/app/board/o9J_kvEAglY=/).

To bootstrap this project just clone this repo and run `yarn`.

## How to use it

Start the project locally by running `yarn start`.

Go to your browser and type `http://localhost:3000/` if it didn't open automatically.

### Brief App explanation
The App will query the NASA API, and then will show the first 25 available results.

Each result is exposed in a card format.

You can click on any card to select, expand or delete it.

If you click the `See More` button at the bottom you can fetch another 25 results.

The App is responsive, so it could be accessed with any viewport sized device (test briefly with chrome mobile emulator).


## Tech info
By default the app runs with the demo NASA API key, which sometimes is blocked because it exceeds the requests number allowed.

So the best experience you can have it is by passing your own NASA API key when starting the app. You can get your NASA API key here:

* https://api.nasa.gov/

Once you have your own NASA API key, you can run the app with the following command line:

`REACT_APP_API_KEY=[your_API_key] yarn start`

The NASA API is queried with the provided API key once to get the project list.

Then, each page request done in the app (by clicking the `See More` button) will fire 25 requests in parallel to get projects detailed information (the first 25
projects do not require any other action than just start the app and open the browser).

### Security consideration
Since the service used to query the NASA api is built in the client App, that key is exposed in the browser, so do not publish this app. This is just for demoing purposes, and otherwise it will disclose you private NASA API key.

### Improvements that could be done

The queries done by the app should be handle by a `node`, `python`, `lambda` function micro-service, in order to keep the API key secured in the server side of things.

Most css bits were written without any preprocessor, but as the project start growing `sass` was added to have a better developing experience.
It would be nice to have all the css written in sass style/files.

Unit tests are missing. I run out of time, so I prioritized to deliver the project in time, and let the test for a next iteration.

A nice to have would be to incorporate some icons and animations, but the same scenario described above also applies here.


## Client Libraries / Frameworks
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Sass was used partially to build the css files.
* classnames was used for conditionally css class assignment.
* Axios was used to fetch content.
* React to build the App.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
