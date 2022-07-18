const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
    },

    role: {
      type: String,
      enum: ['VOLUNTEER', 'HOST', 'ADMIN'],
      default: 'VOLUNTEER',
    },

    profilePicture: {
      type: [String],
      default: ['https://www.pngegg.com/en/png-xwkzm'],
    },

    bio: {
      type: String,
      maxLength: 300,
    },

    projectTypeInterests: {
      type: [String],
      enum: ['FARM', 'NGO', 'SCHOOL', 'HOSTEL', 'CAMPING', 'OTHER'],
    },

    locationInterests: {
      type: [String],
      enum: ['AMERICAS', 'EUROPE', 'AFRICA', 'ASIA', 'OCEANIA'],
    },

    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Rating',
    }]

  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
