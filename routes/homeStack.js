import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screen/home';
import ReviewDetail from '../screen/reviewDetail';
import Calendar from '../screen/calendarPage'
import WorkoutLog from '../screen/workoutLog'
// import Sensor from '../screen/sensor'

const screens = {
    Calendar: {
        screen: Calendar,
        navigationOption: {
            title: 'Calendar'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle: {backgroundColor: '#333'}
        }
    },
    ReviewDetail: {
            screen: ReviewDetail,
            navigationOptions: { 
                title: 'Review Detail',
                headerStyle: { backgroundColor: '#444'}
        }
    },
    WorkoutLog: {
        screen: WorkoutLog,
        navigationOption: {
            title: 'Workout Log'
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#222',
        headerStyle: { backgroundColor: '#eee', height: 60 }
    }
})

export default HomeStack;