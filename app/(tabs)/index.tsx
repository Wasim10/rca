// ─── Imports ───
import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcommingSubscriptionCard from "@/components/UpcommingSubscriptionCard";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import dayjs from "dayjs";
import { styled } from "nativewind";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSaveAreaView } from "react-native-safe-area-context";
import { formatCurrency } from "../lib/utils";

// ─── Styled Components ───
const SafeAreaView = styled(RNSaveAreaView);

export default function App() {

  // ─── State ───
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">

      {/* ─── Main List ─── */}
      <FlatList

        // ─── List Header ───
        ListHeaderComponent={() => (
          <>
            {/* ─── Top Header - Avatar & Add Button ─── */}
            <View className="home-header items-center flex-row justify-between">
              <View className="home-user">
                <Image source={images.avatar} className="home-avatar" />
                <Text className="home-user-name">{HOME_USER.name}</Text>
              </View>
              <Image source={icons.add} className="home-add-icon" />
            </View>

            {/* ─── Balance Card ─── */}
            <View className="home-balance-card rounded-2xl p-5 mt-5">
              <Text className="home-balance-label">Current Balance</Text>
              <View className="home-balance-row">
                {/* Total spending amount */}
                <Text className="home-balance-amount">
                  {formatCurrency((HOME_BALANCE.amount))}
                </Text>
                {/* Next renewal date */}
                <Text className="home-balance-date">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("ddd, MMM DD")}
                </Text>
              </View>
            </View>

            {/* ─── Upcoming Subscriptions Horizontal List ─── */}
            <View className="mb-5">
              <ListHeading title="Upcoming" />
              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (<UpcommingSubscriptionCard {...item} />)}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="home-empty-state">No upcoming renewals yet.</Text>
                }
              />
            </View>

            {/* ─── All Subscriptions Heading ─── */}
            <ListHeading title="All Subscriptions" />
          </>
        )}

        // ─── List Data ───
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}

        // ─── Render Each Subscription Card ───
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            // Check if this card is expanded
            expanded={expandedSubscriptionId === item.id}
            // Toggle expand/collapse on press
            onPress={() => setExpandedSubscriptionId((currentId) =>
              currentId === item.id ? null : item.id
            )}
          />
        )}

        // ─── Re-render when expanded card changes ───
        extraData={expandedSubscriptionId}

        // ─── Separator between cards ───
        ItemSeparatorComponent={() => <View className="h-4" />}

        // ─── Hide scroll bar ───
        showsVerticalScrollIndicator={false}

        // ─── Empty state message ───
        ListEmptyComponent={
          <Text className="home-empty-state">No active subscriptions yet.</Text>
        }

        // ─── Bottom padding ───
        contentContainerClassName="pb-30"

        // ─── Bounce effect on scroll ───
        bounces={true}

        // ─── Pull to refresh ───
        refreshing={false}
        onRefresh={() => console.log('refreshing...')}

        // ─── Smooth scrolling ───
        decelerationRate="fast"
      />

    </SafeAreaView>
  );
}