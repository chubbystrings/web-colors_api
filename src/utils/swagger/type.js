const type = {
  '/api/v1/colors/type': {
    get: {
      tags: ['Api calls'],
      description: 'Get colors by type e.g name or hex',
      summary: 'This Api call is to fetch a color by the type e.g name, value e.g gold',
      operationId: 'type',
      parameters: [
        {
          type: 'string',
          in: 'query',
          required: true,
          description: 'Get colors by type e.g name or hex or rgb',
          name: 'type',
        },
        {
          name: 'value',
          in: 'query',
          required: true,
          description: 'Get colors by value e.g blueviolet',
          type: 'string',
        },
        {
          name: 'showing',
          in: 'query',
          required: true,
          description: 'data pagination e.g 0',
          type: 'integer',
          maximum: 7,
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

module.exports = type;
