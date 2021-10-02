const { admin, db } = require("../utils/admin");
const firebase = require("../utils/configure");
const { isValidStocks } = require("../utils/validators");
const { s } = require("../utils/needed_values");

const Addthedata = (email, ticker) => {
  db.collection("users")
    .doc(`${JSON.parse(email)}`)
    .update({
      stock_data: admin.firestore.FieldValue.arrayUnion(ticker),
    })
    .then((res) => {
      console.log("Added stock data to user");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getstocks = async (req, res) => {
  try {
    let stocks = req.body.stocks;

    const email = JSON.stringify(req.headers.email);

    const { valid, errors } = isValidStocks(stocks, email);

    if (!valid) {
      return res.status(400).json(errors);
    } else {
      await stocks.forEach((item) => {
        console.log(item.ticker);

        if (item.loss === "") {
          item.loss = -1;
        }
        if (item.max_profit === "") {
          item.max_profit = 1.2;
        }
        if (item.numbers === "") {
          item.numbers = 1;
        }
        console.log(item.loss);
        console.log(item.max_profit);
        console.log(item.price);
        console.log(item.numbers);

        let data = {
          Email: email,
          max_profit: parseFloat(item.max_profit),
          loss: parseFloat(item.loss),
          price: parseFloat(item.price),
        };

        console.log(data);

        db.collection("stocks")
          .doc(`${item.ticker}`)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return db
                .collection("stocks")
                .doc(`${item.ticker}`)
                .update({
                  Investors: admin.firestore.FieldValue.arrayUnion(data),
                });
            } else {
              return db
                .collection("stocks")
                .doc(`${item.ticker}`)
                .set({ Investors: [data] });
            }
          })
          .then((res) => {
            s.add(item.ticker);
            console.log(s);
            Addthedata(email, item);
          })
          .then((res) => {
            console.log("Added succesfully in console");
          })
          .catch((err) => {
            console.log(err);
          });
      });

      return res.status(200).send("Added succesfully");
    }
  } catch (err) {
    console.log(`Bad request : ${err}`);
    return res.status(400).send(`Bad request: ${err}`);
  }
};

exports.deletestocks = async (req, res) => {
  try {
    let stocks = req.body.stocks;

    const email = JSON.stringify(req.headers.email);

    await db
      .collection("users")
      .doc(`${JSON.parse(email)}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());

          stocks.forEach((item) => {
            doc.data().stock_data.forEach((element) => {
              if (element.ticker == item.ticker) {
                let data = {
                  ticker: element.ticker,
                  max_profit: element.max_profit,
                  loss: element.loss,
                  price: element.price,
                  numbers: element.numbers,
                };
                let investor_data = {
                  Email: email,
                  max_profit: parseFloat(element.max_profit),
                  loss: parseFloat(element.loss),
                  price: parseFloat(element.price),
                };

                db.collection("users")
                  .doc(`${JSON.parse(email)}`)
                  .update({
                    stock_data: admin.firestore.FieldValue.arrayRemove(data),
                  })
                  .then((res) => {
                    console.log(`Removed stock ${item.ticker}`);
                    console.log(investor_data);
                    db.collection("stocks")
                      .doc(`${item.ticker}`)
                      .update({
                        Investors:
                          admin.firestore.FieldValue.arrayRemove(investor_data),
                      })
                      .then((re) => {
                        console.log("Changed in stock as well");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    return res.status(400).send("Something happened");
                  });
              }
            });
          });
        }
      })
      .then((re) => {
        return res.status(200).send("Deleted success");
      })
      .catch((err) => {
        console.log("Internal error");
        console.log(err);
        return res.status(500).send("Internal error");
      });
  } catch (err) {
    console.log(err);
  }
};

exports.updatestocks = async (req, res) => {
  try {
    let stocks = req.body.stocks;

    const email = JSON.stringify(req.headers.email);

    const { valid, errors } = isValidStocks(stocks, email);

    if (!valid) {
      return res.status(400).json(errors);
    } else {
      await db
        .collection("users")
        .doc(`${JSON.parse(email)}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log(doc.data());

            stocks.forEach((item) => {
              doc.data().stock_data.forEach((element) => {
                if (element.ticker == item.ticker) {
                  let data = {
                    ticker: element.ticker,
                    max_profit: element.max_profit,
                    loss: element.loss,
                    price: element.price,
                  };
                  let investor_data = {
                    Email: email,
                    max_profit: parseFloat(element.max_profit),
                    loss: parseFloat(element.loss),
                    price: parseFloat(element.price),
                  };
                  if (item.max_profit == "") {
                    item.max_profit = element.max_profit;
                  }
                  if (item.loss == "") {
                    item.loss = element.loss;
                  }
                  if (item.price == "") {
                    item.price == element.price;
                  }
                  if (item.numbers == "") {
                    item.numbers = element.numbers;
                  }

                  let newuser = {
                    Email: email,
                    max_profit: parseFloat(item.max_profit),
                    loss: parseFloat(item.loss),
                    price: parseFloat(item.price),
                  };

                  let new_data = {
                    ticker: item.ticker,
                    max_profit: item.max_profit,
                    loss: item.loss,
                    price: item.price,
                    numbers: item.numbers,
                  };

                  db.collection("users")
                    .doc(`${JSON.parse(email)}`)
                    .update({
                      stock_data: admin.firestore.FieldValue.arrayRemove(data),
                    })
                    .then((res) => {
                      console.log(`Removed stock ${item.ticker}`);
                      console.log(investor_data);
                      db.collection("stocks")
                        .doc(`${item.ticker}`)
                        .update({
                          Investors:
                            admin.firestore.FieldValue.arrayRemove(
                              investor_data
                            ),
                        })
                        .then((re) => {
                          console.log("Changed in stock as well");
                          db.collection("users")
                            .doc(`${JSON.parse(email)}`)
                            .update({
                              stock_data:
                                admin.firestore.FieldValue.arrayUnion(new_data),
                            });
                        })
                        .then((re) => {
                          console.log("Changed in users");
                          db.collection("stocks")
                            .doc(`${item.ticker}`)
                            .update({
                              Investors:
                                admin.firestore.FieldValue.arrayUnion(newuser),
                            });
                        })
                        .then((re) => {
                          console.log("Changed in stocks as well");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                      return res.status(400).send("Something happened");
                    });
                }
              });
            });
          }
        })
        .then((re) => {
          return res.status(200).send("Deleted success");
        })
        .catch((err) => {
          console.log("Internal error");
          console.log(err);
          return res.status(500).send("Internal error");
        });
    }
  } catch (err) {
    console.log(err);
  }
};
