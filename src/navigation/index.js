import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Earphone from "../screens/Earphone";
import Headphones from "../screens/Headphones";
import Home from "../screens/Home";
import Details from "../screens/ProductDetails";
import Speakers from "../screens/Speakers";
import { colors } from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        backgroundColor: 'white',
    }
}

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
        </HomeStack.Navigator>
    )
}

const HeadphoneStack = createNativeStackNavigator();
function HeadphoneStackScreen() {
    return (
        <HeadphoneStack.Navigator screenOptions={{ headerShown: false }}>
            <HeadphoneStack.Screen name="Headphones" component={Headphones} />
            <HeadphoneStack.Screen name="Details" component={Details} />
        </HeadphoneStack.Navigator>
    )
}

const EarphoneStack = createNativeStackNavigator();
function EarphoneStackScreen() {
    return (
        <EarphoneStack.Navigator screenOptions={{ headerShown: false }}>
            <EarphoneStack.Screen name="Earphone" component={Earphone} />
            <EarphoneStack.Screen name="Details" component={Details} />
        </EarphoneStack.Navigator>
    )
}

const CartStack = createNativeStackNavigator();
function CartStackScreen() {
    return (
        <CartStack.Navigator screenOptions={{ headerShown: false }}>
            <CartStack.Screen name="Cart" component={Cart} />
            <CartStack.Screen name="Checkout" component={Checkout} />
        </CartStack.Navigator>
    )
}

const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreen() {
    return (
        <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
            <SpeakersStack.Screen name="Speakers" component={Speakers} />
            <SpeakersStack.Screen name="Details" component={Details} />
        </SpeakersStack.Navigator>
    )
}

function TabBarIcon({ fontFamily, name, color }) {
    if (fontFamily === 'MaterialCommunityIcons') {
        return <MaterialCommunityIcons name="home" size={24} />
    }
    else if (fontFamily === 'Ionicons') {
        return <Ionicons name={name} size={24} color={color} />
    }
    else if (fontFamily === 'SimpleLineIcons') {
        return <SimpleLineIcons name={name} size={24} color={color} />
    }
    else if (fontFamily === 'MaterialIcons') {
        return <MaterialIcons name={name} size={24} color={color} />
    }
    else if (fontFamily === 'FontAwesome5') {
        return <FontAwesome5 name={name} size={24} color={color} />
    }
}

export default function Navigation() {
    return (
        <NavigationContainer theme={THEME}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.primary,
                }}>
                <Tab.Screen
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="home"
                                color={color}
                                fontFamily={'MaterialCommunityIcons'}
                            />
                        ),
                    }}
                    name="HomeTab"
                    component={HomeStackScreen}
                />

                <Tab.Screen
                    options={{
                        title: 'Headphones',
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="headphones"
                                color={color}
                                fontFamily={'FontAwesome5'}
                            />
                        ),
                    }}
                    name="HeadphoneTab"
                    component={HeadphoneStackScreen}
                />
                <Tab.Screen
                    name="EarphoneTab"
                    options={{
                        title: 'Earphone',
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="earphones"
                                color={color}
                                fontFamily={'SimpleLineIcons'}
                            />
                        ),
                    }}
                    component={EarphoneStackScreen}
                />
                <Tab.Screen
                    name="SpeakersTab"
                    options={{
                        title: 'Speaker',
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="speaker"
                                color={color}
                                fontFamily={'MaterialIcons'}
                            />
                        ),
                    }}
                    component={SpeakersStackScreen}
                />
                <Tab.Screen
                    options={{
                        title: 'Cart',
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon
                                name="cart"
                                color={color}
                                fontFamily={'Ionicons'}
                            />
                        ),
                    }}
                    name="CartTab"
                    component={CartStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}