import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

export default function AddScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');

  const handleSave = () => {
    // Validation: Ensure the user typed something
    if (!title || !reps) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    // Pass the new data back to the Home Screen
    navigation.navigate('Home', {
      newWorkout: { title, reps }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Exercise Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. Bench Press"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Reps / Duration</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. 3 sets of 10"
        value={reps}
        onChangeText={setReps}
      />

      <Button title="Save Workout" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, marginBottom: 5, fontWeight: 'bold' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
});