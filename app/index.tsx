import { View, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/components/index';
import CameraScreen from '../src/components/CameraScreen';
import GoalsList from '../src/components/GoalsList';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <StatusBar barStyle="light-content" backgroundColor="#000000" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#f5f5f5',
            }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
          />
          <Stack.Screen 
            name="Camera" 
            component={CameraScreen}
          />
          <Stack.Screen
            name="GoalsList"
            component={GoalsList}
          />
        </Stack.Navigator>
      </View>
    </SafeAreaProvider>
  );
} 