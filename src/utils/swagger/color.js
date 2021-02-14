const color = {
  '/api/v1/colors/color': {
    get: {
      tags: ['Api calls'],
      description: 'get specific color by name',
      summary: 'This Api call is to fetch a color by the name e,g gold',
      operationId: 'color',
      parameters: [
        {
          name: 'name',
          in: 'query',
          required: true,
          description: 'Get colors by name e.g blueviolet',
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
                error: 'Alphabets Only',
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

module.exports = color;
