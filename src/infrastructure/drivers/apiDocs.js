import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'

const root = path.dirname(require.main.filename || process.mainModule.filename)

const getServerUrl = () => {
  const port = process.env.PORT || 3000
  const server = process.env.SERVER || 'http://localhost'
  return `${server}:${port}/api`
}

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Meli challenge - BFF',
      version: '1.0.0',
      description: 'Backend for frontend, for Meli challenge',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Yvo Rojas',
        email: 'yvo.rojas.valdes@gmail.com',
      },
    },
    servers: [
      {
        url: getServerUrl(),
      },
    ],
  },
  apis: [
    `${root}/infrastructure/drivers/apiDocsSpecs.js`,
    `${root}/infrastructure/drivers/schemas.js`,
  ],
}

export const specs = swaggerJsdoc(options)

export const apiDocsUi = swaggerUi
