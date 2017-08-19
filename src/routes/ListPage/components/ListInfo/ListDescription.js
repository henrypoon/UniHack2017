import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import {
  Image,
  Tile,
  Heading,
  Title,
  Subtitle,
  Overlay,
  Screen,
  Divider,
} from '@shoutem/ui';
import { connect } from 'react-redux';
import { selectCarpark } from '../../modules/selectCarpark.js';
import { Actions } from 'react-native-router-flux';


class ListDescription extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { carparks, expanded } = this.props;
    if (expanded) {
        Actions.modal();
    }
  }

   render() {
    const { id, title,price,address,image,num} = this.props.carparks;
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectCarpark(id)}
      >

        <View>
      <Image
          styleName="large-banner"
          source={{ uri: image.url }}
       >
          <Tile>
            <Heading styleName="md-gutter-bottom">{title}</Heading>
            <Subtitle styleName="sm-gutter-horizontal">price: {price}</Subtitle>
            <Subtitle styleName="sm-gutter-horizontal">number of valid slot: {num}</Subtitle>
            <Subtitle styleName="sm-gutter-horizontal">address: {address}</Subtitle>
          </Tile>
 	  </Image>
	    {this.renderDescription()}
 	  	<Divider styleName="line" />
      	</View>
      </TouchableWithoutFeedback>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectId === ownProps.carparks.id;
  return { expanded };
};

export default connect(mapStateToProps, {selectCarpark})(ListDescription);
