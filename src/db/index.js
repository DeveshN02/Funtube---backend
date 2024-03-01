import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try {
        // mongoose jo h wo return krta h ek object jisko variable me store kr skte h
        const connectionInstances = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            `\n MONGO DB connected  !!! DB Host : ${connectionInstances.connection.host}`
        );
    } catch (error) {
        console.log(" Mongo db Connection Error", error);

        // // process ko yaha exit krne k liye iska use krenge

        process.exit(1);
    }
};

export default connectDb;
