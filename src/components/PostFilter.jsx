import{ React} from 'react';
import MySelect from './UI/mySelect/mySelect';
import MyInput from './UI/input/MyInputComponent';


const PostFilter = ({filter,setFilter})=>{
   
    return(
       <div>
            <MySelect 
                value={filter.sort}
                defaultValue="Sort to" 
                onChange={selectedSort => { setFilter({...filter,sort:selectedSort});}}
                options={[
                    {name:"title",value:"title"},
                    {name:"body",value:"body"}
                ]}
            />
                
                
                <br/>
                <hr/>
                <br/>
                
            <MyInput
                type="text" 
                value={filter.query} 
                onChange={(e)=>{ setFilter({...filter,query:e.target.value}) } }
                placeholder="Search by title "
            />

       </div>

    );

}; 
export default PostFilter;