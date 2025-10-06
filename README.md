# FinanzApp API (MVP — MVC + Swagger)

API en Node.js + Express + TypeScript con estructura MVC, modelos (Mongoose), rutas, controladores *dummy*, middlewares y documentación Swagger interactiva.

## Requisitos
- Node 18+
- PNPM o NPM
- Opcional: MongoDB Atlas (para esta entrega no es obligatorio conectarse realmente).

## Configuración
1. Clonar el repo
2. Copiar `.env.example` a `.env` y ajustar valores (al menos `PORT` y `CORS_ORIGIN`)
3. Instalar deps: `pnpm install` (o `npm install`)

## Ejecutar en desarrollo
```bash
pnpm dev
# o
npm run dev
```
Visita **http://localhost:4000/docs** para ver Swagger (interactivo).

## Compilar y ejecutar
```bash
pnpm build && pnpm start
```

## Estructura
```
src/
  config/        # env y DB
  middlewares/   # auth, etc.
  models/        # Mongoose schemas
  controllers/   # controladores con respuestas dummy
  routes/        # rutas por módulo (CRUD)
  swagger.ts     # swagger-jsdoc config
  app.ts         # express app
  server.ts      # arranque
```

## Endpoints (módulos)
- `/auth` → register/login/me
- `/users` → CRUD
- `/transactions` → CRUD
- `/budgets` → CRUD
- `/goals` → CRUD
- `/categories` → CRUD

> **Nota**: Esta entrega expone *controladores dummy* (sin lógica real). El objetivo es validar estructura, rutas y documentación.

## Licencia
MIT (ajustar si es necesario)
