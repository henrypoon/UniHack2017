import React from 'react';
import { Text, View } from 'react-native';
import styles from './Userstyle';


export const Carinfo = () => {
  return (
    <View>
        <View style={ styles.messageBox}>
        <Text style={styles.messageBoxTitleText}>Plate Number: YPD640</Text>
        </View>
        <View style={ styles.messageBox}>
        <Text style={styles.messageBoxTitleText}>Manu: Toyota</Text>
        </View>

    </View>
  );
};

export default Carinfo;
