import React,{ Component } from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import ListDescription from './ListDescription';



class ListInfo extends Component {
  constructor(props) {
    super(props);

    this.carparks = this.props.carparks;
    this.renderItem = this._renderItem.bind(this);
  }

  _renderItem({item}) {
    return <ListDescription item={item}/>;
  }

  render(){

    return (
        <FlatList
        data={this.carparks}
        renderItem={this.renderItem} 
        style={styles.root}/>

    );
  }
};



export default ListInfo;

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240
  }
}));
