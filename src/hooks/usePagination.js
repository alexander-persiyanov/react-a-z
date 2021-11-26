import { useMemo } from "react"

export const useGetPaginationArr = (totalPage)=>{
      
     const arr = useMemo(()=>{
        let arr = [];
        if(totalPage>0){
            for(let i = 1; i<=totalPage; i++){
                arr.push(i);
            }
            return arr;
        }else{
            return arr = [];
        }
      
       
       
       
    },[totalPage]);
    return arr;

}