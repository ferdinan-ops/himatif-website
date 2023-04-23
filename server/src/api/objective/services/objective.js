'use strict';

/**
 * objective service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::objective.objective');
