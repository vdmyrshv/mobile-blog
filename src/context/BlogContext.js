import createDataContext from './createDataContext'

import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'get_blogposts':
			return action.payload
		// add_blogpost removed because this is handled through the json-server now
		// case 'add_blogpost':
		// 	return [
		// 		...state,
		// 		{
		// 			id: Math.floor(Math.random() * 100000)
		// 				.toString()
		// 				.padStart(5, 0),
		// 			...action.payload
		// 		}
		// 	]
		case 'edit_blogpost':
			return state.map(blogPost => {
				return blogPost.id === action.payload.id
					? action.payload
					: blogPost
				// if(blogPost.id === action.payload.id){
				// 	return action.payload
				// } else {
				// 	return blogPost
				// }
			})
		case 'delete_blogpost':
			return state.filter(post => post.id !== action.payload)
		default:
			return state
	}
}

const getBlogPosts = dispatch => async () => {
	const { data } = await jsonServer.get('/blogposts')
	dispatch({ type: 'get_blogposts', payload: data })
}

const addBlogPost = dispatch => async ({ title, content }, callback) => {
	await jsonServer.post('/blogposts', {
		title,
		content
	})
	// dispatch({ type: 'add_blogpost', payload: { title, content } })
	callback()
}

const editBlogPost = dispatch => async ({ title, content, id }, callback) => {
	await jsonServer.put(`/blogposts/${id}`, {
		title,
		content
	})
	dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
	console.log(id, title, content)
	callback()
}

const deleteBlogPost = dispatch => async id => {
	await jsonServer.delete(`/blogposts/${id}`)
	dispatch({ type: 'delete_blogpost', payload: id })
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
)
