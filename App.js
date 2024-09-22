// npx expo start -c
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Example reducer for Redux setup
const exampleReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style="flex-1 items-center justify-center bg-gray-100 p-4">
      <Text style="text-xl font-bold text-blue-600 mb-4">
        Welcome to My Awesome App!
      </Text>
      <Icon name="rocket-outline" size={50} color="#4CAF50" />
      <Text style="text-base text-gray-700 mt-4">
        This is the home screen. Navigate to the details screen.
      </Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style="flex-1 items-center justify-center bg-gray-100 p-4">
      <Text style="text-xl font-bold text-blue-600 mb-4">
        Details Screen
      </Text>
      <Text style="text-base text-gray-700">
        This is the details screen. You can add more details here.
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </TailwindProvider>
    </Provider>
  );
}
