# Book tracker app

## Installation

1. Clone this repo
````
git clone https://github.com/wojciechkaleb/book-tracker
````
2. Copy `.env.example` to `.env` and fill variables (for testing you can leave it as it is).
 
3. (Optional) Install `node_modules`
```
npm install
```
This step is optional as `node_modules` are not shared with container. However, it is useful for developement purposes for example eslint integration.

4. Run containers using
```
docker-compose up
```

**NOTE:** as `node_modules` are not shared between host and container, all npm-related commands should be run trough `docker-compose`. For utility, there is `npm.sh` script to solve this. You can run it e.g `./npm.sh install <package-name>`


