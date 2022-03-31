import Router from "express";

const cloudRouter = new Router();

cloudRouter.get("/", async (req, res) => {
  const result = await function () {
    let randomNum = Math.floor(Math.random() * 100);
    return `<h1 style="margin: 0 auto; width:5%">${randomNum}</h1>`;
  };

  return res.send(result());
});

export default cloudRouter;
