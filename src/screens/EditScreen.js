import React, { useContext } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

import { Context as BlogContext } from "../context/BlogContext"

import BlogPostForm from "../components/BlogPostForm"

const EditScreen = ({ navigation }) => {
	const { state, editBlogPost } = useContext(BlogContext)
	const id = navigation.getParam("id")

	const blogPost = state.find((blog) => blog.id === id)

	return (
		<BlogPostForm
			onSubmit={(title, content) =>
				editBlogPost(
					{
						id,
						title,
						content
					},
					() => navigation.pop()
				)
			}
			initialValues={{
				title: blogPost.title,
				content: blogPost.content
			}}
		/>
	)
}

export default EditScreen

const styles = StyleSheet.create({})
