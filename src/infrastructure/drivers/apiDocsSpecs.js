/**
 * @swagger
 * tags:
 *   name: items
 *   description: item query endpoints
 */

/**
 * @swagger
 * path:
 *  /items:
 *    get:
 *      summary: get items by query string
 *      tags: [items]
 *      parameters:
 *         - in: query
 *           name: q
 *           schema:
 *              type: string
 *           description: query to retrieve items
 *      responses:
 *        "200":
 *          description: schema of items results by query
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/queryResponse'
 */

/**
 * @swagger
 * path:
 *   /items/{id}:
 *     get:
 *       summary: get item by id
 *       tags: [items]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           description: item id
 *       responses:
 *        "200":
 *          description: schema of item result by id
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/detailsResponse'
 */
