import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const Proveedor= () => {

  return (
    <View style={styles.container}>

      {/* Título inicial "Proovedores" */}
      <Text style={styles.titulo}>Proveedores</Text>
      
      {/*  */}
      <View style={styles.cuadro}>
        <View style={styles.iconContainer}>
          <View style={styles.iconoUsuario}>
            <Image
              source={require('./assets/icono-us.png')}
              style={styles.imagenUsuario}
            />
          </View>
        </View>

        {/* Información del proovedor */}
        <View style={styles.separacionInfoCuadro}>
          <Text style={styles.nombre}>Fernando Caribán</Text>
          <Text style={styles.descripcion}>Herramientas de construcción</Text>
          <Text style={styles.descripcion}>KNIPEX</Text>
          <Text style={styles.descripcion}>Tel: 351 356 12 02</Text>

        </View>

        {/* Botón y función de llamada */}
        <TouchableOpacity style={styles.botonLlamada} onPress={() => Linking.openURL('tel:3513561202')}>
          <Image
            source={require('./assets/icono-llamada.png')} 
            style={styles.iconoLlamada}
          />
        </TouchableOpacity>
      </View>
      
    </View>
  );
};


{/* Elementos de diseño */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 20,
  },
  cuadro: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconoUsuario: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f39c12', // Gradiente (simulado como color base)
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenUsuario: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  separacionInfoCuadro: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 10,
    fontWeight: '600',
  },
  botonLlamada: {
    backgroundColor: '#3498db',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconoLlamada: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default Proveedor;

