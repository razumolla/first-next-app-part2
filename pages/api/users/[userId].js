import { users } from "../../../users";

export default function handler(req, res) {
    const { userId } = req.query;
    console.log(userId);
    const user = users.find(user => user.id == parseInt(userId));
    res.status(200).json(user);
};
