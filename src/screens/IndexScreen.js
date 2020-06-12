import React, { useContext } from "react"
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	InputText,
	Button,
	TouchableOpacity
} from "react-native"

import { EvilIcons, Feather } from "@expo/vector-icons"

import { Context as BlogContext } from "../context/BlogContext" //when importing using ES6 import, aliasing is with 'as' keyword, not destructuring colon

const IndexScreen = ({ navigation: { navigate } }) => {
	const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

	const handleDelete = (id) => {
		deleteBlogPost(id)
	}

	const handleNavigation = (id) => {
		navigate("Show", { id })
	}

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(post) => post.id}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handleNavigation(item.id)}>
						<View style={styles.blogItemStyle}>
								<Text style={styles.titleStyle}>{item.title}</Text>
								<Text style={styles.titleStyle}>{item.id}</Text>
							<TouchableOpacity onPress={() => handleDelete(item.id)}>
								<EvilIcons name="trash" size={24} color="black" />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

IndexScreen.navigationOptions = ({navigation}) => ({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  })

export default IndexScreen

const styles = StyleSheet.create({
	blogItemStyle: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderColor: "grey",
		paddingLeft: 10
	},
	titleStyle: {
		fontSize: 18
	}
})
