import {
  COLORS,
  TAB_COLORS,
  TAB_ICON_SIZE,
  TABS_TITLE,
} from "@/src/06_shared/config/constants"
import AntDesign from "@expo/vector-icons/AntDesign"
import Entypo from "@expo/vector-icons/Entypo"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs screenOptions={tabsScreenOptions}>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: TABS_TITLE.HOME,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Entypo
                name='home'
                size={TAB_ICON_SIZE}
                color={color}
              />
            ) : (
              <AntDesign
                name='home'
                size={TAB_ICON_SIZE}
                color={color}
              />
            ),
        }}
      />
      <Tabs.Screen
        name='soon-form'
        options={{
          headerShown: false,
          title: TABS_TITLE.SOON_FORM,
          tabBarIcon: ({ color }) => (
            <AntDesign
              name='form'
              size={TAB_ICON_SIZE}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}

const tabsScreenOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 60,
    paddingBottom: 0,
  },
  tabBarActiveTintColor: TAB_COLORS.active,
  tabBarInactiveTintColor: TAB_COLORS.inactive,
}
