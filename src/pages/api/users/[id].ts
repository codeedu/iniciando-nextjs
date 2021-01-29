import { NextApiRequest, NextApiResponse } from "next";
import users from "../../../data/users";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  const user = users.find((u) => u.id === +id);
  if (user) {
    res.statusCode = 200;
    res.json(user);
  } else {
    res.statusCode = 404;
    res.json({ error: "User not found" });
  }
};
