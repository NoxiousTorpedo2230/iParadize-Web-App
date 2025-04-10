import mongoose from "mongoose";

const connectDB = async () => {
    try {
            await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('Database Connection Closed');
            process.exit(0);
        });

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;