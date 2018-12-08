import React, {Component} from 'react';
import {View, Text,StyleSheet, Image, ImageBackground, TouchableWithoutFeedback} from 'react-native'
import assets from './assets'
import styles from './styles'



class HomeScreen extends Component {
    static navigationOptions={
      header: null  
    }
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
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
                    <View style={styles.buttonBackgroundPlaneja}>
                    <Image source={assets.icon} style={styles.pin}/>
                       <Text style={styles.ButtonTextPlaneja}>Vamos Planejar sua primeira viagem?</Text>
                       <Image source={assets.seta} style={styles.seta}/>                   
                       </View>
                    </TouchableWithoutFeedback>
                }
                
            </ImageBackground>
        )
    }
}
export default HomeScreen;