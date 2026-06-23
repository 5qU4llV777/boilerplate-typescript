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
## se fosse para fazer merge seria assim 
``` javascript
# 1. Volta para a main
git checkout main

# 2. Faz o merge da develop
git merge develop

# 3. Sobe para o GitHub
git push origin main

```

## Para projeto de api esse são os frameworks + banco de dados interno
``` javascript
npm i fastify@4.26.2 @fastify/cors@9.0.1 @fastify/static@9.1.3 @prisma/client@5.22.0 prisma@5.22.0 dotenv@17.4.2
```