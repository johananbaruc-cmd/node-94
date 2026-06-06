import express from 'express';
const route = express.Router();

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           example: 6841a7b1f23d4c8d9a123456
 *         name:
 *           type: string
 *           example: Baruc
 *         email:
 *           type: string
 *           format: email
 *           example: baruc@gmail.com
 *         age:
 *           type: integer
 *           minimum: 18
 *           maximum: 99
 *           example: 25
 *         isActive:
 *           type: boolean
 *           example: true
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - admin
 *             - user
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               example: Av. Principal 123
 *             city:
 *               type: string
 *               example: Toluca
 *             zipCode:
 *               type: string
 *               example: 52000
 *         birthday:
 *           type: string
 *           format: date
 *           example: 2000-05-15
 *         salary:
 *           type: number
 *           example: 25000.50
 *         status:
 *           type: string
 *           enum:
 *             - active
 *             - inactive
 *             - blocked
 *           example: active
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
route.post('/', createUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
route.get('/', getUsers);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
route.get('/:id', getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 */
route.put('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       404:
 *         description: Usuario no encontrado
 */
route.delete('/:id', deleteUser);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
export default route;