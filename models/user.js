import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        unique: true, 
        trim: true // Elimina espacios en blanco al inicio y al final del nombre
    },
    email: {
        type: String,
        required: true,
        unique: true, // Evita que se registren emails duplicados
        lowercase: true // Convierte el email a minúsculas antes de guardarlo
        
    },
    age: {
        type: Number,
        min: 18,
        max: 99
    },
    isActive: {
        type: Boolean, // true o false 1 o 0
        default: true 
    },
    roles: [{
        type: String,
    }],
    address: {
        street: String,
        city: String,
        zipCode: String
    },

    birthday: Date,
    salary: mongoose.Schema.Types.Decimal128,

    status: {
        type: String,
        enum: ['active',
             'inactive',
              'blocked'
            ],
        default: 'active'
    }

}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);