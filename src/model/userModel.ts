import mongoose from 'mongoose';



const schema = new mongoose.Schema({


    uuid: { type: mongoose.Schema.Types.ObjectId },
    name: String,
    email: String,
    isPublic: Boolean,



}, {
    timestamps: true
})

export = mongoose.model('Tags', schema);
