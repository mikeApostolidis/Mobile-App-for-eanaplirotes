import React from 'react';
import {  View, Text, StyleSheet, Switch, TouchableOpacity,TextInput  } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

const HomeScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const [selectedValue1, setSelectedValue1] = useState('option1');
    const [selectedValue2, setSelectedValue2] = useState('option2');
    const [selectedValue3, setSelectedValue3] = useState('option3');
    const [selectedValue4, setSelectedValue4] = useState('option4');

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
  };
  const handleButtonPress = () => {
    // Handle button press logic here
    // You can access the selected values using the state variables
  };
 return (
    <View style={styles.container}>
    <HeaderComponent />

      <View style={styles.content}>
      <View style={styles.switchContainer}>
        <Switch 
          trackColor={{ false: 'rgb(8 145 178)', true: 'rgb(8 145 178)' }}
          thumbColor={isEnabled ? 'rgb(8 145 178)' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={styles.text}>{isEnabled ? 'Προσωπική Αναζήτη': 'Γενική αναζήτηση' }</Text>
      </View>

    <View> 
      {isEnabled ? (
          // Render dropdowns when switch is on
         
          <View style={styles.dropdownContainer}>
          <View> 
            <Dropdown style={styles.dropdownInput} placeholder="Αναζητήστε το ονοματεπώνυμο σας" editable={false} />
          </View>

            {/* <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Αναζήτηση</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        ) : (
          // Render single dropdown when switch is off
            <View style={styles.dropdownContainer}>
              <View style={styles.dropdownContainer}>
                <TextInput style={styles.dropdownInput} placeholder="Κλάδος" editable={false} />
              </View>

              <View style={styles.dropdownContainer}>
                <TextInput style={styles.dropdownInput} placeholder="Κλάδος" editable={false} />
              </View>

              <View style={styles.dropdownContainer}>
                <TextInput style={styles.dropdownInput} placeholder="Περιοχή Τοποθέτησης " editable={false} />
              </View>

              <View style={styles.dropdownContainer}>
                <TextInput style={styles.dropdownInput} placeholder="Διεύθυνση Εκπαίδευσης" editable={false} />
              </View>
            </View>
          
        )}
        <TouchableOpacity style={styles.buttonContainer} onPress={handleButtonPress}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Αναζήτηση</Text>
              </View>
            </TouchableOpacity>
          
        </View>
   
    </View>
  </View> 
  ); 

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ecf0f1',
      },
      content: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 15,
        marginBottom: 0,
        color: "rgb(8 145 178)",
      },
      switchContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically in the center
        justifyContent: 'space-between', // Distribute items along the row
        paddingHorizontal: 10, // Add padding for better spacing
      },
      dropdownContainer: {
        borderRadius: 0,
        marginBottom: 10,
        padding: 1,
      },
      dropdownInput: {
        backgroundColor:"#DDDDDD",
        borderWidth: 0.2,
        height: 40,
        padding: 10,
      },
      buttonContainer: {
        alignSelf: 'flex-start',
        marginTop: 20,
        width: '100%',
      },
      button: {
        width: '100%',
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
});

export default HomeScreen;