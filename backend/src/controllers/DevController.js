const Dev = require('../model/Dev');
const axios = require('axios');

// INDEX, SHOW, STORE, UPDATE, DELETE

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedUser = await Dev.findById(user);

        const listUsers = await Dev.find({
            $and: [
                { _id: { $ne : user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ],
        });

        return res.json(listUsers);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({user: username});

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    },
};