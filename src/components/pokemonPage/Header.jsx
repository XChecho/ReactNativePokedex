import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native'

//Services
import getColorByPokemonType from '../../utils/getColorByPokemonType'

const Header = ({name, order, image, type}) => {

    const color = getColorByPokemonType(type);

    const bgStyle = [{backgroundColor: color, ...styles.bg}]

  return (
    <>
        <View style={bgStyle}/>
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
        </View>
        <View style={styles.contentImg}>
            <Image source={{uri:image}} style={styles.image}/>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create ({
    bg: {
        width: '100%',
        height: 400,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 27,
        textTransform:'capitalize'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    order: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: 'contain'
    }
})

export default Header