import { formatCurrency } from '@/app/lib/utils'
import React from 'react'
import { Image, Text, View } from 'react-native'


const UpcommingSubscriptionCard = ({  name, price, daysLeft, icon, currency  }: UpcomingSubscription) => {
  return (
  <View 
  className="upcoming-card"
  style={{
    shadowColor: "#000",
    shadowOffset: { width: 7, height: 7},
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 2,
  }}
>
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" resizeMode="contain" />
        <View>
          <Text className="upcoming-price"> {formatCurrency(price, currency)}</Text>
          <Text className="upcoming-meta" numberOfLines={1}>{daysLeft > 1 ? `${daysLeft} daysLeft` : 'LastDay'}</Text>
        </View>
      </View>

      <Text className="upcoming-name" numberOfLines={1}>{name}</Text>
    </View>
  )
}

export default UpcommingSubscriptionCard