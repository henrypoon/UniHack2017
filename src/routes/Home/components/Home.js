import React from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import MapContainer from './MapContainer';

class Home extends React.Component {

	componentDidMount() {
		this.props.getCurrentLocation();
	}

	render() {
		const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
		return (
			<Container>
				{this.props.region.latitude &&
				<MapContainer
					region={this.props.region}
					getInputData={this.props.getInputData}
					getLocationPrediction={this.props.getLocationPrediction}
					prediction={this.props.prediction}
					getRegion={this.props.getRegion}
				/>
				}
			</Container>
		);
	}
}

export default Home;
