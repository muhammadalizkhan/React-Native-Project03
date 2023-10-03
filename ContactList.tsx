import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'USSR',
          status: 'Union Communist State of 15 Countries',
          imageURL: 'https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg',
        },
        {
          uid: 2,
          name: 'USA',
          status: 'United States of America',
          imageURL: 'https://www.blackagendareport.com/sites/default/files/2022-09/marxism%20maga.jpg',
        },
        {
            uid: 3,
            name: 'USA',
            status: 'United States of America',
            imageURL: 'https://www.blackagendareport.com/sites/default/files/2022-09/marxism%20maga.jpg',
        },
        {
            uid: 4,
            name: 'USA',
            status: 'United States of America',
            imageURL: 'https://www.blackagendareport.com/sites/default/files/2022-09/marxism%20maga.jpg',
        },
      ];
      return (
        <View>
          <Text style={styles.Headingtext}>ContactList</Text>
          <ScrollView style={styles.Contanier} scrollEnabled={false}>
            {contacts.map(({uid, name, status, imageURL }) => (
              <View key={uid} style={styles.UserCard}>
                <Image
                  source={{
                    uri: imageURL,
                  }}
                  style={styles.userImage}
                />
                <View>
                <Text style={styles.UserNme}>{name}</Text>
                <Text style={styles.UseStatus}>{status}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      );
    }
const styles = StyleSheet.create({
    Headingtext:{
        fontSize: 20,
        padding: 8,
        fontWeight: 'bold',
    },
    Contanier:{
        padding: 16,
        marginBottom: 4,
    },
    UserCard:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#2c3e50',
        borderRadius: 10,
        height: 100,
        padding: 8,
    },
    userImage:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    UseStatus:{
        fontSize: 12,
    },
    UserNme:{
        fontSize: 16,
        fontWeight: '600',
    },
});
