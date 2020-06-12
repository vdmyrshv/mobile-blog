import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title)
	const [content, setContent] = useState(initialValues.content)
	
	console.log(title, content)
    
    return (
		<View>
			<Text style={styles.labelStyle}>Enter Title</Text>
			<TextInput
				style={styles.inputStyle}
				value={title}
				onChangeText={text => setTitle(text)}
			/>
			<Text style={styles.labelStyle}>Enter Content</Text>
			<TextInput
				style={styles.inputStyle}
				value={content}
				onChangeText={content => setContent(content)}
			/>
			<Button onPress={()=> onSubmit(title, content)} title="Save Blog Post" />
		</View>
	)
}

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
}

export default BlogPostForm

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