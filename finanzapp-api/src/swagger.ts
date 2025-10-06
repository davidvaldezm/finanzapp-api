import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'FinanzApp API',
      version: '0.1.0',
      description: 'API documentation for FinanzApp (MVP)',
    },
    servers: [
      { url: 'http://localhost:4000' }
    ],
  },
  apis: ['src/routes/*.ts'],
});
