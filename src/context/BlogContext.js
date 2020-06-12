import createDataContext from './createDataContext'

import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 100000)
						.toString()
						.padStart(5, 0),
					...action.payload
				}
			]
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

const addBlogPost = dispatch => ({ title, content }, callback) => {
	dispatch({ type: 'add_blogpost', payload: { title, content } })
	callback()
}

const editBlogPost = dispatch => ({ title, content, id }, callback) => {
	dispatch({ type: 'edit_blogpost', payload: { id, title, content } })
	console.log(id, title, content)
	callback()
}

const deleteBlogPost = dispatch => id => {
	dispatch({ type: 'delete_blogpost', payload: id })
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[{ title: 'test post', content: 'this is a post content', id: '1' }]
)
