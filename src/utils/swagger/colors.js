const colors = {
  '/api/v1/colors': {
    get: {
      tags: ['Api calls'],
      description: 'Get 7 random colors ',
      summary: 'Get 7 random colors',
      operationId: 'colors',
      parameters: [],
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

module.exports = colors;
