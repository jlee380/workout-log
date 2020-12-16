import { createStackNavigator } from 'react-navigation-stack';
import About from '../screen/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            headerStyle: {backgroundColor: '#333'}
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default AboutStack;