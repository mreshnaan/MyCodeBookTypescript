import mongoose from 'mongoose';



const schema = new mongoose.Schema({


    tagId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tags'
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

export = mongoose.model('Tags', schema);
