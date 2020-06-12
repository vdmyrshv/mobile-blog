import React, { useReducer } from "react"

const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `blog post #${state.length+1}`}]
        default:
            return state
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPost, dispatch] = useReducer(blogReducer, [])
    console.log(blogPost)

    const addBlogPost = (action) => {
        dispatch({type: 'add_blogpost'})
    }
    
	return (
		<BlogContext.Provider value={{ data: blogPost, addBlogPost}}>
			{children}
		</BlogContext.Provider>
	)
}

export default BlogContext
