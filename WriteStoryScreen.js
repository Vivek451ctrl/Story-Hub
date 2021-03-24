import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation'

export default class WriteStoryScreen extends React.Component{
    static navigationOptions = {
     title: 'Story Hub',
        headerStyle: {  
            backgroundColor: '#ff5c8a',  
        },  
        headerTintColor: '#0ff', 
        headerTitleStyle: {  
           fontWeight: 'bold',  
        },  
     }
     render(){
         return(
             <View style ={styles.container}>
                <Text style = {{
                backgroundColor:"#219ebc",
                display:'flex', 
                justifyContent:'space-between'

                }}>Story Title</Text>
                <Text style = {{
                backgroundColor:"",
                display:'flex', 
                justifyContent:'space-between'

                }}> Author </Text>
                <Text style = {{
                backgroundColor:"",
                display:'flex', 
                justifyContent:'space-between',
                paddingTop:'30%',
                paddingBottom:'30%',
                paddingRight: '60%'
                }}> Write your story here </Text>                    
               </View>
         )
     }
    }
 