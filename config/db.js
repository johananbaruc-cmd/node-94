import mongoose from 'mongoose';

dotenv.config();
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB conectado');

    } catch (error) {

        console.log(error);

        process.exit(1);

    }

};

export default connectDB;