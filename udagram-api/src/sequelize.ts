import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: "postgres",
  password: "Hamed123456",
  database: "postgres",
  host: "database-1.c1uyovs50ahm.us-west-2.rds.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  storage: ":memory:",
});
