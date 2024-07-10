const students = require("../models/student")



//filtering students by year

exports.getStudentsByYear = async(req,res)=>{
    const year = req.query.year;
    try {
        const student = await students.find({year:req.query.year});
        if (student) {
            // Product found
            res.status(200).json(student);
        } else {
            // Product not found
            res.status(404).json({ message: "students not found" });
        }
    } catch (err) {
        // Error occurred, respond with status code 500 (Internal Server Error)
        res.status(500).json({ error: err, message: "Internal Server Error" });
    }
  }
