const Schedule = require("../models/schedule");
const asyncHandler = require('express-async-handler')
// Display list of all Authors.
exports.schedule_list = asyncHandler(async (req, res, next) => {
 const fullSchedule = await Schedule.find({}, "week day_of_week topic").exec();
 console.log("Schedule Connected...")
 //sort the data
 fullSchedule.sort((a, b) => {
    //compare two of the "week" values
    if (a.week !== b.week) {
        //return the sorted values
      return a.week - b.week;
    } else {
        //create an array of day values
      const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      //compare that array and output the sorted days of the week
      return daysOfWeek.indexOf(a.day_of_week) - daysOfWeek.indexOf(b.day_of_week);
    }
  });
 
 res.render('schedule', {"schedule": fullSchedule});
});
