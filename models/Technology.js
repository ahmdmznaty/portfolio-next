import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
    slogan: { type: LanguageSchema, required: true },
    icon: { type: String, required: true },
    percentage: { type: Number, required: true, min: 0, max: 100 },
}, { timestamps: true, collection: "technologies"});

export default mongoose.model("Technology", schema);