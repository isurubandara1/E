import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { tailwind } from 'nativewind';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={tailwind('p-4 border-b')}>
      <Image source={{ uri: item.mainImage }} style={tailwind('w-20 h-20')} />
      <Text style={tailwind('text-lg font-bold')}>{item.name}</Text>
      <Text>{item.price.amount} {item.price.currency}</Text>
      <Button title="Remove" onPress={onRemove} />
    </View>
  );
};

export default CartItem;
