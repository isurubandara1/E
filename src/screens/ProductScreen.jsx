import React, { useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { tailwind } from 'nativewind';

const ProductScreen = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productId)
  );

  if (!product) return <Text>Product not found</Text>;

  return (
    <View style={tailwind('p-4')}>
      <Image source={{ uri: product.mainImage }} style={tailwind('w-full h-60')} />
      <Text style={tailwind('text-lg font-bold')}>{product.name}</Text>
      <Text>{product.price.amount} {product.price.currency}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
    </View>
  );
};

export default ProductScreen;
