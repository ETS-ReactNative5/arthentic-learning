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

const DappsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradient_9b}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.View_5A} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidB3,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_8m,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.View_2y} pointerEvents={'auto'}>
          <Image
            style={styles.ImageP5}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.View_9q,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextOB, { color: theme.colors.surface }]}>
            {'Decentralized Apps'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperCe}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItem_4S}>
              <Image
                style={styles.ImageKV}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextmY, { color: theme.colors.light }]}>
                {'DApps, Entering a World of Trust'}
              </Text>

              <View style={styles.ViewDZ} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconmP}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textt6, { color: theme.colors.light }]}>
                  {
                    'Decentralized Applications, as the name suggests, are the backbone of web3. With the ability to interact with the system using only a crypto wallet, several new types of apps have sprung up.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewww} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconjk}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextFR, { color: theme.colors.light }]}>
                  {
                    'Types of DApps: Play-to-Earn Games, Finances, Social Media, etc.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_9w} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconun}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textdz, { color: theme.colors.light }]}>
                  {
                    'Remember: The transfer of control and decision-making from a centralized entity (individual, organization, or group thereof) to a distributed network is Decentralization.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemWo}>
              <Image
                style={styles.Image_1o}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextBL, { color: theme.colors.light }]}>
                {'Play-to-Earn Games'}
              </Text>

              <View style={styles.ViewJn} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUa}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textpi, { color: theme.colors.light }]}>
                  {
                    'While traditional games offer no value for completing a game, dApp games can give users a stream of revenue to play the game.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewJ9} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconwa}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextaJ, { color: theme.colors.light }]}>
                  {
                    'Most of these games will payout rewards in a combination of NFTs and in-game cryptocurrency and can be traded/sold to other players or external traders.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemJN}>
              <Image
                style={styles.ImageXm}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textus, { color: theme.colors.light }]}>
                {'Finances'}
              </Text>

              <View style={styles.View_2c} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_6V}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextUT, { color: theme.colors.light }]}>
                  {
                    'Traditional financial applications require a slew of middlemen to complete a transaction.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewp8} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUT}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textav, { color: theme.colors.light }]}>
                  {
                    'Under Decentralized Finance, the lenders and borrowers can connect directly and securely.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemBB}>
              <Image
                style={styles.Imagenz}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextB5, { color: theme.colors.light }]}>
                {'Social Media'}
              </Text>

              <View style={styles.ViewkC} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconMB}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextLw, { color: theme.colors.light }]}>
                  {
                    'While current social media can be censored and geared towards a political bias, the decentralized model allows the community to remain in control\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemRS}>
              <Text style={[styles.TextoL, { color: theme.colors.light }]}>
                {'Find Some DApps'}
              </Text>

              <View style={styles.ViewLK} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconc5}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL('https://ethereum.org/en/dapps/ ');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Ethereum DApps'}
                />
              </View>

              <View style={styles.View_9G} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_1v}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL('https://solana.com/ecosystem \n');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Solana DApps'}
                />
              </View>

              <View style={styles.ViewoH} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconPA}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://polygon.technology/ecosystem \n'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Polygon DApps'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewVp} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('CryptocurrencyScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidrX,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'For Collectors:\nCryptocurrency'}
            />
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('BurnoutScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidkD,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'For Artists:\nStress Management'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidB3: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolid_8m: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_5A: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageP5: {
    width: 75,
    height: 75,
  },
  View_2y: {
    alignItems: 'center',
  },
  TextOB: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_9q: {
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
  ImageKV: {
    width: '100%',
    height: 200,
  },
  TextmY: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconmP: {
    right: 8,
  },
  Textt6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewDZ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconjk: {
    right: 8,
  },
  TextFR: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewww: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconun: {
    right: 8,
  },
  Textdz: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_9w: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_4S: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Image_1o: {
    width: '100%',
    height: 200,
  },
  TextBL: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconUa: {
    right: 8,
  },
  Textpi: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewJn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconwa: {
    right: 8,
  },
  TextaJ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewJ9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemWo: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageXm: {
    width: '100%',
    height: 200,
  },
  Textus: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_6V: {
    right: 8,
  },
  TextUT: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_2c: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconUT: {
    right: 8,
  },
  Textav: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewp8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemJN: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Imagenz: {
    width: '100%',
    height: 200,
  },
  TextB5: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconMB: {
    right: 8,
  },
  TextLw: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewkC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemBB: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextoL: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconc5: {
    right: 8,
  },
  ViewLK: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_1v: {
    right: 8,
  },
  View_9G: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconPA: {
    right: 8,
  },
  ViewoH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemRS: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperCe: {
    width: '100%',
    height: 450,
  },
  ButtonSolidrX: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 170,
    height: 60,
  },
  ButtonSolidkD: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 170,
    height: 60,
  },
  ViewVp: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  LinearGradient_9b: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(DappsScreen);
