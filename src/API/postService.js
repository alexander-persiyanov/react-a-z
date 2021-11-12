import axios from 'axios';

export default class PostService {

    static async getAll(limit=10,page=1){
        
       
        const response = await axios(`https://jsonplaceholder.typicode.com/posts`,{
            params:{
                _page:page,
                _limit: limit,
               
            }

        });
            return response;
        
        
    }
    static async getById(id){
        
        const response = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
        
        
    }
    static async getCommentsById(id){
        
        const response = await axios(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        return response;
        
        
    }
}