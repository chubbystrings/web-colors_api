const search = {
  '/api/v1/colors/search': {
    get: {
      tags: ['Api calls'],
      description: 'search colors by hex, name or rgb',
      summary: 'This Api call is to search a color by the name, hex or rgb value returns an array of colors',
      operationId: 'search',
      parameters: [
        {
          name: 'value',
          in: 'query',
          required: true,
          description: 'Search colors by value e.g blueviolet',
          type: 'string',
        },
      ],
      requestBody: {},
      responses: {
        200: {
          description: 'OK',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Colors',
              },
            },
          },
        },

        401: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                status: 'error',
                error: 'Alphanumeric values only',
              },
            },
          },
        },

        404: {
          description: 'No color found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                status: 'error',
                error: 'Not found',
              },
            },
          },
        },

        501: {
          description: 'Server Error',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                status: 'error',
                error: 'Internal server error occurred',
              },
            },
          },
        },

      },
    },
  },
};

module.exports = search;
