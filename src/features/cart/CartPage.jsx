import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartSlice';
import CartItem from '../../components/CartItem';
import { tailwind } from 'nativewind';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.amount), 0).toFixed(2);

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-lg font-bold')}>Cart Total: £{totalAmount}</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onRemove={() => dispatch(removeFromCart(item))}
          />
        )}
      />
    </View>
  );
};

export default CartPage;
