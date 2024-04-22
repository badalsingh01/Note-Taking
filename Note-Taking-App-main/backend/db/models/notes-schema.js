const mongoose=require('../connection');
const SchemaTypes=require('mongoose');
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    'note': {
        type: String
    }
});
const noteModel = mongoose.model('note', noteSchema);
module.exports=noteModel;