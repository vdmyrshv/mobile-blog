import React, { useContext } from "react"
import { StyleSheet } from "react-native"

import { Context as BlogContext } from "../context/BlogContext"

import BlogPostForm from "../components/BlogPostForm"

const CreateScreen = ({ navigation }) => {

	const { addBlogPost } = useContext(BlogContext)

	const onSubmit = (title, content) => {
		addBlogPost({title, content}, ()=> navigation.navigate('Index'))
	}

	return <BlogPostForm onSubmit={onSubmit} />
}

export default CreateScreen

const styles = StyleSheet.create({
	inputStyle: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: "darkcyan",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 2,
		marginLeft: 5
	},
	labelStyle: {
		fontSize: 24,
		color: "orangered",
		marginVertical: 10,
		marginLeft: 5
	}
})
