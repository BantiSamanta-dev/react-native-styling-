// eslint-disable-next-line prettier/prettier
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.container}>
            <View style={[styles.card,styles.card1]}>
                <Text>RED</Text>
            </View>
            <View style={[styles.card,styles.card2]}>
                <Text>GREEN</Text>
            </View>
            <View style={[styles.card,styles.card3]}>
                <Text>BLUE</Text>
            </View>
            <View style={[styles.card,styles.card3]}>
                <Text>BLUE</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal:10,
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:8,

    },
    card:{
        flex:1,
        justifyContent: "center",
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        },
    card1:{
        backgroundColor:'#EF5354'

    },
    card2:{
        backgroundColor:'#00ff6a'

    },
    card3:{
        backgroundColor:'#00a9ff'

    }
})