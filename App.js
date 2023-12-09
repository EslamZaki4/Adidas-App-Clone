import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/Store/store.js';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen/SearchScreen.js';
import Logo from './src/components/Logo/Logo.js';
import LoginAndRegist from './src/screens/LoginAndRegist/loginAndRegist.js';
import Login from './src/screens/Login/Login.js';
import Email from './src/screens/Login/Email.js';
import RegisEmail from './src/screens/Regist/RegisEmail.js';
import Regist from './src/screens/Regist/Regist.js';

import ProfielScreen from './src/screens/Profiel/ProfielScreen.js';
export default function App() {
  const Stack = createStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>

  
 
        <Stack.Navigator>
        <Stack.Screen name="Logo"  component={Logo} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabNavigator"  component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login"  component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LoginAndRegist"  component={LoginAndRegist} options={{ headerShown: false }} />
        <Stack.Screen name="Regist"  component={Regist} options={{ headerShown: false }} />
        <Stack.Screen name="RegisEmail"  component={RegisEmail} options={{ headerShown: false }} />
        <Stack.Screen name="Email"  component={Email} options={{ headerShown: false }} />
        <Stack.Screen name="ProfielScreen"  component={ProfielScreen} options={{ headerShown: false }} />
      </Stack.Navigator>


      </NavigationContainer>
    </Provider>
  );
}
