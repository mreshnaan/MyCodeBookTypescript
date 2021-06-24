import mongoose from 'mongoose';
const objectId = mongoose.Schema.Types.ObjectId


const schema = new mongoose.Schema({


    tagId: objectId,
    name: String,
    isPublic: Boolean,
    snippert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CodeSnippert'
    },


}, {
    timestamps: true
})

export = mongoose.model('Tags', schema);
