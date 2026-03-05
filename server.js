const express = require('express');
const app = express();


const userModel = require('./usermodel');


app.get('/', (req, res) => {

    res.send("homepage");
})

app.get('/create', async(req, res) => {
    let createduser = await userModel.create({
        empname: "pqr",
        email: "pqr@gmail.com",
        eusername: "pqr99"
    })
    res.send(createduser);
})



app.get('/update', async(req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        {eusername: "Pranjal"},
        {empname: "Prashu"},

        {new: true}
    )
    res.send(updateduser);
})

app.get("/read", async(req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get("/delete", async(req, res) => {
    let users = await userModel.findOneAndDelete({
        eusername: "mohit99"
    })
    res.send(users);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});