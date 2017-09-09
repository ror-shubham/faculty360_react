# faculty360
## Getting Started
### For testing/development
1. Clone the repo.
2. Install npm- https://www.npmjs.com/get-npm
3. Go to directory `faculty360` and run ```npm init```
4. Install dependancies by running ```npm install```
5. Run ```npm start``` 
6. The browser will open automatically

### For Deplyment
1. `build' directory contains code with a production build of the app.
2. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.
3. For more information on deployment, please refer https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment
