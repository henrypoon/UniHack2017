import React from 'react';
import { Text } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import HomeContainer from './Home/containers/HomeContainer';
import UserContainer from './User/containers/UserContainer';
import PaymentContainer from './Payment/containers/PaymentContainer';
import ListPage from './ListPage/components/ListPage';

const TabIcon = ({ selected, title }) => {
	return (
		<Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
	);
};

const scenes = Actions.create(
<Scene key="root">
	<Scene
		key="tabbar"
		tabs={true}
		tabBarStyle={{ backgroundColor: '#FFFFFF' }}
	>

	<Scene key="Map"title="Map" icon={TabIcon}>
		<Scene
			key="home"
			component={HomeContainer}
			title="Parzi"
		/>
	</Scene>

	<Scene key="List"title="List" icon={TabIcon}>
		<Scene
			key="ListPage"
			component={ListPage}
			title="ListPage"
		/>
	</Scene>


	<Scene key="user"title="User" icon={TabIcon}>
		<Scene
			key="User"
			component={UserContainer}
			title="My Car"
		/>
	</Scene>
</Scene>

<Scene
	key='modal'
	direction='vertical'
	component={PaymentContainer}
	title='Payment'
	hideNavBar
/>

</Scene>

);

export default scenes;
