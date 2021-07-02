import mongoose from 'mongoose';



const schema = new mongoose.Schema({

    // parentId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Categories'
    // },
    name: String,
    isPublic: Boolean,



}, {
    timestamps: true
})

export = mongoose.model('Categories', schema);
