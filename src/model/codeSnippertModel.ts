import mongoose from 'mongoose';


const schema = new mongoose.Schema({

    name: String,
    language: String,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categories'
        }
    ],
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tags'
        }
    ],
    isPublic: Boolean
}, {
    timestamps: true
})

export = mongoose.model('CodeSnippert', schema);
