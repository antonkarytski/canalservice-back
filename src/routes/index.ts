import express from "express";
const router = express.Router();

router.get("/", function (req: any, res: any, next: any) {
  console.log(res);
  res.render("index", { title: "HOHO" });
});

export default router;
