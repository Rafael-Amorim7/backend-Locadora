import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:23666/locadora_db',  {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB connected')
}).catch ((err) => {
    console.log(err)
});
mongoose.Promise = global.Promise;

export { mongoose };
