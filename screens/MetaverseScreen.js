import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const MetaverseScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientWr}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewkT} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidOr,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Home'}
          />
        </View>

        <View style={styles.View_8F} pointerEvents={'auto'}>
          <Image
            style={styles.Image_1W}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewhN,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextFB, { color: theme.colors.surface }]}>
            {'Enter the Metaverse'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperQO}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemjF}>
              <Image
                style={styles.Image_11}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextyR, { color: theme.colors.light }]}>
                {'The Internet Just Got a Playground'}
              </Text>

              <View style={styles.ViewbW} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconsv}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/virtual-reality'}
                />
                <Text style={[styles.TextvU, { color: theme.colors.light }]}>
                  {
                    'Virtual reality worlds are where users will interact with the new internet(web3).\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewIb} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconkq}
                  size={24}
                  color={theme.colors.light}
                  name={'Ionicons/infinite'}
                />
                <Text style={[styles.TextU6, { color: theme.colors.light }]}>
                  {
                    'Many companies are trying to build their version of the metaverse right now. In the future, the best metaverses will connect to each other.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_0N} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconzB}
                  size={24}
                  color={theme.colors.light}
                  name={'Foundation/social-game-center'}
                />
                <Text style={[styles.TextPv, { color: theme.colors.light }]}>
                  {
                    'As a brand new medium for interaction, there will be plenty of opportunity to innovate. For example, companies are exploring virtual real estate, shops, video games, concerts, art galleries, etc.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemeJ}>
              <Text style={[styles.TextUo, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.Viewda} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconx6}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.wired.com/story/what-is-the-metaverse/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Wired Article on the Metaverse'}
                />
              </View>

              <View style={styles.ViewHo} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3b}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.npr.org/2022/02/17/1081508190/ok-i-guess-well-talk-about-the-metaverse'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'NPR Article on Metaverse'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewKm} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('WalletsScreen_CZIN2fUW');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidWo,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nWallets, Your Account for Everything'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidOr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewkT: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  Image_1W: {
    width: 75,
    height: 75,
  },
  View_8F: {
    alignItems: 'center',
  },
  TextFB: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewhN: {
    paddingTop: 16,
    paddingBottom: 16,
    width: 230,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  Image_11: {
    width: '100%',
    height: 200,
  },
  TextyR: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconsv: {
    right: 8,
  },
  TextvU: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewbW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconkq: {
    right: 8,
  },
  TextU6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewIb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconzB: {
    right: 8,
  },
  TextPv: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_0N: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemjF: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextUo: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconx6: {
    right: 8,
  },
  Viewda: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_3b: {
    right: 8,
  },
  ViewHo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemeJ: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperQO: {
    width: '100%',
    height: 450,
  },
  ButtonSolidWo: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewKm: {
    alignSelf: 'center',
  },
  LinearGradientWr: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(MetaverseScreen);
