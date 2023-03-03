const User = require('../models/userDetailsSchema')

const getAllUser = async () => {
    let get = await User.find({ "is_active": true })

    if (!get) return 0

    return get
}
const delUser = async (id) => {
    const checkUser = await User.exists({ _id: id });
    if (!checkUser) return 0
    let user = await User.findOneAndUpdate({ _id: id }, { is_active: false })
    return user
}
const editDetails = async (id, name, email, phone, website) => {

    const data = {
        name: name,
        email: email,
        phone: phone,
        website: website
    }
    const checkUser = await User.exists({ _id: id })
    if (!checkUser) return 0

    let details = await User.findOneAndUpdate({ _id: id }, data)
    if (!details) return 1
    return details
}

const likePost = async (id) => {
    const findUser = await User.findOne({ _id: id })

    if (findUser.is_liked === false ) {
        await User.findByIdAndUpdate(id ,{ is_liked: true })
        return 0
    }
    else if (findUser.is_liked === true) {
        await User.findByIdAndUpdate(  id ,{ is_liked: false })
        return 1
    }
    else {
        return 2
    }

}

module.exports = {
    getAllUser,
    delUser,
    editDetails,
    likePost,
}