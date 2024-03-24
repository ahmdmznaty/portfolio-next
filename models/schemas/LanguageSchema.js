import mongoose from "mongoose";

const schema = new mongoose.Schema({
    ar: { type: String },
    en: { type: String },
}, { timestamps: false, _id: false });

export default schema;