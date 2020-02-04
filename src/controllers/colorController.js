/* eslint-disable no-console */
const pool = require('../db/database');

exports.viewallColors = async (request, response) => {
  try {
    const { rows, rowCount } = await pool.query('SELECT * FROM colors offset floor( random() * (select count(*) from colors)) LIMIT 7');

    if (!rows || rowCount === 0) {
      return response.status(404).json({
        status: 'error',
        message: 'not found',
      });
    }

    return response.status(200).json({
      status: 'success',
      data: rows,
    });
  } catch (error) {
    return response.status(501).send({
      status: 'error',
      message: error,
    });
  }
};


exports.viewColorByType = async (request, response) => {
  try {
    // search by name
    if (request.query.type && request.query.type === 'name') {
      const searchByName = `%${request.query.value.toLowerCase()}%`;
      const limit = 7;
      const { showing } = request.query;
      const { rows, rowCount } = await pool.query(`SELECT * FROM colors WHERE colors.name LIKE $1 LIMIT ${limit} OFFSET ${showing}`, [searchByName]);
      if (!rows || rowCount === 0) {
        return response.status(404).send({
          status: 'error',
          message: 'Not Found',
        });
      }
      return response.status(200).send({
        status: 'success',
        data: rows,
      });
    }
    // Search By hex value
    if (request.query.type && request.query.type === 'hex') {
      // eslint-disable-next-line max-len
      const searchByHex = request.query.value[0] === '#' ? request.query.value.toUpperCase() : `#${request.query.value.toUpperCase()}`;
      const limit = 7;
      const { showing } = request.query;
      const { rows, rowCount } = await pool.query(`SELECT * FROM colors WHERE colors.hex LIKE '${searchByHex}%' LIMIT ${limit} OFFSET ${showing}`);
      if (!rows || rowCount === 0) {
        return response.status(404).send({
          status: 'error',
          message: 'Not Found',
        });
      }
      return response.status(200).send({
        status: 'success',
        data: rows,
      });
    }
    // Search RGB values
    if (request.query.type && request.query.type === 'rgb') {
      if (!Number(request.query.value)) {
        return response.status(400).send({
          status: 'error',
          message: 'rgb values are number based please input correct type',
        });
      }
      const searchByRgb = request.query.value;
      const limit = 7;
      const { showing } = request.query;
      const { rows, rowCount } = await pool.query(`SELECT * FROM colors WHERE colors.rgb LIKE '%${searchByRgb}%' LIMIT ${limit} OFFSET ${showing}`);
      if (!rows || rowCount === 0) {
        return response.status(404).send({
          status: 'error',
          message: 'Not Found',
        });
      }
      return response.status(200).send({
        status: 'success',
        data: rows,
      });
    }

    return response.status(400).send({
      status: 'error',
      message: 'No search criteria specified',
    });
  } catch (error) {
    return response.status(501).send({
      status: 'error',
      message: error,

    });
  }
};
