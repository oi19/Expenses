import { Dimensions, useWindowDimensions } from 'react-native';
export const { width, height } = Dimensions.get('window');
// export const { width, height } = Dimensions.get('window');
export const guidelineBaseWidth = 360;
export const guidelineBaseHeight = 670;
//for horizontal scale
export const scale = size => (width / guidelineBaseWidth) * size;
//for vertical scale
export const verticalScale = size => (height / guidelineBaseHeight) * size;
const defaultFactor = (width > guidelineBaseWidth) ? .5 : 1.25
//for fontsiza
export const moderateScale = (size, factor = defaultFactor) => size + (scale(size) - size) * factor;