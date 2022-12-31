import React, {FC} from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useAppSelector} from '../store/hook';
import {PixelPerfect} from '../styles/stylesConstants';
import {SharedStyles} from '../styles/sharedStyles';

interface Props {
  style?: StyleProp<ViewStyle>;
}
const ProductOverview: FC<Props> = ({style}) => {
  const {singleProduct, loader} = useAppSelector(s => s.productsReducer);

  return (
    <View style={[styles.container, style]}>
      {loader ? (
        <View style={styles.loader}>
          <ActivityIndicator size={PixelPerfect(50)} />
        </View>
      ) : (
        <View>
          <Text>{singleProduct.name}</Text>
          <Text>{singleProduct.price}</Text>
          <Text>{singleProduct.description}</Text>
        </View>
      )}
    </View>
  );
};

export default ProductOverview;

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
