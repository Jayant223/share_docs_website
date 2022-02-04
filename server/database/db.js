import mongoose from "mongoose"

const Connection=async(username='jayant',userpassword="jayant")=>{
    const URL=`mongodb+srv://${username}:${userpassword}@share-edit-docs.lmw82.mongodb.net/SHARE_EDIT_DOCS?retryWrites=true&w=majority`;

    try {
      await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
      console.log("data base is connected");
    } catch (error) {
        console.log("error in connection with database");
    }
}

export default Connection;