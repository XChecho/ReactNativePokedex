import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'

//Services
import { getPokemonDetailsApi } from '../api/pokemon'

//Components
import Header from '../components/pokemonPage/Header'
import Type from '../components/pokemonPage/Type'
import StatsPokemon from '../components/pokemonPage/StatsPokemon'

//Assets
import Icon from 'react-native-vector-icons/FontAwesome5'

const Pokemon = ({navigation, route}) => {

  const [pokemon, setPokemon] = useState(null)
  useEffect (()=> {
    (async ()=> {
      try {
        const response = await getPokemonDetailsApi(route.params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack();
      }
    })()
  },[route?.params])

  useEffect(() => {
    navigation?.setOptions({
      headerRight: ()=> null, 
      headerLeft: ()=> <Icon name='arrow-left' color='#FFF' size={20} style={{marginLeft:5}} onPress={navigation.goBack}/>
    })
  }, [navigation, route?.params])
  
  
  if(!pokemon) return null;

  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other["official-artwork"].front_default} type={pokemon.types[0].type.name}/>
      <Type types={pokemon.types}/>
      <StatsPokemon stats={pokemon.stats}/>
    </ScrollView>
  )
}

export default Pokemon