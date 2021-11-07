# ExpressTS
ExpressJS setup with Typescript support, preconfigured linting tools and mongodb connection.

## Features
- [ExpressJS](https://expressjs.com/) using [TypeScript](https://www.typescriptlang.org/)
- Preconfigured linters
  - [Prettier](https://github.com/prettier/prettier)
  - [eslint](https://github.com/eslint/eslint) with [TypeScript](https://www.typescriptlang.org/) support using [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- Automatic linting on precommit using [Husky](https://github.com/typicode/husky)
- Automatic rebuilding using [nodemon](https://github.com/remy/nodemon)
- [Docker](https://www.docker.com/) environment with [mongodb](https://hub.docker.com/r/bitnami/mongodb) server.

## Prerequisites
- [docker](https://www.docker.com/)

## Usage
1. Clone this repository.
2. Run `npm install`.
3. Build the docker image and create containers using `docker-compose up -d --build`.
4. Enjoy programming! :tada:

## Manual linting
- Use `npm run lint` for eslint.
- Use `npm run pretty` for prettier.

## Author
- [Tjeu Foolen](https://github.com/tjeufoolen)

## License
- [MIT](LICENSE)
