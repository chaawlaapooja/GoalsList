import React,{useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalForm from './components/GoalForm';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isModalOpen, setModalOpen]=useState(false)
  const [goalList, setGoalList]=useState([])
  
  const handleAddGoal = enteredGoal => {
    setGoalList(courseGoals=>[...courseGoals,{key:Math.random().toString().slice(-5), value:enteredGoal}])
    setModalOpen(false)
  }
  const handleCancelEvent = () => {
    setModalOpen(false)
  }
  const removeGoal = (id) =>{
    setGoalList(goalList.filter(goal=>goal.key!==id))
  }
  return (
    <View style={styles.screen}>
      <Button title="+ Add Goal" onPress={()=>setModalOpen(true)}/>
      <GoalForm handleCancelEvent={handleCancelEvent} isModalOpen={isModalOpen} handleAddGoal={handleAddGoal}/>
      <FlatList data={goalList} renderItem={itemData=>
        <GoalItem id={itemData.item.key}  value={itemData.item.value} removeGoal={removeGoal}/>
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen :{
    padding:50
  }
});
