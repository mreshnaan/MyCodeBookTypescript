import mongoose from 'mongoose';



const schema = new mongoose.Schema({

    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    name: String,
    isPublic: Boolean,
    snippert: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CodeSnippert'
    },


}, {
    timestamps: true
})

export = mongoose.model('Categories', schema);
