module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        uid: {
            type: String,
        },
        pwd: { type: String  },
        name:{type:String},
        phone:{type:Number},
        role:{
            type:Number,
            default:1
        },
        token:{type:String},
        tokenTime:{
            type:Date,
            default:Date.now()
        },
        status:{
            type:Number,
            default:1
        },
        createTime:{
            type:Date,
            default:Date.now()
        },
        updateTime:{
            type:Date,
            default:Date.now()
        }
    });

    return mongoose.model('User', UserSchema);
}

