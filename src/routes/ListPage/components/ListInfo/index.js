import React,{ Component } from 'react';
import {Text,
        ScrollView,
        ListView,
        StyleSheet
 } from 'react-native';
 import ListDescription from './ListDescription';
import {
  Image,
  Tile,
  Title,
  Subtitle,
  Overlay,
  Screen,
  View
} from '@shoutem/ui';


class ListInfo extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.carparks);
  }

  renderRow(carparks) {
    return <ListDescription carparks={carparks}/>;
  }

  render(){
    return (
      <Screen>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow} />
        </Screen>
    );
  }
};




export default ListInfo;
