const mongoose = require("mongoose");

const aircraftSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  model: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  yearOfManufacture: {
    type: Number,
    required: true
  },
  totalFlightHours: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ["Active", "Under Maintenance", "Grounded"],
    default: "Active"
  }
}, { timestamps: true });

module.exports = mongoose.model("Aircraft", aircraftSchema);
