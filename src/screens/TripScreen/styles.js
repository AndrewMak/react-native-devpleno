import {
    StyleSheet
} from 'react-native'
export default styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 16
    },
    itemPrice: {
        textAlign: 'right',
        color: '#24C6DC',
        fontWeight: 'bold'
    },
    wrapperInfo: {
        flex: 1
    },
    wrapper: {
        flex: 1
    },
    header: {
        height: 192,
        backgroundColor: 'grey'
    },
    buttonBack: {
        position: 'absolute',
        top: 36,
        left: 16
    },
    tripName: {
        position: 'absolute',
        left: 16,
        bottom: 16,
        padding: 10
    },
    tripPrice: {
        position: 'absolute',
        bottom: 16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#24C6DC',
        padding: 4,
        color: 'white'
    },
    

})