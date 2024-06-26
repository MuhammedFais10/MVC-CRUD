const Name = require("../model/userModel");

const renderHome = (req, res) => {
  Name.find().then((users) => {
    res.render("home", { users: users });
  });
};

const addName = (req, res) => {
  newName = new Name({
    name: req.body.name,
  });

  newName.save().then((result) => {
    res.redirect("/");
  });
};

const deleteName = (req, res) => {
  Name.findByIdAndDelete(req.body.id).then((result) => {
    res.redirect("/");
  });
  // .catch((err) => {
  //   console.log(err);
  //   res.json(err);
  // });
};

const getEdit = (req, res) => {
  Name.findById(req.params.id).then((user) => {
    res.render("edit", { user: user });
  });
};

const postEdit = (req, res) => {
  Name.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { postEdit, getEdit, addName, renderHome, deleteName };
