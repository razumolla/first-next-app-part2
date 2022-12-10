import { users } from "../../../users";

export default function handler(req, res) {
    const { userId } = req.query;


    if (req.method === "GET") {
        // Dynamic Route 
        console.log(userId);
        const user = users.find(user => user.id == parseInt(userId));
        res.status(200).json(user);
    } else if (req.method === "DELETE") {
        const deletedUser = users.find(user => user.id == parseInt(userId));
        const index = users.findIndex(user => user.id == parseInt(userId));

        users.splice(index, 1)

        res.status(200).json(deletedUser);
    }

};
