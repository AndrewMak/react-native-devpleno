import React, {Component} from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native'
import Trip from './Trip'
import isIphoneX from '../../utils/isIphoneX'
class TripsScreen extends Component{

    static navigationOptions = {
        header: null
    }
    renderItem = item =>{
       return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.item.name} price={item.item.price}></Trip> 
    }
    render(){
        console.log(isIphonex())
        const trips = [{
                id: '1',
                name: 'EuroTrip 2019',
                price: 'R$ 5000'
            },
            {
                id: '2',
                name: 'Expedição Atacama',
                price: 'R$ 3000'
            }
        ]
        return(
      <View style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch'
        }}>
            <View style={{
                backgroundColor:'red',
                flex: 1
            }}>
                <Text>Mapa</Text>
            </View>
            <View style={{
                backgroundColor:'white'            
            }}>
            <FlatList 
            data={trips}
            renderItem={this.renderItem}
            horizontal
            pagingEnabled
            keyExtractor={item=> item.id}
            style={[isIphoneX() ? {marginBottom:20} : null ]}
            />
                      
            </View>
      </View>
    )}
}
export default TripsScreen