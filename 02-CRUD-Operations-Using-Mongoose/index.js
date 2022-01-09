const Course = require("./Course");

const createCourse = async () => {
  try {
    const course = new Course({
      // Course.create({...})
      name: "JavaScript Mastery",
      author: "Bello Noah",
      tags: ["Frondend", "backend"],
      age: 30,
      isPublished: true,
    });

    // update course
    course.name = "JavaScript Front to back";

    const result = await course.save();
    console.log(result);

    const findCourse = await Course.findById("61db330d0766030b3bea734f");
    // find({name: "Kyle"});
    // findOne({ name: "Kyle" })
    // exists({ name: "Kyle" })
    // where("name").equals("Kyle")
    // where("age").equals(12)
    // where("name").equals("Kyle").where("age").equals(12).limit(2).select("age")
    console.log(findCourse);
  } catch (err) {
    console.log(err.message);
  }
};

createCourse();

Course.find({ author: "Bello Osagie Noah", isPublished: true })
  .limit(10)
  .sort({ name: 1 })
  .select({ name: 1, tag: 1 });
