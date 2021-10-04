# Nested JSON Renderer


## Available Scripts

In the project directory, you can run:

### `npm install`

Installs dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## `Features`
- By default the application fetches data from GraphQl Api.
- Data is lazyloaded i.e only when a continent is clicked the data for it is loaded. Once the data is laoded  it is stored in redux store and is not fetched again.
- Click on `Populate with random data` it display input fields to enter data generation parameters.
- Enter the node depth and children length and click `Generate Data`.
- Currently the maximum allowed value for node depth and childeren length is `20` but it can be changed in `AppConfig.ts` file.


## `Author`

- Chetan Kumar
- ckckchoudhary@gmail.com
