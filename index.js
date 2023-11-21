const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.listen(process.env.PORT);

app.use(express.json());
app.use(cors());

//mongoose database connection
mongoose.connect(process.env.MONGO_URL).then(function () {
  console.log("connection: " + mongoose.connection.readyState);
});

// admin loging and pass
const Admin = require("./adminmodule");
const bcrypt = require("bcryptjs");
app.post("/admin", async (req, res) => {
  let { email, pass } = req.body;
  const isAdmin = await Admin.findOne({ email: email });
  if (!isAdmin)
    return res.json({ status: 400, failed: "Invalid credentials..." });
  bcrypt.compare(pass, isAdmin.pass, async function (err, result) {
    if (result) return res.json({ status: 200, success: "Logged in" });
    else return res.json({ status: 400, failed: "Invalid credentials..." });
  });
});

//post data
const Product = require("./productmodule")
app.post('/product', async (req, res) => {
  const {
    author, behancelink, category, description, dribblelink, facebooklink, googledrivelink, heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8, heading9, heading10, heading11, heading12, heading13, heading14, heading15, heading16, heading17, heading18, heading19, heading20, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, instagramlink, pinterestlink, quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, tag, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, thumbnail, title, twitterlink, designType, date, tag1, tag2
  } = req.body
  const product = new Product({
    author, behancelink, category, description, dribblelink, facebooklink, googledrivelink, heading1, heading2, heading3, heading4, heading5, heading6, heading7, heading8, heading9, heading10, heading11, heading12, heading13, heading14, heading15, heading16, heading17, heading18, heading19, heading20, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, instagramlink, pinterestlink, quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, tag, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, thumbnail, title, twitterlink, designType, date, tag1, tag2
  })
  await product
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Photography = require("./photographymodule")
app.post('/photography', async (req, res) => {
  const {
    behancelink, date, description, designType, devicename, devicetype, dribblelink, edtitor, facebooklink, googledrivelink, imageratio, instagramlink, photographer, phototag, pinterestlink, specialphototag, thumbnail, title, twitterlink
  } = req.body

  const photography = new Photography({
    behancelink, date, description, designType, devicename, devicetype, dribblelink, edtitor, facebooklink, googledrivelink, imageratio, instagramlink, photographer, phototag, pinterestlink, specialphototag, thumbnail, title, twitterlink
  })

  await photography
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Aiart = require("./aiartmodule")
app.post('/aiart', async (req, res) => {
  const {
    aiwebsiteurl, author, behancelink, category, date, description, designType, devicename, devicetype, dribblelink, edtitor, facebooklink, googledrivelink, imageratio, instagramlink, photographer, phototag, pinterestlink, specialphototag, thumbnail, title, twitterlink
  } = req.body

  const aiart = new Aiart({
    aiwebsiteurl, author, behancelink, category, date, description, designType, devicename, devicetype, dribblelink, edtitor, facebooklink, googledrivelink, imageratio, instagramlink, photographer, phototag, pinterestlink, specialphototag, thumbnail, title, twitterlink
  })

  await aiart
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Digitalart = require("./digitalartmodule")
app.post('/digitalart', async (req, res) => {
  const {
    author, behancelink, category, date, description, designType, dribblelink, facebooklink, googledrivelink, imageratio, instagramlink, pinterestlink, tag, thumbnail, title, twitterlink
  } = req.body

  const digitalart = new Digitalart({
    author, behancelink, category, date, description, designType, dribblelink, facebooklink, googledrivelink, imageratio, instagramlink, pinterestlink, tag, thumbnail, title, twitterlink
  })

  await digitalart
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Contact = require("./contactmodule")
app.post('/contact', async (req, res) => {
  const {
    category, city, email, firstname, lastname, message, phone, subject
  } = req.body

  const contact = new Contact({
    category, city, email, firstname, lastname, message, phone, subject
  })

  await contact
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Adv = require("./advmodule")
app.post('/advertisement', async (req, res) => {
  const {
   category, description, name, tag, thumbnail
  } = req.body

  const adv = new Adv({
   category, description, name, tag, thumbnail
  })

  await adv
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})
const Feedback = require("./feedbackmodule")
app.post('/feedback', async (req, res) => {
  const { name, email, text } = req.body

  const feedback = new Feedback({ name, email, text })

  await feedback
    .save()
    .then(() => res.status(200).json({ success: "success" }))
    .catch((error) => console.log(error));
})


// get data
app.get("/advertisement", (req, res) => {
  Adv.find()
    .sort({ createdAt: -1 })
    .then((data) => {res.json(data)})
});
app.get("/feedback", (req, res) => {
  Feedback.find()
  .sort({ createdAt: -1 })
  .then((data) => {res.json(data)})
});
app.get("/contact", (req, res) => {
  Contact.find()
  .sort({ createdAt: -1 })
  .then((data) => {res.json(data)})
});
app.get("/digitalart", (req, res) => {
  Digitalart.find()
  .sort({ createdAt: -1 })
  .then((data) => {res.json(data)})
});
app.get("/aiart", (req, res) => {
  Aiart.find()
  .sort({ createdAt: -1 })
  .then((data) => {res.json(data)})
});
app.get("/photography", (req, res) => {
  Photography.find()
    .sort({ createdAt: -1 })
    .then((data) => {res.json(data)})
});
app.get("/product", (req, res) => {
  Product.find()
    .sort({ createdAt: -1 })
    .then((data) => {res.json(data)})
});
app.get("/product/:id", (req, res) => {
  const { id } = req.params
  Product.find({_id : id}).then((data) => {res.json(data)}).catch(()=>res.json("failed to fetch"))
});
app.get("/photography/:id", (req, res) => {
  const { id } = req.params
  Photography.find({_id : id}).then((data) => {res.json(data)}).catch(()=>res.json("failed to fetch"))
});
app.get("/aiart/:id", (req, res) => {
  const { id } = req.params
  Aiart.find({_id : id}).then((data) => {res.json(data)}).catch(()=>res.json("failed to fetch"))
});
app.get("/digitalart/:id", (req, res) => {
  const { id } = req.params
  Digitalart.find({_id : id}).then((data) => {res.json(data)}).catch(()=>res.json("failed to fetch"))
});


//delete - data
app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/photography/:id", (req, res) => {
  const { id } = req.params;
  Photography.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/aiart/:id", (req, res) => {
  const { id } = req.params;
  Aiart.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/digitalart/:id", (req, res) => {
  const { id } = req.params;
  Digitalart.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/contact/:id", (req, res) => {
  const { id } = req.params;
  Contact.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/feedback/:id", (req, res) => {
  const { id } = req.params;
  Feedback.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});
app.delete("/advertisement/:id", (req, res) => {
  const { id } = req.params;
  Adv.findByIdAndDelete({ _id: id }).then(() => res.send({ status: "ok" }));
});


module.exports = app;