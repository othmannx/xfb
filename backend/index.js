import mongoose from "mongoose";



mongoose.connect(process.env.database_coonection);
const MyModel = mongoose.model('Test', new Schema({ name: String }));