import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import Constants from "expo-constants";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.headers}>
      <AntDesign style={styles.leftarrow} name="arrowleft" size={24} color="black" />
      <Entypo style={styles.doticon} name="dots-two-vertical" size={24} color="black" />
      </View>
      
      <View style={styles.information}>
        <View>
          <Image style={styles.avatar} source={require('./assets/5.jpg')} />
        </View>
        <View style={styles.subinfo}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Name</Text>
          <Text style={{fontSize: 15}}>Job</Text>
          <View style={styles.button}>
            <TouchableOpacity style={styles.designbutton}>
              <Text style={styles.buttonA}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="send" size={20} color="black" style={styles.buttonB} />
            </TouchableOpacity>
          </View>
        </View>

      </View>
      <View style={styles.statistics}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>210</Text>
          <Text>Photos</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>15K</Text>
          <Text>Followers</Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>605</Text>
          <Text>Folowing</Text>
        </View>
      </View>

      <View style={styles.images}>
        <Image style={{ width: 100, height: 100, margin: 10 }} source={require('./assets/1.jpg')} />
        <Image style={{ width: 100, height: 100, margin: 10 }} source={require('./assets/2.jpg')} />
        <Image style={{ width: 100, height: 100, margin: 10 }} source={require('./assets/3.jpg')} />
        <Image style={{ width: 100, height: 100, margin: 10 }} source={require('./assets/4.png')} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
  headers: {
    flex: 0.1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  information: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  statistics: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  images: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    alignContent: 'flex-start',
    flexWrap: 'wrap',
  },
  avatar: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100/2,
    marginRight: 40,
  },
  subinfo: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
  },
  designbutton:{
    marginRight: 50
  },
  buttonA: {
    height:40,
    width:"150%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    textAlign: 'center'
  },
  buttonB: {
    height:40,
    width:"120%",
    backgroundColor:"white",
    borderRadius:15,
    padding:10,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    textAlign: 'center',
  }
});
