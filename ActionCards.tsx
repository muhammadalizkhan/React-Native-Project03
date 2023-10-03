import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.StyleText}>Socialist</Text>
      <View style={[styles.Cards, styles.CardsEvelator]}>
        <View style={styles.HeadingContainer}>
          <Text style={styles.HeaderText}>What's the Socialist State</Text>
        </View>
        <Image
          source={{

            uri: 'https://www.blackagendareport.com/sites/default/files/2022-09/marxism%20maga.jpg'          }}
          style={styles.CardImage}
        />
        <View>
            <Text style ={styles.HeaderText} >
                If you are new to mobile development, the easiest way to get started is with Expo Go. Expo is a set of tools and services built around React Native and, while it has many features            </Text>
        </View>
        <View style={styles.BodyContanir}>
          <TouchableOpacity style = {styles.Cardfooter} onPress={() => openWebsite('https://reactnative.dev/docs/environment-setup')}>
            <Text style = {styles.SocialLink} >Read more</Text>
            <Text style = {styles.SocialLink} >Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  StyleText: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  Cards: {
    width: 350,
    height: 400,
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 16,
  },
  CardsEvelator: {
    backgroundColor: '#323b36',
  },
  HeaderText: {
    margin: 5,
    fontSize: 16,
    marginTop: 10,
    color: 'white',  fontWeight: '800',
  },
  HeadingContainer: {
    height:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardImage: {
    height: 190,
  },
  BodyContanir: {
    padding: 10,
  },
  Cardfooter:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  SocialLink:{
    fontSize: 16,
    backgroundColor: 'blue',
    padding:8,
    borderRadius: 20,
    color: 'white',
    fontWeight: '800',
  },
});
