import {I18nManager, Platform, StyleSheet} from 'react-native';
import {Colors, Fonts, PixelPerfect} from './stylesConstants';

export const SharedStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#1B2B5D',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  centred: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textAlign: {
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  paddingHorizontal: {
    paddingHorizontal: PixelPerfect(20),
  },
  marginHorizontal: {
    marginHorizontal: PixelPerfect(20),
  },
  borderRadius: {
    borderRadius: PixelPerfect(7),
  },

  textSpaceIOS: {
    marginBottom: Platform.OS == 'ios' ? PixelPerfect(8) : 0,
  },
});

export const paddingHorizontal = PixelPerfect(20);
