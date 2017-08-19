import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
const styles = {
    searchButton: {
        top: 60,
        position: 'absolute',
        width: width
    }
};

export default styles;
