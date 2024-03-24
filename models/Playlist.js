import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
    type: {
        type: String, required: true,
        enum: ["application", "explaination", "shorts", "general"],
    },
}, { timestamps: true, collection: "playlists" });

export default mongoose.model("Playlist", schema);