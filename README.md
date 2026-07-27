# British Energy Mix application

The utility for visualization of current British
energy mix and finding an optimal window for
an extensive energy usage with respect to nature.

## Project Architecture
The project consists of:

- Frontend application
- Spring Boot backend

Furthermore, we use [external API](https://carbon-intensity.github.io/api-definitions)
for data about current British energy mix.

## Technologies

- Next.js
- TypeScript
- React
- TanstackQuery with ReactQuery
- Orval with Axios
- Material UI

## Installation

```shell
npm install
```

## Development

```shell
npm run dev
```

## Run

```shell
npm install && npm run build
npm start
```

## Environment variables

In the file e.g. ``.env.local``

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:8080
```

## Architecture

```txt
src/
├── app/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
|
└── api/
    └── generated/
```

## Backend API
Endpoints are documented:
- through OpenAPI: at path ``/v3/api-docs``
- through Swagger: at path ``/swagger-ui/index.html``

## Deployment
Project is deployed on render.com and is available at [https://frontend-mu1e.onrender.com](https://frontend-mu1e.onrender.com)