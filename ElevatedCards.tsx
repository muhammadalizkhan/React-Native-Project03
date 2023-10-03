import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.styleText} >Leninism</Text>
      <ScrollView horizontal = {true} style = {styles.Contanier} >
        <View style = {[styles.Cards, styles.CardsElevated]} >
            <Text>Tap</Text>
        </View>
        <View style = {[styles.Cards, styles.CardsElevated]} >
            <Text>Me</Text>
        </View>
        <View style = {[styles.Cards, styles.CardsElevated]} >
            <Text>To</Text>
        </View>
        <View style = {[styles.Cards, styles.CardsElevated]} >
            <Text>Scroll</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    styleText:{
        fontSize: 20,
        padding: 8,
        fontWeight: 'bold',
    },
    Contanier:{
    padding: 8,
    },
    Cards:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        margin: 8,
        backgroundColor: 'red',
        borderRadius: 8,
    },
    CardsElevated:{
        backgroundColor: '#F4F4',
    },
});
