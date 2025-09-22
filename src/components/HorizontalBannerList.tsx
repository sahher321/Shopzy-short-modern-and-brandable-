import {ACTIVE_BUTTON_OPACITY} from '@app/constants';
import {ProductType} from '@app/types';
import {AppColors} from '@app/utils';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';


type HorizontalBannerListProps = {
  list: ProductType[] | undefined;
  onPress?: (product: ProductType) => void;
  style?: ViewStyle;
};
const banners = [
  require('../../assets/images/banner.png'),
  require('../../assets/images/banner2.png'),
];


export default ({
  list = [],
  onPress,
  style,
}: HorizontalBannerListProps): JSX.Element | null => {
  return list.length ? (
    <ScrollView
      horizontal
      style={{...styles.list, ...style}}
      showsHorizontalScrollIndicator={false}>
 {banners.map((img, index) => (
  <TouchableOpacity key={index} activeOpacity={ACTIVE_BUTTON_OPACITY}>
    <Image
      resizeMode="contain"
      source={img}
      style={styles.listItem}
    />
  </TouchableOpacity>
))}

    </ScrollView>
  ) : (
    <View
      style={{
        ...styles.list,
        ...styles.loadingIndicator,
      }}>
      <ActivityIndicator color={AppColors.PrimaryBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
    height: 183,
  },
  listItem: {
    height: 183,
    width: 400,
  },
  loadingIndicator: {
    marginLeft: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
