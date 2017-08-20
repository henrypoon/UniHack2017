import React from 'react';
import { View, Text } from 'react-native';
import ListInfo from './ListInfo';
import { connect } from 'react-redux';
import styles from './ListInfo/ListStyle'

class ListPage extends React.Component {
	render() {
		return (
			<View style={styles.ContainStyle}>
				<ListInfo carparks={this.props.carparks} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return { carparks: state.carparks }
};

export default connect(mapStateToProps)(ListPage);
