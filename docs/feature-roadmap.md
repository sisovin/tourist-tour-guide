# Feature Roadmap

## Infrastructure Setup
- Initialize Turborepo monorepo
- Configure shared `tsconfig.json`
- Set up ESLint/Prettier in `packages/config`
- Configure Turbo.json pipelines
- Dockerize PostgreSQL setup
- GitHub Actions CI/CD workflow

## Frontend (Next.js 15)
### Core Setup
- Initialize Next.js 15 with App Router
- Integrate TailwindCSS + Shadcn UI
- Set up internationalization (i18n)
- Configure NextAuth.js for client-side auth
- Create error/loading boundary components

### Pages
- Home
- About
- Contact
- Tour Guide Listings
- Tour Guide Details
- User Profile
- Login/Register

### Components
- Header
- Footer
- Tour Guide Card
- Tour Guide List
- User Profile Card
- Login/Register Form

### State Management
- React Query for data fetching
- Zustand for global state

### Testing
- Unit tests (Jest)
- Component tests (Storybook)
- E2E tests (Playwright)

## Backend (NestJS)
### Core Setup
- Initialize NestJS project
- Set up PostgreSQL database connection
- Configure TypeORM for database interactions
- Implement authentication with JWT
- Create user module
- Create tour guide module

### API Endpoints
- Auth:
  - POST /auth/login
  - POST /auth/register
  - GET /auth/profile
- Users:
  - GET /users
  - POST /users
  - GET /users/:id
  - DELETE /users/:id
- Tour Guides:
  - GET /tour-guides
  - POST /tour-guides
  - GET /tour-guides/:id
  - DELETE /tour-guides/:id

### Testing
- Unit tests (Jest)
- Integration tests
- Postman collection

## Deployment
- Vercel for Next.js
- Railway for NestJS
- Neon for PostgreSQL
- CI/CD pipeline
- Monitoring (Sentry)

## Documentation
- API docs (Swagger)
- Setup guide
- Feature roadmap
- Error code reference
