import mongoose from "mongoose";


const connnectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connect to DB ' + conn.connection.host);

    } catch (error) {
        console.log(`Errror in MongoDB ${error}`);
    }
}

export default connnectDb;