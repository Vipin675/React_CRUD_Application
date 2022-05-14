const express = require("express");
const users = require("../model/userSchema");
const router = express.Router();



router.post('/register', async(req, res) => {
    // console.log(req.body);
    const { name, email, age, phone, work, address, descreption } = req.body;

    if (!name || !email || !age || !phone || !work || !address || !descreption) {
        res.status(422).send("Please fill all the data.");
    } else {

        try {

            const checkUserAvailability = await users.findOne({ email: email });
            console.log(checkUserAvailability);

            if (checkUserAvailability) {

                res.status(422).send("This is is already exists.");

            } else {

                const addUser = new users({
                    // Objects destructuring https://www.educative.io/edpresso/what-is-object-destructuring-in-javascript
                    name, email, age, phone, work, address, descreption
                });

                await addUser.save();
                res.status(201).json(addUser);
                console.log(addUser);

            }


        } catch (error) {
            res.status(422).send(error);
        }

    }


});

// Get userdata
router.get("/getdata", async(req, res) => {

    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
        
    } catch (error) {
        res.status(422).send(error);
    }

});


// Get individual user data :

router.get("/getuser/:id" , async(req, res) => {

    try {
        console.log(req.params);
        const {id} = req.params;

        const individualUser = await users.findById({_id:id});
        console.log(individualUser);

        res.status(201).json(individualUser);
                
    } catch (error) {        
        res.status(422).json(error);
    }
    
});


// Update user data :
router.patch("/updateuserdata/:id", async(req, res) => {
    try {
        // console.log(req.params);
        const {id} = req.params;
        
        const updateuserdata = await users.findByIdAndUpdate(id,req.body,{
            new: true
        });
        console.log(updateuserdata);
        
        res.status(201).json(updateuserdata);
        
    } catch (error) {
        res.status(422).json(error);
    }
});


// Delete User : 
router.delete("/deleteuser/:id", async(req, res) => {
    try {
        // console.log(req.params);
        const {id} = req.params;
        
        const deleteuser = await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser);
        
    } catch (error) {
        res.status(422).json(error);
    }
});




module.exports = router;