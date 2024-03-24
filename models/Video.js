import mongoose from "mongoose";
import LanguageSchema from "./schemas/LanguageSchema";

const schema = new mongoose.Schema({
    playlist: {
        type: mongoose.Schema.Types.ObjectId, ref: "Playlist", required: true
    },
    title: { type: LanguageSchema, required: true },
    description: { type: LanguageSchema, required: true },
    url: { type: String, required: true },
    thumbnail: { type: String, required: true },
}, { timestamps: true, collection: "videos" });

export default mongoose.model("Video", schema);