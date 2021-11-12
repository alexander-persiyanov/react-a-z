import  { useGetPaginationArr } from '../../../hooks/usePagination';
import cl from './pagination.module.css';

const Pagination = ({totalPage,currentPage,changePage})=>{
   
    const paginationArr = useGetPaginationArr(totalPage);

    return (
        <div className={cl.pagination}>

        {  
            paginationArr.length>0 ?(
            paginationArr.map((p) =>{
               
                return(

                <div 
                    className= { cl.item + ' ' + (  p==currentPage ? cl.active : '' ) } 
                   
                    key={p}
                    onClick={()=>{changePage(p)}}
                    
                    >{p}</div>
                );
            })

        ):''
        
        }
    </div>

    );





}
export default Pagination;