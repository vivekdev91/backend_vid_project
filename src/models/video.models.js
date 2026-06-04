import mongoose, { Schema } from "mongoose";

import mongoosePaginate from "mongoose-paginate-v2";

const videoSchema = new mongoose.Schema(
  {
    videoFile: { type: String, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    views: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
    owner: { type: Schema.Types.ObjectId, ref: "User", default: true },
  },
  { timestamps: true }
);


videoSchema.plugin(mongoosePaginate)

export const Video = mongoose.model("Video", videoSchema);
