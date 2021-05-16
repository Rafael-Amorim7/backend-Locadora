import { mongoose } from "../database/index.js"

const UserSchema = new mongoose.Schema({
    name: String,
    cep: String,
    adress: String,
    email: String
},
    { timestamps: true }
)

var User = mongoose.model('User', UserSchema);

export { User };