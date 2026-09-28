# React + Vite

## Cypress tests

Install dependencies with `npm install`, then run:

| Command                          | Description                                                                                                    |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `npm test`                       | Run component and end-to-end tests, then enforce 80% statement, branch, function, and line coverage for `src`. |
| `npm run test:component`         | Run Cypress component tests headlessly.                                                                        |
| `npm run test:e2e`               | Start the Vite development server and run Cypress end-to-end tests headlessly.                                 |
| `npm run cypress:open:component` | Open Cypress in component testing mode.                                                                        |
| `npm run cypress:open:e2e`       | Start Vite and open Cypress in end-to-end mode.                                                                |

Coverage reports are written to `coverage/`. Cypress instruments source files only when `CYPRESS_COVERAGE=true`, so normal development and production builds are not instrumented. The Husky `pre-push` hook runs `npm test` and blocks pushes if tests or coverage checks fail.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs).
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-swc) uses [SWC](https://swc.rs/).

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
