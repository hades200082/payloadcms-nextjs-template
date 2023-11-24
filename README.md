# Payload CMS & NextJS template app setup
This is a monorepo containing a template setup for Payload CMS and a corresponding NextJS website.

Unlike the official Payload-Next repo, the two applications in this repo are intended to be hosted separately.

## Usage - local developer

### Requirements

- NodeJS & npm - this repo was created using Node 20.9.0 and npm 10.2.4 but any versions supported by both PayloadCMS and NextJS shuold work just fine.
- Docker & Docker Compose - these are required for Azurite and MongoDB to run Payload locally.

### Dependencies

- Typescript - Both projects are configured to use TypeScript
- ESLint
- TailwindCSS - The website project uses Tailwind CSS

### Payload CMS

To run Payload locally:

1. Open your terminal and navigate to the directory `cms` in the root of the repo.
2. Run `docker compose up -d`
3. Run `npm run dev`

Payload is now running. You can access the CMS admin at [http://localhost:3001](http://localhost:3001).

#### Environment variables

Copy the `.env.example` file to create a `.env` file.

##### Payload CMS config

You will need to add your own `DATABASE_URI` and `PAYLOAD_SECRET` values.

##### Media storage

The `AZURE_STORAGE_*` variables are preconfigured to use the dockerized Azurite instance locally. In production it is expected that these variables will be configured with an Azure blob Storage account.

#####  Email Sending

The email variables (`MAILER_TRANSPORT`, `SMTP_*` and `SENDGRID_API_KEY`) are preconfigured to use a localhost mail server. I recommend using [Papercut SMTP](https://www.papercut-smtp.com/) locally. These settings will need to be configured for a production mail server in other environments.

### Next JS

To run the NextJS website locally:

1. Open your terminal and navigate to the directory `website` in the root of the repo.
2. Run `npm run dev`

NextJS is now running. You can access the website at [http://localhost:3000](http://localhost:3000).