# Pointhub Web Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## UI Components

We are using Pointhub App Components for designin UI & UX https://dev.pointhub.net/library/papp/

## Installation

We are using [Bun](https://dev.pointhub.net/guide/introduction/bun) as a drop-in replacement for Node.js

### Install Node.js

We still need to install Node.js because Cypress requires Node.js in order to install. Follow the instructions on [https://nodejs.org/en/download/package-manager](https://nodejs.org/en/download/package-manager) to download and install Node.js

### Install Bun

Install Bun a JavaScript runtime

Linux / MacOS

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Install dependencies

Make sure to install the dependencies:

```bash
bun install --frozen-lock
```

To upgrade Nuxt to the latest release, use the nuxi upgrade command.

```bash
bun x nuxi upgrade
```

### Install Cypress (optional)

You can skip this step, if you already have cypress on your system

```sh
./node_modules/.bin/cypress install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Testing

```bash
npx cypress open
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
