import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
import userRoutes from './routes/user.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

dotenv.config();
const app = express();
app.use('/api-docs', 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerSpec));  

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI; 

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Conectado exitosamente a MongoDB Atlas');
        
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });