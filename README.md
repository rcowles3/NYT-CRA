# New York Times React Search

Application developed using [Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) to build out a New York Times article search, using their API. Application will display desired results to user, with the ability to save to a Mongo Database.

## Getting Started

Either clone or fork the repo, from the command line navigate to your cloned directory, and run the following commands: 

Install all dependancies from package.json by navigating to your project root directory.
``` 
npm install 
```

While dependancies are installing, you can start MongoDB, so that your dev enviornment can talk to the database. 

In terminal window run:
```
mongod
```

Open up another and run:
```
mongo
```

These commands start up the MongoDB and allow it to listen for open connections. 

After depencies are finished installing, open another terminal window and run npm start, in order to compile the react front end.
```
npm start
```

In another terminal window, navigate to the /Backend directory, and run
```
node server.js
```

or if using [Nodemon](https://www.npmjs.com/package/nodemon):
```
nodemon server.js
```

This will boot up your local server.


### Prerequisites

In order for the application to run, you must have [Node](https://docs.npmjs.com/getting-started/installing-node) and [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your computer.

If using Homebrew, Mongo can be installed via the command: 

```
brew install mongodb
```

After making sure your system is running Node, **package.json** has all the npm packages needed to run application.

```
npm install
```

## Deployment

Application can be deployed using [Heroku](https://devcenter.heroku.com/articles/git) in which you will find more detailed instructions on how to do so. 

After you have already created a new or cloned the repo, cd into the directory and create a new Heroku app.

The **heroku create** CLI command creates a new empty application on Heroku, along with an associated empty Git repository. If you run this command from your app’s root directory, the empty Heroku Git repository is automatically set as a remote for your local repository.

```
heroku create
```
You can use the **git remote** command to confirm that a remote named heroku has been set for your app:

```
git remote -v
```

To deploy your app to Heroku, you typically use the **git push** command to push the code from your local repository’s master branch to your heroku remote, like so:

```
git push heroku master
```

If you come across any errors, it would be advised to review the [Heroku](https://devcenter.heroku.com/articles/git) documentation for further explanation.

In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:

After you create a Heroku app in your project directory. 

1. Run this command in your Terminal/Bash window: 

    * `heroku addons:create mongolab`

    * This command will add the free mLab provision to your project.

2. You'll need to find the URI string that connects Mongoose to mLab. Run this command to grab that string: 

    * `heroku config | grep MONGODB_URI`

    * Notice the value that appears after `MONGODB_URI =>`. This is your URI string. Copy it to a document for safekeeping.

3. When you’re ready to connect Mongoose with your remote database, simply paste the URI string as the lone argument of your `mongoose.connect()` function. That’s it!

## Built With

* [MongoDB Documentation](https://docs.mongodb.com/manual/)
* [Express](https://expressjs.com/)
* [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) - Create React App
* [Node](https://nodejs.org/en/)

## Author

* Ryan Cowles - [Portfolio](https://rcowles.com)

