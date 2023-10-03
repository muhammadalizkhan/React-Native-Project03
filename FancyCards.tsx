import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.styleText}>Implementation of Communisim</Text>
      <View style={[styles.CardsElevated, styles.Cards]}>
        <Image
          source={{
            uri: 'https://www.blackagendareport.com/sites/default/files/2022-09/marxism%20maga.jpg',
          }}
          style={styles.CardImage}
        />
        <View style={styles.Cardbody}>
          <Text style={styles.CardTitle}>United Social State Republic</Text>
          <Text style={styles.CardLabel}>Russian Fedreation</Text>
          <Text style={styles.CardDetails}>
            Valadmir Lenin is creator of USSR the Revolutioniry Social state
            that implemtn first time Marxisit Ideology with in the Leadeship of
            Lenin
          </Text>
          <Text style={styles.CardFooter}>1921 to 1991 The Fall of USSR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styleText: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  Cards: {
    flex: 1,
    width: 350,
    height: 370,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  CardsElevated: {
    backgroundColor: 'black',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  CardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  Cardbody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  CardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  CardLabel: {
    color: 'white',
    fontSize: 20,
    marginTop: 4,
  },
  CardDetails: {
    marginTop: 8,
    color: 'white',
    fontSize: 15,
  },
  CardFooter: {
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
