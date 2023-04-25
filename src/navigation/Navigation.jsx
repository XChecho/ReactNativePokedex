import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Assets
import Icon from 'react-native-vector-icons/FontAwesome5'

//Screens
import FavoriteScreen from '../screens/Favorite';
import Account from '../screens/Account';

//Navigations
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation () {

    const renderPokeball = () => {
        return ( 
            <Image 
                source={require('../assets/pokedex/pokeball.png')}
                style={{width:75, height:75, top:-15}}
            />
        )
    }
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Favorite" 
                component={FavoriteScreen} 
                options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon: ({color, size}) => (
                        <Icon name='heart' color={color} size={size} />
                    ),
                    headerTitle: "Favoritos",
                    headerTitleAlign: 'center'
                }}
                
            />
            <Tab.Screen 
                name="Pokedex" 
                component={PokedexNavigation} 
                options={{
                    tabBarLabel:'',
                    tabBarIcon: () => renderPokeball(),
                    headerTitle: "Pokedex",
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Account" 
                component={Account} 
                options={{
                    tabBarLabel: 'Mi Cuenta',
                    tabBarIcon: ({color, size}) => (
                        <Icon name='user' color={color} size={size} />
                    ),
                    headerTitle: "Mi Cuenta",
                    headerTitleAlign: 'center'
                }}
            />
        </Tab.Navigator>
    )
}
