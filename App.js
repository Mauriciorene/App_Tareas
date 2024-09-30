import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import uuid from 'react-native-uuid';
import Tareas from './COMPONENTES/Tareas';

export default function App() {
  const [tarea, setTarea] = useState('');
  const [listaTareas, setListaTareas] = useState([]);

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (tarea.trim() !== '') {
      setListaTareas((prevTareas) => [
        ...prevTareas,
        { id: uuid.v4(), texto: tarea, completada: false }, // Añadimos completada: false
      ]);
      setTarea(''); // Limpiar el campo de texto después de agregar
    }
  };

  // Función para eliminar una tarea por su ID
  const eliminarTarea = (id) => {
    setListaTareas((prevTareas) => prevTareas.filter((tarea) => tarea.id !== id));
  };

  // Función para marcar una tarea como completada o desmarcarla
  const completarTarea = (id) => {
    setListaTareas((prevTareas) =>
      prevTareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Aplicación de Tareas</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingresa una tarea"
          value={tarea}
          onChangeText={setTarea}
        />
        <Button title="Add Tarea" onPress={agregarTarea} color="#8A2BE2" />
      </View>

      <FlatList
        data={listaTareas}
        renderItem={({ item }) => (
          <Tareas
            tarea={item}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#8A2BE2',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
});
