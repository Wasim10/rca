import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime, formatSubscriptionDateTimeNew } from '@/app/lib/utils'
import clsx from 'clsx'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const SubscriptionCard = ({
  name, price, currency, icon, status, billing, color, category,
  plan, renewalDate, onPress, startDate, expanded, paymentMethod
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx('sub-card', expanded ? 'bg-card-expanded' : 'bg-card-default')}
      style={[
        color ? { backgroundColor: color } : undefined,
        // {
        //   shadowColor: "#000",
        //   shadowOffset: { width: 0, height: 1 },
        //   shadowOpacity: 1,
        //   shadowRadius: 0,
        //   elevation: 5,
        // }
      ]}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">{name}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' className='sub-meta'>
              {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')}
            </Text>
          </View>
        </View>
        <View className="sub-price">
          <Text className="sub-price">{formatCurrency(price, currency)}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>

      {expanded && (
        <View className="sub-bdy">
          <View className="sub-details">
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Payment:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode='tail'>
                  {paymentMethod?.trim() || 'Not provided'}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Category:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode='tail'>
                  {category?.trim() || plan?.trim()}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Started:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode='tail'>
                  {startDate ? formatSubscriptionDateTimeNew(startDate) : 'Not provided'}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Renewal Date:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode='tail'>
                  {renewalDate ? formatSubscriptionDateTimeNew(renewalDate) : 'Not provided'}
                </Text>
              </View>
            </View>
            <View className="sub-row">
              <View className="sub-row-copy">
                <Text className="sub-label">Status:</Text>
                <Text className="sub-value" numberOfLines={1} ellipsizeMode='tail'>
                  {status ? formatStatusLabel(status) : 'Unknown'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}

    </Pressable>
  )
}

export default SubscriptionCard