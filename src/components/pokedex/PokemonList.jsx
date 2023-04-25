import React from 'react'
import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'

//Components
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons, loadPokemons, isNext, isLoading}) => {
    
  const loadMore = () => {
    loadPokemons();
  }
  return (
    <FlatList 
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon, index) => String(index)}
        renderItem={({item})=> <PokemonCard pokemon={item}/>}
        contentContainerStyle={styles.flatListContentContainer}
        onEndReached={!isLoading && isNext && loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          isLoading && isNext && <ActivityIndicator size='large' style={styles.spinner} color='#AEAEAE'/>
        }
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    spinner: {
      marginTop: 20,
      marginBottom: Platform.OS === 'android' ? 90 : 60,
    }
})

export default PokemonList