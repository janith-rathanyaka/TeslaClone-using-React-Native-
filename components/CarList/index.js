import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions } from 'react-native';

import CarItem from "../Caritem";
import styles from './styles';
import cars from './cars'
const CarsList  = (props) =>{
  
    return(
        <View style={styles.container}>
          <FlatList  
            data={cars}
            renderItem={({item}) => <CarItem car={item}  />}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
          />
        </View>
    );
};
export default CarsList; 