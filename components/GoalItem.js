import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
	return(
		<TouchableOpacity activeOpacity={0.6} onPress={props.removeGoal.bind(this,props.id)}>
		<View style={styles.goalItem}>
			<Text>{props.value}</Text>
		</View>
		</TouchableOpacity>
	)
}
const styles = StyleSheet.create({
	goalItem:{
	    padding:10,
	    marginVertical:10,
	    backgroundColor:'#dcdcdc',
	    borderColor:'black',
	    borderWidth:1
  	}
})
export default GoalItem;
