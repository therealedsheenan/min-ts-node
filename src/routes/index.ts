import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

/* GET home page. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { title: "Welcome to min-ts-node.", description: "Minimal typescript + node express implementation\n" });
});

export default router;
