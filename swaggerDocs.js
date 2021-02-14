const colors = require('./src/utils/swagger/colors');
const type = require('./src/utils/swagger/type');
const search = require('./src/utils/swagger/search');
const color = require('./src/utils/swagger/color');

module.exports = {
  openapi: '3.0.1',
  info: {
    version: '1.3.0',
    title: 'WEBCOLORS API',
    description: 'API for web colors in hex, rgb and name format',
    contact: {
      name: 'chubbystrings',
      email: 'martinsokwor@gmail.com',
      url: 'http://chubbystings.github.io/portfolio',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
    {
      url: 'https://webcolors-api-product.herokuapp.com',
      description: 'Production server',
    },
  ],
  tags: [
    {
      name: 'Api calls',
    },
  ],
  paths: {
    ...colors,
    ...type,
    ...search,
    ...color,
  },
  components: {
    schemas: {
      Colors: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'successful',
          },
          data: {
            type: 'object',
            properties: {
              rows: {
                type: 'array',
                example: [
                  {
                    id: 11,
                    name: 'blueviolet',
                    hex: '#8A2BE2',
                    rgb: '138, 43, 226',
                  },
                ],
              },
            },
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
  },
};
