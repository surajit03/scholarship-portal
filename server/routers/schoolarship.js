const express = require("express");
const router = express.Router();
const Scholarship =require("../module/schoolarship")

router.get("/facthschoolarship", async (req, res) => {
    try {
        const schoolarship = await Scholarship.find( req.params._id );
        // console.log("Customer data:", coustomer);
        res.status(200).json(schoolarship);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
}); 

router.get("/facthschoolarship/:_id",async (req,res)=>{
    const { _id } = req.params;
      try {
          const schoolarship = await schoolarships.findById(_id);
          res.status(200).json(schoolarship);
      } catch (error) {
          console.log(error.message);
          res.status(500).send("Internal server error");
      }
  });  

  router.get("/Seaechschoolarship", async (req, res) => {
    try {
      const searchTerm = req.query.search; // Extract search term from query params
      let query = {}; // Default query
  
      // If a search term is provided, use it to filter scholarships
      if (searchTerm) {
        query = {
          $or: [
            { title: { $regex: new RegExp(searchTerm, 'i') } }, // Case-insensitive title search
            { degrees: { $regex: new RegExp(searchTerm, 'i') } }, // Case-insensitive degrees search
          ],
        };
      }
  
      const scholarships = await Scholarship.find(query);
      res.status(200).json(scholarships);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  });
module.exports = router;