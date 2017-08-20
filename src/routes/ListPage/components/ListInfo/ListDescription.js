import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import { RkButton,
         RkCard,
          RkText, RkStyleSheet
} from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { selectCarpark } from '../../modules/selectCarpark.js';
import { Actions } from 'react-native-router-flux';


class ListDescription extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    console.log(this.props.expanded)
    if (this.props.expanded) {
       return(
        <RkButton rkType='success xlarge'>Navigate</RkButton>
        )

    }
  }
   render() {
    const { id, title,price,address,image,num} = this.props.item;
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.selectCarpark(id)}
      >
      <RkCard rkType='backImg'>
          <Image rkCardImg source={image} />
          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header inverseColor bold' style={{color:'white'}}>{title}</RkText>
            <RkText rkType='header2 inverseColor bold' style={{color:'white'}}>Number of valid slots: {num}</RkText>
            <RkText rkType='header2 inverseColor bold' style={{color:'white'}}>Price: {price}</RkText>
            <RkText rkType='header2 inverseColor bold' style={{color:'white'}}>Address: {address}</RkText>
          </View>
        </RkCard>
        {this.renderDescription()}
      </TouchableOpacity>
    );
  }
}

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


const mapStateToProps = (state,ownprops) => {
  const expanded = state.selectId===ownprops.item.id
  return { expanded };
};

export default connect(mapStateToProps, {selectCarpark})(ListDescription);
