import React, {FC, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hook';
import {getProductsAction} from '../store/actions/productsActions';
import ProductCard from '../components/ProductCard';
import {PixelPerfect} from '../styles/stylesConstants';
import {SharedStyles} from '../styles/sharedStyles';

interface Props {}
const HomeScreen: FC<Props> = ({}) => {
  const {products, loader} = useAppSelector(s => s.productsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);

  return (
    <View style={[styles.container]}>
      {loader ? (
        <View style={styles.loader}>
          <ActivityIndicator size={PixelPerfect(50)} />
        </View>
      ) : (
        <FlatList
          data={products}
          // keyExtractor={item => item.id.toString()}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => <ProductCard {...item} />}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    ...SharedStyles.paddingHorizontal,
    flex: 1,
    paddingTop: 10,
  },
  loader: {
    flex: 1,
    ...SharedStyles.centred,
  },
});
