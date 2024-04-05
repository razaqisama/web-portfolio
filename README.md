# Web Portfolio Project

## About

Welcome to my web portfolio project! This project showcases my skills and experiences as a Software Engineer. It is built using Next.js 14, Tailwind CSS, Drizzle ORM for database interaction, Turso and SQLite for database management.

## Features

- **Portfolio Display**: Displaying projects, experiences, and skills to potential employers or clients.
- **Admin Dashboard**: Manage portfolio for your profiles, media, and activities.
- **Blog Site**: Share your thoughts, insights, and experiences through a user-friendly blog site.
- **WYSIWYG Editor**: Powered by [Lexical](https://nextjs.org/).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### Instalation

```bash
1. git clone https://github.com/razaqisama/web-portfolio.git
2. npm i
```

#### Setup Database

1. Install turso cli - [Follow This Instruction](https://docs.turso.tech/cli/installation).
2. Create and run local sqlite environment
```bash
 turso dev --db-file dev.db
```
3. Push schema to DB
```bash
 npm run db:push
```


#### Setup Environment Variables
1. Create .env and .env.local file.
2. Copy every variable in .env.template and adjust the value as your need.

#### Run in development

```bash
npm run dev
```

## NOTE
This project is still in development. Please reach me out if you need someting. 
