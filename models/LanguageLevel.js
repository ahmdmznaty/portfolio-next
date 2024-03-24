import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
    level: {
        type: String, required: true,
        enum: ["A1", "A2", "B1", "B2", "C1", "C2"],
    },
}, { timestamps: true, collection: "language_levels" });

export default mongoose.model("LanguageLevel", schema);