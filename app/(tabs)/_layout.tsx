import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

// ─── Types ───
interface TabIconProps {
  focused: boolean;
  color: string;
  icon: any;
}

// ─── Tab Icon Component ───
const TabIcon = ({ focused, color, icon }: TabIconProps) => {
  return (
    <View className="tabs-icon">
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image
          source={icon}
          resizeMode="contain"
          className="tabs-glyph"
         
        />
      </View>
    </View>
  );
};

// ─── Tab Layout ───
const TabLayout = () => {
  const insects = useSafeAreaInsets(); // ✅ moved here

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        height: tabBar.height,
        marginHorizontal: tabBar.horizontalInset,
        borderRadius: tabBar.radius,
        backgroundColor: colors.primary,
        borderTopWidth: 0,
        elevation: 0,
        bottom: Math.max(insects.bottom, tabBar.horizontalInset)
      },
      tabBarItemStyle: {
        paddingVertical: tabBar.height/2 - tabBar.iconFrame/1.6,
      },
      tabBarIconStyle:{
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: "center",
        justifyContent: "center",
      }

    }}>
      {tabs.map((tab) => (   // ✅ fixed
        <Tabs.Screen
          key={tab.name}     // ✅ fixed
          name={tab.name}    // ✅ fixed
          options={{
            title: tab.title,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon focused={focused} color={color} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;