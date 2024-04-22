const noteModel=require('../db/models/notes-schema');
const noteController={
    async addNote(request,response){
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
    }
}

module.exports=noteController;