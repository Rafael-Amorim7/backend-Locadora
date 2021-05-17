import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:23666/locadora_db',  {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => {
    console.log('MongoDB connected')
}).catch ((err) => {
    console.log("Occured the error: " + err)
});
mongoose.Promise = global.Promise;

export { mongoose };
