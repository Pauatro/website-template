# Website template

This is an initial template for a website or a UI. It uses React+Typescript, Vite and Tailwind.

## Initializing the project

Since the package manager used is NPM, you need to run the following commands:

1. install dependencies
```
  npm install
```

2. Initialize project:
```
  npm run dev
```

## Running the Dockerized version

Everything is set up to run the app using docker and docker-compose.
Since there's two separate repos (frontend and backend), the image for the frontend needs to be generated first. To do that, run the following command in the root folder of this project:

```
docker build -t frontend .
```

Then you can just start a docker container running:

```
docker run frontend
```

## Testing and other checks

For now there's just one logic test since I usually focus on those more than anything but tests for the application hooks and visual components could be added too.

```
npm run test
```

It also includes commands for type-checks and lint checks, which could be added to must passes in the pipeline together with the tests:

```
npm run type-check
```

```
npm run lint
```
