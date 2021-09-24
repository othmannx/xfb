import mongoose from "mongoose";


const userShema = new mongoose.Schema({
    username : String,
    password : String,
    name :String,
    email : String,
    type : Number,
    main_img : String,
});

const articleShema = new mongoose.Schema({
    name :String,
    description : String,
    category : Number,
    main_img : String,
});

const articledetailShema = new mongoose.Schema({
    id_article :String,
    description : String,
});

const img = new mongoose.Schema({
    nom :String,
    url : String,
    type : Number,
    id_parent : String
});

const MyModel = mongoose.model('Test', userShema);

export{

}