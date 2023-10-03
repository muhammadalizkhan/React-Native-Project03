import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() : JSX.Element {
  return (
    <View>
      <Text style = {styles.styleText} >Marxist</Text>
        <View style = {styles.Contanier} >
        <View style = {[styles.Contanier, styles.Cards, styles.CardOne]}>
            <Text>Blue</Text>
        </View>
        <View style = {[styles.Contanier, styles.Cards, styles.CardTwo]}>
            <Text>Red</Text>
        </View>
        <View style = {[styles.Contanier, styles.Cards, styles.CardThree]}>
            <Text>Green</Text>
        </View>
        </View>
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
        flex: 1,
        flexDirection: 'row',
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
    CardOne:{
        backgroundColor: 'black',
    },
    CardTwo:{
        backgroundColor: 'blue',
    },
    CardThree:{
        backgroundColor: 'green',
    },
});
