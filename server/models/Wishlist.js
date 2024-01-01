const mongoose = require('mongoose');

const whishlistSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true},
    place: {type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true},
})

const WishlistModel = mongoose.model('Wishlist', whishlistSchema)

module.exports = WishlistModel;