import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Component: HomeScreen
// Purpose: Show a list of workouts.
// 1. Initialize state 'workouts' with dummy data.
// 2. Use useEffect to listen for new params from navigation (route.params?.newWorkout).
// 3. Render a FlatList of workouts.
// 4. Add a button to navigate to 'Add Workout'.

export default function HomeScreen({ navigation, route }) {
  const [workouts, setWorkouts] = useState([
    { id: '1', title: 'Morning Run', reps: '5 miles' },
    { id: '2', title: 'Push Ups', reps: '50 reps' },
  ]);

  useEffect(() => {
    if (route.params?.newWorkout) {
      setWorkouts((prev) => [
        ...prev,
        { id: Date.now().toString(), ...route.params.newWorkout }
      ]);
    }
  }, [route.params?.newWorkout]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Workout Log</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.reps}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Add Workout')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSubtitle: { color: 'gray' },
  fab: {
    position: 'absolute', bottom: 30, right: 30,
    backgroundColor: 'blue', width: 60, height: 60, borderRadius: 30,
    justifyContent: 'center', alignItems: 'center',
  },
  fabText: { color: 'white', fontSize: 30 },
});