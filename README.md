# 1. Setup the project:

- `mkdir node-express-ts-rest-server`
- `cd node-express-ts-rest-server`
- `tsc --init`
- `npm i express body-parser`
- `npm i --save-dev nodemon @types/node @types/express @types/body-parser`

# 2. Settings:

- `package.json` scripts:

- `"start": "nodemon dist/app.js"`

- `tsconfig.json`:

- `"target": "ES2018"`
- `"moduleResolution": "node"`
- `"outDir": "./dist"`,
- `"rootDir": "./src"`,

# 3. To run server:

- write your logic ( app.ts and other...),
- to run it: tsc compiler in watch mode, then npm script:
- `tsc -w`
- `npm start`
