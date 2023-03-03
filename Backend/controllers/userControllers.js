const { getAllUser, delUser, editDetails, likePost } = require('../services/userServices')

const getaAll = async (req, res) => {
    try {
        let user = await getAllUser()
        switch (user) {
            case 0: return res.status(404).json({ status: "ERROR", message: "Something went wrong" })
            default: return res.status(200).send({ user: user })
        }
    }
    catch (e) {
        res.send(e.message)
    }
}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.query
        let user = await delUser(id)
        switch (user) {
            case 0: return res.status(404).json({ status: "ERROR", message: "User not found" })
            default: return res.status(200).send({ status: "SUCCESS", message: "User deleted Successfully!", user })
        }
    }
    catch (e) {
        res.send(e.message)
    }
}
const editUser = async (req, res) => {
    try {
        const { id, name, email, phone, website } = req.body
        let user = await editDetails(id, name, email, phone, website)
        switch (user) {
            case 0: return res.status(404).json({ status: "ERROR", message: "User not found" })
            default: return res.status(200).send({ status: "SUCCESS", message: "User edited Successfully!", })
        }
    }
    catch (e) {
        res.send(e.message)
    }
}
const likeDetails = async (req, res) => {
    try {
        const { id } = req.query
        const data = await likePost(id)
        switch (data) {
            case 0: return res.status(200).json({ status: "SUCCESS", message: "Liked" })
            case 1: return res.status(200).json({ status: "SUCCESS", message: "dis liked" })
            case 2: return res.status(401).json({ status: "ERROR", message: "Something went wrong" })
        }
    }
    catch (e) {
        res.send(e.message)
    }
}

module.exports = {
    getaAll,
    deleteUser,
    editUser,
    likeDetails
}