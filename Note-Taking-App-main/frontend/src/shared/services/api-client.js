import axios from 'axios';
export const apiClient = {
    get(URL){
        axios.get('http://localhost:4444/getNote')
        .then((res)=>{
        //   console.log(res.data);
          const arr=res.data;
          return arr;
        })
        .catch((err)=>{
          console.log(err);
        })
    },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
            return response;
        }
        catch(err){
            throw err;
        }
    }
}