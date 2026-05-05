import React, { createContext, useState, useContext } from 'react';


const BlogDeleteContext= createContext();


export const useBlogDelete = () => {
  return useContext(BlogDeleteContext);
};

const BlogDeleteProvider = ({children}) => {
   
     const[deletedBlogId, setDeletedBlogId] =useState(null);

     const deleteBlog = (id) => {
      setDeletedBlogId(id);
    };
    
     return (
      <BlogDeleteContext.Provider value={{ deletedBlogId, deleteBlog }}>
        {children}
      </BlogDeleteContext.Provider>
    );
  };
  
  export default BlogDeleteProvider;

  