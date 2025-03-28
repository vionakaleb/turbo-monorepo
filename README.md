# Turbo Monorepo

This repository contains a **Turbo Monorepo** setup with the following components:

- **Frontend**: A **Next.js** application.
- **Backend**: An **Express.js** application.
- **Shared**: Common utilities and code shared between the frontend and backend.

## Repositories

- **Frontend Repo**: [Frontend (Next.js)](https://github.com/vionakaleb/frontend-repo)
- **Backend Repo**: [Backend (Express.js)](https://github.com/vionakaleb/backend-repo)

## Project Structure

/turbo-monorepo /apps /frontend # Next.js frontend /backend # Express.js backend /packages /shared # Shared utilities and types

## Setup Instructions

### Prerequisites
Before you start, make sure you have the following installed:

- Node.js (latest LTS version recommended)
- Yarn (or npm/pnpm)
- Turbo CLI

### Install Dependencies

In the root directory of the monorepo, run:

```bash
yarn install

This will install the necessary dependencies for both frontend and backend projects.

Running the Development Servers
Backend (Express.js)
To start the backend server, navigate to the backend directory and run:

yarn dev

The backend will run on: http://localhost:5000

Frontend (Next.js)
To start the frontend server, navigate to the frontend directory and run:

yarn dev

The frontend will run on: http://localhost:3000

Build Project
To build the entire project, run the following command in the root directory:

yarn build
