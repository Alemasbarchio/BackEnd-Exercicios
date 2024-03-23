
import userModel from "../models/user-models.js";

const createUser = async (userData) => {

  try {
    let userExist = await userModel.findOne({ user: userData.user });
    if (userExist) {
      userExist.message.push(userData.message);
      await userExist.save();
      return userExist;;
    }

    else {
      let userCreated = await userModel.create(userData);
      return userCreated;
    }

  } catch (error) {
    console.log(error);
  }
}

export default { createUser };