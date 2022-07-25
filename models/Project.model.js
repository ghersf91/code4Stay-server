const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {

    projectName: {
      type: String,
      maxLength: 50,
      required: [true, 'Please include the name of your project']
    },

    projectType: {
      type: String,
      enum: ['NGO', 'Farm', 'Hostel', 'Camping', 'School', 'Other']

    },

    city: {
      type: String,
      required: [true, 'Please include the location of your project']
    },

    country: {
      type: String,
      required: [true, 'Please include the location of your project']
    },

    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },

    hoursPerWeek: {
      type: Number,
      max: [40, 'You must specify about the number of working hours per week'],
      required: [true, 'Please indicate how many hours per week volunteers are expected to work'],
    },

    description: {
      type: String,
      maxLength: 400,
      required: [true, 'Please include a description of the project and help needed'],
    },

    minWeeks: {
      type: Number,
      min: 1,
      default: 1,
    },

    mealsIncluded: {
      type: [String],
      enum: ['Breakfast', 'Lunch', 'Supper'],
      required: [true, 'Please indicate what meals are provided to volunteers'],
    },

    joiners: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],


    shelterType: {
      type: String
    },

    testimonials: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Rating',
      }
    ],

    gallery: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png?20220519031949',
    },

    languagesSpoken: {
      type: [String],
      required: [true, 'Please indicate what languages are spoken by the hosts']
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }

  },
  {
    timestamps: true,
  }
);



projectSchema.index({ location: "2dsphere" })

const Project = model("Project", projectSchema);

module.exports = Project;