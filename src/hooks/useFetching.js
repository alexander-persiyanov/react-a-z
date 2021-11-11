import {useState} from 'react';

export const useFetching  = (callback)=>{

    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    const fatching = async()=>{
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError(error.message);
           
        }finally{
            setIsLoading(false);
        }
    }

   return [fatching,isLoading,error];

}




