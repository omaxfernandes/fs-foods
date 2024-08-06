## Getting Started

First, create the `.env` file and add the database url. Use the example from `env.example` file.

Then run the database using the `docker-compose.yml`. Use the command.

```bash
docker compose up -d
```

To run the project, first install the dependencies. Use the command.

```bash
yarn 
```

Run the development server:

```bash
yarn dev
```
Migrate using Prisma ORM whith command

```bash

npx prisma migrate dev
```

Now populate the date base using the seed script

```bash

npx prisma db seed 
```









