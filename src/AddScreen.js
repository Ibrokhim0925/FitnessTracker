import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

export default function AddScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');

  const handleSave = () => {
    if (!title || !reps) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    navigation.navigate('Home', { newWorkout: { title, reps } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exercise Name</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g. Squats" />
      
      <Text style={styles.label}>Reps / Sets</Text>
      <TextInput style={styles.input} value={reps} onChangeText={setReps} placeholder="e.g. 3x10" />
      
      <Button title="Save Workout" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 },
});