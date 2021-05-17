import { mongoose } from "../database/index.js"

const UserSchema = new mongoose.Schema({
    name: String,
    adress: String,
    cep: String,
    email: String
},
    { timestamps: true }
)

var User = mongoose.model('User', UserSchema);

export { User };