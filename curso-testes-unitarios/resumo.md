# Curso de testes unitarios


Testes realizados em camada unitária, especialmente do service.

Nos testes unitarios nao usamos o supertest

*Jest* Configurações:

```json
npm i -D jest ts-jest typescript @types/jest
```
no *js.config.ts*

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
};
```

no *tsconfig.json*

```javascript
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
  },
  "ts-node":{
    "esm": true
  },
}
```
