import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Contactlist() {
    const contacts =[
        {
            uid: 1,
            name: "Alice",
            status: "Active",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          },
          {
            uid: 2,
            name: "Bob",
            status: "Inactive",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          },
          {
            uid: 3,
            name: "Charlie",
            status: "Active",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          },
          {
            uid: 4,
            name: "David",
            status: "Active",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          },
          {
            uid: 5,
            name: "Eva",
            status: "Inactive",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          },
          {
            uid: 6,
            name: "Frank",
            status: "Active",
            imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4"
          }
        ];
  return (
    <View>
      <Text style={styles.headingText}>Contactlist</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
            >
                {contacts.map(({uid , name , status , imageUrl})=>(
                    <View key={uid} style={styles.userCard}>
                        <Image
                        source={{
                            uri:imageUrl
                        }} 
                        style={styles.userImage}/>


                    <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                    </View>
                    </View>

                ))}
            </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#BED7DC',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})

