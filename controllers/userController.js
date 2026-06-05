import User from '../models/user.js';

// Crear usuario
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({ name, email });

    return res.status(201).json({
      message: 'Usuario creado correctamente en MongoDB',
      data: user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al crear el usuario en la base de datos'
    });
  }
};

// Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      message: 'Usuarios obtenidos correctamente',
      data: users
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al obtener los usuarios'
    });
  }
};

// Obtener usuario por ID
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    return res.status(200).json({
      message: 'Usuario encontrado',
      data: user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al obtener el usuario'
    });
  }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { name, email },
      {
        new: true,
        runValidators: true
      }
    );

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    return res.status(200).json({
      message: 'Usuario actualizado correctamente',
      data: user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al actualizar el usuario'
    });
  }
};

// Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    return res.status(200).json({
      message: 'Usuario eliminado correctamente',
      data: user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al eliminar el usuario'
    });
  }
};