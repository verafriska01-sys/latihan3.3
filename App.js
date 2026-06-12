import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const fruits = [
  { id: '1', name: 'Apel' },
  { id: '2', name: 'Jeruk' },
  { id: '3', name: 'Mangga' },
  { id: '4', name: 'Pisang' },
  { id: '5', name: 'Semangka' },
  { id: '6', name: 'Melon' },
  { id: '7', name: 'Nanas' },
  { id: '8', name: 'Anggur' },
  { id: '9', name: 'Pepaya' },
  { id: '10', name: 'Jambu' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Buah</Text>

      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});