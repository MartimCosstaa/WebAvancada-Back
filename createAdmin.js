const mongoose = require("mongoose");
const Users = require("./data/users/users");
const config = require("./config");
const bcrypt = require("bcrypt");

async function createAdmin() {
  try {
    await mongoose.connect(config.db);

    const existingAdmin = await Users.findOne({ name: "admin" });

    if (existingAdmin) {
      console.log("Admin já existe!");
      return;
    }

    const password = await bcrypt.hash("Admin123!", config.saltRounds);

    const admin = new Users({
      name: "admin",
      email: "admin@discnotfound.com",
      password,
      role: {
        name: "Admin",
        scope: ["admin"]
      },
      age: 20,
      address: "Portugal",
      country: "Portugal"
    });

    await admin.save();

    console.log("Admin criado com sucesso!");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

createAdmin();