/**
 * @swagger
 *  components:
 *    schemas:
 *      price:
 *        type: object
 *        properties:
 *          currency:
 *            type: string
 *          amount:
 *            type: number
 *          decimals:
 *            type: number
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      detail:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *          title:
 *            type: string
 *          price:
 *            $ref: '#/components/schemas/price'
 *          picture:
 *             type: string
 *          condition:
 *             type: string
 *          free_shipping:
 *             type: boolean
 *          sold_quantity:
 *             type: number
 *          description:
 *             type: string
 *          address:
 *             type: string
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      item:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *          title:
 *            type: string
 *          price:
 *            $ref: '#/components/schemas/price'
 *          picture:
 *             type: string
 *          condition:
 *             type: string
 *          free_shipping:
 *             type: boolean
 *          address:
 *             type: string
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      author:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *          lastname:
 *            type: string
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      queryResponse:
 *        type: object
 *        properties:
 *          author:
 *            $ref: '#/components/schemas/author'
 *          categories:
 *            type: array
 *            items:
 *               type: string
 *          items:
 *            type: array
 *            items:
 *               $ref: '#/components/schemas/item'
 *
 *
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      detailsResponse:
 *        type: object
 *        properties:
 *          author:
 *            $ref: '#/components/schemas/author'
 *          categories:
 *            type: array
 *            items:
 *               type: string
 *          item:
 *            $ref: '#/components/schemas/detail'
 *
 *
 */
