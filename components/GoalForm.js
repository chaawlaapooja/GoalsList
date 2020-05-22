import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Modal} from 'react-native'

const GoalForm = (props) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const handleInputChange = enteredGoal => {
	    setEnteredGoal(enteredGoal)
	}
	const handleAddGoal = () => {
		props.handleAddGoal(enteredGoal)
		setEnteredGoal('')
	}
	return(
		<Modal visible={props.isModalOpen}>
		<View style={styles.inputContainer}>
	        <TextInput placeholder="Add Goal..." style={styles.input} onChangeText={handleInputChange} value={enteredGoal} autoFocus/>
	        <View style={styles.buttonContainer}>
	        	<Button title="Cancel" color="red" onPress={props.handleCancelEvent}/>
	        	<Button title="Add" style={styles.button} onPress={handleAddGoal}/>
	    	</View>
	    </View>
	    </Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer:{
		flex:1,
	    justifyContent:'center',
	    alignItems:'center'
	},
	input :{
	    marginBottom:10,
	    borderBottomColor:'black',
	    borderBottomWidth:1,
	    width:'80%',
	    padding:10
	},
	button:{
	    width:'40%'
	},
	buttonContainer:{
		width:'60%',
		flexDirection:'row',
		justifyContent:'space-between'
	}
})

export default GoalForm