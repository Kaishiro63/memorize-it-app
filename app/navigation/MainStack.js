import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import colors from '../../utils/Colors';
import HomeStack from './HomeStack';
import ExplorerStack from './ExplorerStack';
import { Icon } from '../../components/atoms/Image';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const MainStack = () => {
    const Tabs = createBottomTabNavigator()
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon;

                switch (route.name) {
                    case 'HomeStack':
                        icon = { name: focused ? 'home' : 'home-outline', family: 'Ionicons' }
                        break;
                    case 'ExplorerStack':
                        icon = { name: focused ? 'book' : 'book-outline', family: 'Ionicons' }
                        break;
                    default:
                        icon = 'home';
                        break;
                }

                return <Icon iconFamily={icon.family} name={icon.name} size={28} color={color} />
            },
            tabBarActiveTintColor: colors.orange,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                ...tabBarVisibility(route)
            }
        })}>
            <Tabs.Screen
                name='HomeStack'
                component={HomeStack}
                options={{ title: 'Home' }}
            />
            <Tabs.Screen
                name='ExplorerStack'
                component={ExplorerStack}
                options={{ title: 'Explorer' }}
            />
        </Tabs.Navigator >
    )
}

const tabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Game') {
        return { display: 'none' };
    }
    return {};
};

export default MainStack


