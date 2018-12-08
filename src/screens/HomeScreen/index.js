import React, {Component} from 'react';
import {View, Text,StyleSheet, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    WrapperlogoTripPlanner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    WrapperlogoDevPleno: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32
    },
    buttonBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 18
    }
})

const assets = {
    background: require('../../../assets/Group.png'),
    logotrip: require('../../../assets/logo-tripplanner.png'),
    logodev: require('../../../assets/devlogo.png')
}

class HomeScreen extends Component {


    render() { 
        return (
            <ImageBackground 
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch'}}
                style={styles.background}
            >
                <View style={styles.WrapperlogoTripPlanner}>
                    <Image source={assets.logotrip}/>
                </View>
                <View style={styles.WrapperlogoDevPleno}>
                    <Image source={assets.logodev}/>        
                </View>
                 <TouchableWithoutFeedback>
                     <View style={styles.buttonBackground}>
                        <Text style={styles.ButtonText}>CONTINUAR</Text>
                     </View>
                 </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }
}
export default HomeScreen;