import { users } from './../../../users'

export default function handler(req, res) {
    res.status(200).json(users)
}