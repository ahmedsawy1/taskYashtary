import React, {FC} from 'react';
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PixelPerfect} from '../styles/stylesConstants';
import {useAppDispatch} from '../store/hook';
import {INavigation} from '../interfaces/hooks';
import {getProductByIdAction} from '../store/actions/productsActions';

interface Props {
  name?: string;
  price?: string;
  barcode?: string;
  id: number;
  prop3?: boolean | JSX.Element;
  prop4?: () => void;
  style?: StyleProp<ViewStyle>;
}
const ProductCard: FC<Props> = ({id, style, name, price, barcode}) => {
  const navigation: INavigation = useNavigation();
  const dispatch = useAppDispatch();

  const onCardPress = () => {
    dispatch(
      getProductByIdAction({
        productId: id,
        cb(data) {
          navigation.navigate('ProductOverview', data);
        },
      }),
    );
  };

  return (
    <Pressable style={[styles.container, style]} onPress={onCardPress}>
      <Image style={styles.image} />
      <View style={{flex: 2}}>
        <Text style={{flex: 1}}>{name}</Text>
        <View
          style={{
            height: PixelPerfect(50),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text>{barcode?.substring(0, 3)}</Text>
          </View>
          <View>
            <Text>{price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: PixelPerfect(150),
    borderWidth: 1,
  },
  image: {
    flex: 1,
  },
});
