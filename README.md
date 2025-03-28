Turbo Monorepo

This is a Turbo Monorepo setup that includes:

A frontend built with Next.js

A backend built with Express.js

Repositories

Frontend Repo: Frontend (Next.js)

Backend Repo: Backend (Express.js)

Project Structure

/turbo-monorepo
  /apps
    /frontend   # Next.js frontend
    /backend    # Express.js backend
  /packages
    /shared     # Shared utilities and types

Setup Instructions

Prerequisites

Node.js (latest LTS recommended)

Yarn (or npm/pnpm)

Turbo CLI

Install Dependencies

Run the following command in the root directory:

yarn install

Running the Development Servers

Backend (Express.js)

yarn dev

Backend runs on: http://localhost:5000

Frontend (Next.js)

yarn dev

Frontend runs on: http://localhost:3000

Build Project

yarn build

Production Start

yarn start

Environment Variables

Create a .env file in both frontend and backend directories.

Backend .env

PORT=5000
HOST_URL=http://localhost:5000

Frontend .env

NEXT_PUBLIC_API_URL=http://localhost:5000

Additional Information

This monorepo uses Turbo for optimized builds and caching. More details can be found in the Turbo documentation.
