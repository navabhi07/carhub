import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    company:{
      type:String,
      required:true
    },
    description: {
      type: String,
      required: true,
    },
 
    Price: {
      type: Number,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;