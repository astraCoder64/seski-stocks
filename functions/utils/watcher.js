const { s } = require("../utils/needed_values");
const { admin, db } = require("../utils/admin");
const firebase = require("../utils/configure");
const axios = require("axios");
const { key, key2 } = require("../key");
exports.watcher = async () => {
  try {
    for (let i of s) {
      const r = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${i}&token=${key}`
      );
      const curr = r.data.c;
      console.log(curr);

      await db
        .collection("stocks")
        .doc(`${i}`)
        .get()
        .then((doc) => {
          doc.data().Investors.forEach((element) => {
            let percent = (curr - element.price) / element.price;

            console.log(percent);
            if (percent >= element.max_profit) {
              console.log(`The profit percent is reached by ${element.Email}`);
            } else if (percent <= element.loss) {
              console.log(
                `The stock price is below the loss percent of ${element.Email}`
              );
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.GetTotal = async (dat, set, number) => {
  try {
    let sum = 0;
    let index = 0;
    for (let i of set) {
      const r = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${i}&token=${key2}`
      );
      const curr = r.data.c;
      console.log(curr);
      sum = sum + (curr - parseFloat(dat[index])) * parseInt(number[index]);
      index++;
    }

    return sum;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
