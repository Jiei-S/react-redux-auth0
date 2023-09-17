# Boilerplate React Redux

# Technology Stack
| Category  | Technology Stack |
| ------------- | ------------- |
| Programming Languages | TypeScript  |
| Frameworks  | React, Redux(Redux Toolkit), React Router, MUI |
| Environment setup  | Vite, Docker |
| CI | Husky, ESLint, Prettier |

# Directories
```bash
.
├── index.html
├── public
│   └── locales
│       └── default
│           ├── en.json
│           └── ja.json
├── src
│   ├── _app.tsx
│   ├── api
│   │   └── openapi
│   │       ├── client.ts
│   │       └── gen
│   │           └── v1.0
│   ├── components
│   │   ├── _shared
│   │   │   ├── components
│   │   │   │   └── xxxxx
│   │   │   │       └── xxxxx.tsx
│   │   │   ├── config
│   │   │   │   ├── i18n.ts
│   │   │   ├── const
│   │   │   │   └── const.ts
│   │   │   └── layouts
│   │   │       ├── header.tsx
│   │   │       └── layout.tsx
│   │   └── projects
│   │       ├── components
│   │       │   └── xxxxx
│   │       ├── page.tsx
│   │       └── routes
│   │           └── index.tsx
│   ├── main.tsx
│   ├── modules
│   │   ├── _shared
│   │   │   └── const
│   │   │       └── const.ts
│   │   ├── index.ts
│   │   └── projects
│   │       ├── api.ts
│   │       ├── hook.ts
│   │       ├── index.ts
│   │       └── slice.ts
・
・
・
```

# How To Run

## Setup

```bash
$ make setup
```

## Run

Run the following command. Server will start on `http://localhost:5173`.

```bash
$ make dev
```
