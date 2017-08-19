import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import ListInfo from './ListInfo';
import { connect } from 'react-redux';

class ListPage extends React.Component {

	render() {
		return (
			<Container>
				<ListInfo carparks={this.props.carparks} />
			</Container>
		);
	}
}

const mapStateToProps = state => {
	return { carparks: state.carparks }
};

export default connect(mapStateToProps)(ListPage);
