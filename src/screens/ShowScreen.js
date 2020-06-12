import React, { useContext } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import { Context as BlogContext } from "../context/BlogContext"

import { Entypo } from "@expo/vector-icons"

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(BlogContext)
	const blogPost = state.find((blog) => blog.id === navigation.getParam("id"))
	return (
		<View>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	)
}

ShowScreen.navigationOptions = ({ navigation }) => ({
	headerRight: () => (
		<TouchableOpacity onPress={() => navigation.navigate("Edit", {id: navigation.getParam('id')})}>
			<Entypo name="edit" size={24} color="black" />
		</TouchableOpacity>
	)
})

export default ShowScreen

const styles = StyleSheet.create({})
