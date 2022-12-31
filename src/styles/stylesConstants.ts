import {Dimensions, NativeModules, Platform, StatusBar} from 'react-native';

export const phoneHeight = Dimensions.get('window').height;
export const phoneWidth = Dimensions.get('window').width;
const {height, width} = Dimensions.get('window');

export enum Colors {
  black = '#000000',
  blackText = '#002226',
  white = '#FFFFFF',
  mainColor = '#007481',
  medGreen = '#00A145',
  lightGreen = '#30C273',
  veryLightGreen = '#EBF6F0',
  grayGreeny = '#646464',
  red = '#FF0000',
  border = '#E6E6E6',

  lightGray = '#CDCDCD',
  darkWhite = '#EAEAEA',
  grayTab = '#9B9B9B',
}

export const Fonts = {
  Bold: Platform.OS == 'android' ? 'Avenir-Bold' : 'AvenirNext-Bold',
  Medium: Platform.OS == 'android' ? 'Avenir-Medium' : 'Avenir-Medium',
};

export enum ScreenOptions {
  StatusBarHeight = NativeModules.StatusBarManager.HEIGHT,
  HalfScreen = width / 2 - 15,
  CURRENT_RESOLUTION = Math.sqrt(height * height + width * width),
  DesignResolution = {
    width: 375,
    height: 812,
  } as any,
}

export const createPerfectPixel = (designSize = {width: 375, height: 812}) => {
  if (
    !designSize ||
    !designSize.width ||
    !designSize.height ||
    typeof designSize.width !== 'number' ||
    typeof designSize.height !== 'number'
  ) {
    throw new Error(
      'react-native-pixel-perfect | create function | Invalid design size object! must have width and height fields of type Number.',
    );
  }
  const DESIGN_RESOLUTION = Math.sqrt(
    designSize.height * designSize.height + designSize.width * designSize.width,
  );
  const RESOLUTIONS_PROPORTION =
    ScreenOptions.CURRENT_RESOLUTION / DESIGN_RESOLUTION;
  return (size: number) => RESOLUTIONS_PROPORTION * size;
};

export const PixelPerfect = (pixel: number) => {
  const Perfect = createPerfectPixel(ScreenOptions.DesignResolution as any);
  return Perfect(pixel);
};
