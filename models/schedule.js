const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
 week: Number,
 day_of_week: String,
 topic: String
});
// Export model
module.exports = mongoose.model("Schedule", scheduleSchema);