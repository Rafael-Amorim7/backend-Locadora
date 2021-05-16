import { mongoose } from '../database/index.js'

const RentSchema = new mongoose.Schema({
    price: Number,
    dateLimit: Date
},
    { timestamps: true }
)

const Rent = mongoose.model('Rent', RentSchema)

export { Rent }