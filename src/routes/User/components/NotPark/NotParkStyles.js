import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;
const styles = {
    container: {
        top: 30,
        position: 'absolute',
        width: width,
        backgroundColor: 'green',
        flex: 0.3
    },
  	buttonbox: {
        flex: 1,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
};

export default styles;
