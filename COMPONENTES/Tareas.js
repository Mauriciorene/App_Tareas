import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Este es el componente Tarea que recibirá el texto y la función de eliminación.
export default function Tareas({ tarea, eliminarTarea }) {
  return (
    <View style={styles.tareaContainer}>
      <Text style={styles.tareaText}>{tarea.texto}</Text>
      <TouchableOpacity onPress={() => eliminarTarea(tarea.id)}>
        <Text style={styles.botonEliminar}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tareaContainer: {
    backgroundColor: '#D1E8E2',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tareaText: {
    fontSize: 16,
    color: '#333',
  },
  botonEliminar: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight: 'bold',
  },
});
