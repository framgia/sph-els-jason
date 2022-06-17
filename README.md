## Installation

clone the project with github
`https://github.com/framgia/sph-els-jason.git`

## Environment Variables

To run this project locally, you will need to edit the following environment variables to .env file in the back-end folder. If .env file does not exist just create a new one and add this ff:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=elearning
DB_USERNAME=root
DB_PASSWORD=
```

Make sure to create a MySQL Database based on the DB_DATABASE value = `elearning`.

## Run Locally

After cloning the project
Go to project directory

```
  cd sun
```

## Commands for running the Front End

```
  cd front-end
  npm install
```

Start the Front End server
`npm run serve`

## Commands for running the Back End

```
  cd back-end
  composer install
```

## Start the Back End Server

```
 php artisan serve
```
