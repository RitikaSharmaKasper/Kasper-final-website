import React, { createContext, useContext } from 'react';


const BlogContext=createContext();


const BlogProvider = ({children}) => {
  const getSingleBlog= (allblog,blogid)=>{
    console.log("allblog, blogid",allblog,blogid);
    const singleBlog= allblog.find((blog)=>blog.id.toString() ===blogid.toString());
    console.log('singleBlog',singleBlog);
    return singleBlog;
  }
  return (
   <BlogContext.Provider
   value={{  //
    getSingleBlog
   }}
   >
{children}
   </BlogContext.Provider>
  );
};

const useBlogContext=()=> {
    return useContext(BlogContext);
};

export {BlogContext,BlogProvider,useBlogContext};