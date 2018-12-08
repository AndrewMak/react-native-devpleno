import React, {Component} from 'react';
import {View, Text,StyleSheet, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native'
import assets from './assets'
import styles from './styles'



class HomeScreen extends Component {
state = {
    show: true
}
handleCounter = () => {
    this.setState({
        show: !this.state.show
    })
}

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
                {
                    !this.state.show ? 
                    <TouchableWithoutFeedback onPress={this.handleCounter}>
                    <View style={styles.buttonBackground}>
                       <Text style={styles.ButtonText}>Começar!</Text>
                    </View>
                    </TouchableWithoutFeedback>
                    : 
                    <TouchableWithoutFeedback onPress={this.handleCounter}>
                    <View style={styles.buttonBackgroundPlaneja}>
                    <Image source={assets.icon}/>
                       <Text style={styles.ButtonTextPlaneja}>Vamos Planejar sia primeira viagem?</Text>
                       <Image source={assets.seta}/>                   
                       </View>
                    </TouchableWithoutFeedback>
                }
                
            </ImageBackground>
        )
    }
}
export default HomeScreen;