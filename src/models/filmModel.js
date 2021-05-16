import { mongoose } from "../database/index.js";

const FilmSchema = new mongoose.Schema({
    name: String,
    quant: Number,
    description: String
},
    { timestamps: true }
)

const Film = mongoose.model('Fiml', FilmSchema);

export { Film }