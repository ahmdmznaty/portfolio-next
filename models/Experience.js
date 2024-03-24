import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    title: { type: LanguageSchema, required: true },
    type: { type: LanguageSchema, required: true },
    start: { type: Date, required: true },
    end: { type: Date, default: null },
    description: { type: LanguageSchema, required: true },
    company: {
        type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true
    },
}, { timestamps: true, collection: "experiences" });

export default mongoose.model("Experience", schema);