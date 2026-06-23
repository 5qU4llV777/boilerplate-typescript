## Para começar use no seu terminal para iniciar projeto
``` javascript
npm init -y
```
## depois use este comando para instalar tudo que typescript precisa para funcionar modo DEV
``` javascript
npm i typescript tsx tsup -D
```
## use esse para criar tsconfig 
``` javascript
npx tsc --init
```
## no pack.json cole nos script se necessario
``` javascript
"scripts": {
    "dist": "tsup src",
    "start:dev": "tsx --env-file=.env src/server.ts",
    "start:watch": "tsx watch --env-file=.env  src/server.ts",
    "start:dist": "npm run dist && node dist/src/index.js",
    "prisma:seed": "tsx prisma/seed.ts"
  },
```
## no tsconfig.json
``` javascript
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```
## crie seu .gitignore
``` javascript
dist/
node_modules/
```
## mude de branch para não alterar seu Boilerplate
``` javascript
git checkout -b develop
```