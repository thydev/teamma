const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = (() => {
    const PlayerSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        name: {
            type: String, 
            required: [true, 'name required'], 
            minlength: [3, 'name must be greater than 3 characters']
        },
        position: {
            type: String
        },
        game1status: {
            type: Number,
            default: 0
        },
        game2status: {
            type: Number,
            default: 0
        },
        game3status: {
            type: Number,
            default: 0
        },
    }, {timestamps: true});
    
    mongoose.model('Player', PlayerSchema);
})();