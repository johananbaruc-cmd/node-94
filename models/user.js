import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        unique: true // Permite que se registren usuarios con el mismo nombre
    },
    email: {
        type: String,
        required: true,
        unique: true // Evita que se registren emails duplicados
    }
}, {
    versionKey: false // Quita el campo __v que mongoose agrega por defecto
});

const User = mongoose.model('User', userSchema);
export default User;