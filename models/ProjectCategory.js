import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
    projects: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true
    }],
}, { timestamps: true, collection: "project_categories" });

export default mongoose.model("ProjectCategory", schema);