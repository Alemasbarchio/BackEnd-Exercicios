
import mongoose from "mongoose"
const userColleciton="users"
const userSchema= new mongoose.Schema({
user:String,
message:[String],

})
const userModel= mongoose.model(userColleciton,userSchema);

export default userModel;