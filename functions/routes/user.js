const express = require("express");
const { admin, db } = require("../utils/admin");
const firebase = require("../utils/configure");
const axios = require("axios");
const { key2 } = require("../key");
const { GetTotal } = require("../utils/watcher");

exports.dashboard = async (req, res) => {
  try {
    const email = req.body.email;

    await db
      .doc(`users/${email}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let stu = new Array();
          let dat = new Array();
          let number = new Array();
          console.log(doc.data().stock_data);
          doc.data().stock_data.forEach((element) => {
            stu.push(element.ticker);
            dat.push(element.price);
            number.push(element.numbers);
          });
          console.log(stu);
          console.log(dat);
          console.log(number);
          let data = {
            addedAt: doc.data().addedAt,
            email: doc.data().email,
            mobile: doc.data().mobile,
            name: doc.data().name,
            stock_data: doc.data().stock_data,
            profits: GetTotal(dat, stu, number),
          };

          return res.status(200).json(data);
        } else {
          return res.status(400).json({ message: "user doesn't exist" });
        }
      })
      .catch((err) => {
        console.log("Something went wrong");
        console.error(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

exports.deleteuser = async (req, res) => {
  console.log("USer");
};
