import express from "express";
import { Signale } from "signale";

import { transformerRouter } from "./transformer/infrastructure/TransformerRouter";
import { userRouter } from "./user/infrestructure/UserRouter";

const app = express();
app.disable("x-powered-by");

const signale = new Signale();

app.use(express.json());
app.use("/transformer", transformerRouter);

app.use("/users", userRouter);

app.listen(3000, () => {
  signale.success("Server online in port 3000");
});
