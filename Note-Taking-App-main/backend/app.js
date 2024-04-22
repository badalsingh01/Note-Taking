const express=require('express');
const noteModel=require('./db/models/notes-schema');
const {noteController}=require('./controllers/note-controller');
const PORT=4444;
const cors=require('cors');
const bodyParser=require('body-parser');
const path=require('path');
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/addNote', async (request,response)=>{
    const noteInfo=request.body;
    try{
        const doc=await noteModel.create(noteInfo);
        if(doc && doc._id){
            response.json({message:'Note Added SuccessFully'});
        }
        else{
            response.json({message:'Problem in note adding'});
        }
    }
    catch(err){
        console.log('Note Adding Err ', err);
        response.json({message:'Problem in note adding'});
    }
});
app.get('/getNote',async (request,response)=>{
    try{
        const doc=await noteModel.find({}).exec();
        // console.log("Doc is",doc);
        response.send(doc);
    }
    catch(err){
        console.log("Error in getting all notes....",err);
    }
})
app.use((request, response, next)=>{
    response.json({message:'Invalid URL'});
})
app.listen(PORT,()=>{
    console.log('https://localhost:'+PORT);
})