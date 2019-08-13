const Dev = require('../model/Dev');

module.exports = {
    async store (req,res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const receiverUser = await Dev.findById(devId);
        const loggedUser = await Dev.findById(user);

        if (!receiverUser) {
            return res.status(400).json({ error: 'Dev não existe'});
        }

        if (receiverUser.likes.includes(loggedUser._id)) {
            console.log('MATCH');
        }

        loggedUser.likes.push(receiverUser._id);

        await loggedUser.save();

        return res.json(loggedUser);
    }
};