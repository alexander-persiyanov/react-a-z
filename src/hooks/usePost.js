import {React,useMemo} from 'react';

export const useSortedPosts  = (posts,sort)=>{

    const sortedPosts =  useMemo (()=>{ 
        console.log("getSortedPosts is done");
        if(sort){
          return [...posts].sort((a,b)=>{ return a[sort].localeCompare(b[sort]); });
        }else{
          return posts;
        }
     },[sort,posts] );

     return sortedPosts;

}

export const usePosts  = (posts,sort,query)=>{

    const sortedPosts = useSortedPosts(posts,sort);
    const sortedAndSearchedPosts = useMemo(()=>{
        console.log("sortedAndSearchedPosts");
        if(query){
         return sortedPosts.filter(post=> post.title.toUpperCase().includes(query.toUpperCase()));
        }else{
         return sortedPosts;
        }
        
      },
      [query,sortedPosts]);
      
      return sortedAndSearchedPosts;
}


