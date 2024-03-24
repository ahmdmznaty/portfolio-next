import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    name: { type: LanguageSchema, required: true },
    description: { type: LanguageSchema, required: true },
    picture: { type: String, required: true },
    technologies: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Technology", required: true
    }],
    repository: { type: String },
    preview: { type: String },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: "ProjectCategory", required: true
    },
}, { timestamps: true, collection: "projects" });

export default mongoose.model("Project", schema);