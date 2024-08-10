import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/products/productsSlice';
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <Text>Loading...</Text>;
  if (status === 'failed') return <Text>Error loading products</Text>;

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

export default HomeScreen;
