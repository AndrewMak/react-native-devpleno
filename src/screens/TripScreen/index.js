import React, {Component} from 'react'
import {View, Text,FlatList, Image,TouchableOpacity} from 'react-native'

class TripScreen extends Component{
    static navigationOptions={
        header: null  
      }
    renderItem = item => {
        return(
            <View style={{flex:1, flexDirection:'row',
        paddingBottom:16}}>
                <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold',
                fontSize:18}}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={{alignItems:'center',
                                justifyContent:'center',
                paddingRight:16
                            }}>
                    <Text style={{textAlign:'right',color:'#24C6DC',fontWeight:'bold'}}>{item.item.price}</Text>
                </View>
            </View>
        )
    }
    render(){
        const trip = {
                id: '1',
                name: 'EuroTrip 2019',
                price: 'R$ 5000',
                places: [{
                        id: '1',
                        name: 'Amsterdan',
                        description: 'Chegada',
                        price: 100,
                        lat: 0,
                        long: 0
                    },
                    {
                        id: '2',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '3',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '4',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '6',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '7',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '8',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    },     {
                        id: '9',
                        name: 'Bruxelas',
                        description: 'Hospedagem',
                        price: 300,
                        lat: 0,
                        long: 0
                    }
                ]

            }
        
        return (
        <View style={{flex:1}}>
            
            <View style={{height:192, backgroundColor:'grey'}}>
            <View style={{
                position:  'absolute',
                top: 36,
                left:16
            }}>    
            <TouchableOpacity onPress={()=> this.props.navigation.goBack()} >
                <Image source={require('../../../assets/seta_esquerda.png')}></Image>
            </TouchableOpacity>
            </View>
            <Text style={{ position:'absolute',
                                left: 16,
                                bottom:16,
                                padding:10
            }}>{trip.name}</Text>
            <Text style={{
                position: 'absolute',
                bottom: 16,
                right: 32,
                textAlign: 'right',
                backgroundColor: '#24C6DC',
                padding: 4,
                color: 'white'
        
            }}>{trip.price}</Text>
            </View>
            <FlatList
            style={{flex:1
                }}
                contentContainerStyle={{
                    paddingTop:16,
                    paddingLeft:16
                }}
            data={trip.places}
            renderItem={this.renderItem} />
        </View>)
    }
}
export default TripScreen