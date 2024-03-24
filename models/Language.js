import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
    icon: { type: String, required: true },
    pinned: { type: Boolean, default: false },
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LanguageLevel", required: true
    },
});

export default mongoose.model("Language", schema);