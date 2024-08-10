import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { tailwind } from 'nativewind';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View >
    <TouchableOpacity
      
      onPress={() => navigation.navigate('ProductDetails', { productId: product.id })}
    >
      <Image source={{ uri: product.mainImage }}  />
      <Text >{product.name}</Text>
      <Text>{product.price.amount} {product.price.currency}</Text>
    </TouchableOpacity></View>
  );
};

export default ProductCard;
