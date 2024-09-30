import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente que recibe la tarea, eliminarTarea y completarTarea como props
export default function Tareas({ tarea, eliminarTarea, completarTarea }) {
  return (
    <TouchableOpacity onPress={() => completarTarea(tarea.id)}>
      <View style={styles.tareaContainer}>
        {/* Aplicar estilo condicional si la tarea está completada */}
        <Text style={[styles.tareaText, tarea.completada && styles.tareaCompletada]}>
          {tarea.texto}
        </Text>
        <TouchableOpacity onPress={() => eliminarTarea(tarea.id)}>
          <Text style={styles.botonEliminar}>X</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
  // Estilo para las tareas completadas (tachadas)
  tareaCompletada: {
    textDecorationLine: 'line-through',
    color: '#888',  // Cambia el color para mostrarla como desactivada
  },
  botonEliminar: {
    fontSize: 20,
    color: '#ff0000',
    fontWeight: 'bold',
  },
});
