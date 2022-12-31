import {axiosAPI} from '../../api/config';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

export const getProductsAction = createAsyncThunk('getProducts', async () => {
  try {
    const {data} = await axiosAPI.get('products');
    console.log(data);

    return data;
  } catch (error) {
    Alert.alert(error?.response.data.message);
    console.log(error?.response.data.message);
  }
});

export const getProductByIdAction = createAsyncThunk(
  'getProductById',
  async (params: {productId: number | number; cb: (data: {}) => void}) => {
    try {
      const {data} = await axiosAPI.get(
        `product?product_id=${params.productId}`,
      );
      // console.log(JSON.stringify(data, null, 3));
      console.log(JSON.stringify(data));
      params?.cb && params?.cb(data);

      return data;
    } catch (error) {
      Alert.alert(error?.response.data.message);
      console.log(error?.response.data.message);
    }
  },
);
