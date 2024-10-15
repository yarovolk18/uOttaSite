# 2025 uOttaHack Landing Page

This repository contains the source code for the 2025 uOttaHack landing page, built using Next.js.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The 2025 uOttaHack landing page is designed to provide information about the upcoming hackathon uOttaHack 7 at the University of Ottawa. The site is built using Next.js, a React framework that enables server-side rendering and static site generation.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/uOttaHack/2025-landing-page.git
    ```

2. Navigate to the project directory:

    ```bash
    cd 2025-landing-page
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project structure is organized as follows:

```
2025-landing-page/
├── components/       # Reusable UI components
├── pages/            # Next.js pages
│   ├── api/          # API routes
│   ├── _app.js       # Custom App component
│   ├── _document.js  # Custom Document component
│   └── index.js      # Landing page
├── public/           # Static files
├── styles/           # Styling files (CSS, SASS, etc.)
├── .env.local        # Environment variables (local)
├── next.config.js    # Next.js configuration
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
```

## Deployment

The project can be deployed to any hosting service that supports Node.js. We recommend using Vercel, as it is the creators of Next.js and offers seamless integration.

To deploy on Vercel:

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your repository and follow the instructions to deploy.

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.