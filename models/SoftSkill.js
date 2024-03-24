import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
}, { timestamps: true, collection: "soft_skills" });

export default mongoose.model("SoftSkill", schema);