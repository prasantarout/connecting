const mongoose=require('mongoose');

Schema=mongoose.Schema;

const User=new Schema({
    cname:{
        type:String,
        required: true,
        
    },
    description:{
        type:String,
        require:false,
    },
    mobile:{
        type:Number,
        require:false,
    },
    email:{
       type:String,
       unique:true,
       
    },
    avatar: {
        
          type: String,
          required: true,
        },
    state:{
        type:String,
        require:false,
    },
    city:{
        type:String,
        require:false,
    },
},
{
    TimeStamps:true

}
)
module.exports=mongoose.model("User",User);