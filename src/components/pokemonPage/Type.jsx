import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//Functions
import getColorByPokemonType from '../../utils/getColorByPokemonType'

const Type = ({types}) => {

  return (
    <View style={styles.content}>
      {types.map((item, index) => {
        return( 
          <View key={index} style={{...styles.pill, backgroundColor:getColorByPokemonType(item.type.name)}}>
              <Text style={styles.nameType}>{item.type.name}</Text>
          </View>
      )})}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill: {
      paddingHorizontal: 30,
      paddingVertical: 5,
      borderRadius: 20,
      marginHorizontal: 10,
      backgroundColor:''
    },
    nameType: {
      textTransform: 'capitalize',
      fontWeight:'500'
    },
})

export default Type