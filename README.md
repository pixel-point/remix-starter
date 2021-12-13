# Welcome to Remix Starter

## Table of Contents

- [Remix Docs](https://remix.run/docs)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Run the website](#run-the-website)
  - [Build the website](#build-the-website)
  - [Run the built website](#run-the-built-website)
- [Project Structure](#project-structure)
- [Code Style](#code-style)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [VS Code](#vs-code)

## Getting Started

1. Clone this repository or hit "Use this template" button

```bash
git clone git@github.com:pixel-point/remix-starter.git
```

2. Install dependencies

```bash
npm install
```

3. Fill environment variables

```bash
cp .env.example .env
```

## Usage

### Run the website

```bash
npm run dev
```

### Build the website

```bash
npm run build
```

### Run the built website

```bash
npm start
```

## Project Structure

```text
├── app
│   ├── components
│   │  ├── pages — React components that are being used specifically on a certain page
│   │  └── shared — React components that are being used across the whole website
│   ├── hooks
│   ├── images
│   ├── routes –  Remix uses the files in this directory to create the URL routes for your app based on the name of the files
│   ├── styles
│   │  ├── dist – Folder with compiled CSS files
│   │  ├── main.css – Main CSS files where Tailwind imports
│   ├── utils
│   └── root.jsx — Root component for application. You render the <html> element here
├── public – Static assets storage
```
[Read more about Remix project structure](https://remix.run/docs/en/v1/tutorials/jokes#explore-the-project-structure)

## Code Style

### ESLint

[ESLint](https://eslint.org/) helps find and fix code style issues and force developers to follow same rules. Current configuration is based on [Airbnb style guide](https://github.com/airbnb/javascript).

Additional commands:

```bash
npm run lint
```

Run it to check the current status of eslint issues across project.

```bash
npm run lint:fix
```

Run it to fix all possible issues.

### Prettier

[Prettier](https://prettier.io/) helps to format code based on defined rules. [Difference between Prettier and ESLint](https://prettier.io/docs/en/comparison.html).

Additional commands:

```bash
npm run format
```

Run it to format all files across the project.

### VS Code

Following extensions required to simplify the process of keeping the same code style across the project:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

After installation enable "ESLint on save" by adding to your VS Code settings.json the following line:

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

You can navigate to settings.json by using Command Pallete (CMD+Shift+P) and then type "Open settings.json".

To enable Prettier go to Preferences -> Settings -> type "Format". Then check that you have esbenp.prettier-vscode as default formatter, and also enable "Format On Save".

Reload VS Code and auto-format will work for you.
