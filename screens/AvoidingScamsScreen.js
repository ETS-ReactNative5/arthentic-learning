import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const AvoidingScamsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientRc}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.Viewum} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'UniversalScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_1o,
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
              styles.ButtonSolidZ2,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.View_2f} pointerEvents={'auto'}>
          <Image
            style={styles.Imagekd}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.View_0P,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Texta7, { color: theme.colors.surface }]}>
            {'Avoiding Scams'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperGC}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemmr}>
              <View style={styles.Viewhh} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcontY}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textow, { color: theme.colors.light }]}>
                  {
                    'Pump and Dump\nWhen a group pumps the price, then the scammers dump their shares, dropping the price. \n'
                  }
                </Text>
              </View>

              <View style={styles.View_3h} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconr6}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextRB, { color: theme.colors.light }]}>
                  {
                    'Always do research on your investments. If a single group holds a majority of the shares or is the only one recommending an investment, that could potentially be cause for concern.'
                  }
                </Text>
              </View>

              <View style={styles.Viewiw} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconJk}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TexthT, { color: theme.colors.light }]}>
                  {
                    'Ponzi Schemes\nA form of fraud that lures investors and pays profits to earlier investors with funds from more recent investors. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewqJ} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconVY}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textwd, { color: theme.colors.light }]}>
                  {
                    'Always do research on your investments and use common sense. It’s not possible for someone to guarantee astronomical returns on any coin.'
                  }
                </Text>
              </View>

              <View style={styles.Viewpy} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconDb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextbZ, { color: theme.colors.light }]}>
                  {
                    'ICO Fraud\nAlso known as a Rugpull, scammers create a fake coin which can be dumped into decentralized marketplaces, like Uniswap. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewUl} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconMX}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_79, { color: theme.colors.light }]}>
                  {
                    'Always research any coins you invest into. If the coin has a single user holding a large number of tokens, that’s something to be suspicious of.'
                  }
                </Text>
              </View>

              <View style={styles.View_5P} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconhZ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextwO, { color: theme.colors.light }]}>
                  {
                    'On Ethereum, check etherscan to see how the coin is distributed. '
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemGb}>
              <View style={styles.ViewhV} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconv0}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextGa, { color: theme.colors.light }]}>
                  {
                    'Common Hacking\nThe common perception is hacking involves a lot of complex coding. Unfortunately the truth is hackers use sneaky phishing techniques to fool you into giving them your data.\n'
                  }
                </Text>
              </View>

              <View style={styles.VieweT} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconDu}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textkr, { color: theme.colors.light }]}>
                  {
                    'Always double check that the app or website you’re using is provided by a legitimate source that you trust.'
                  }
                </Text>
              </View>

              <View style={styles.ViewZC} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconYQ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextKm, { color: theme.colors.light }]}>
                  {
                    'Most browsers will check for an SSL certificate, which is usually shown as a lock icon in the URL bar.'
                  }
                </Text>
              </View>

              <View style={styles.Viewbg} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconWQ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_9V, { color: theme.colors.light }]}>
                  {
                    'Hardware Hacking\nBad companies will sell fake phones and crypto wallets, which are built to track everything you do on the device.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewaR} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconYq}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextUs, { color: theme.colors.light }]}>
                  {
                    'Always be sure to buy technology from reputable sources. When buying second hand equipment, double check that the device comes from the manufacturer. Also clean/erase any previous data before using pre-owned tech.'
                  }
                </Text>
              </View>

              <View style={styles.ViewcL} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconBI}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextOr, { color: theme.colors.light }]}>
                  {
                    'Giveaway Scams\nAlso known as Honeypots, these scams involve asking for information or a small amount of coin to get a much bigger reward.'
                  }
                </Text>
              </View>

              <View style={styles.Views7} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3e}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_1q, { color: theme.colors.light }]}>
                  {
                    'Golden Rule: If it seems too good to be true it probably is.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemHe}>
              <View style={styles.View_9j} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconhh}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextY0, { color: theme.colors.light }]}>
                  {
                    'Phony Job Offers\nWhile the web3 space will definitely change how people are hired, pretty much every role should currently have a salary, benefits, and an employment contract. Real employers do not require you to buy your own equipment or invest to work at their business.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewFJ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_2x}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textj8, { color: theme.colors.light }]}>
                  {
                    'Impersonations\nCelebrities don’t usually give-away free things or hire through social media. Make sure to always double check who’s contacting you. If it seems too good to be true, it probably is.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewmj} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconCL}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextpT, { color: theme.colors.light }]}>
                  {
                    'Malware\nThe data on internet connected devices always has a small chance of being stolen. Users should always be aware of what information they are giving their devices, and try to limit it to reduce hacking exposure.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewsG} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_94}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextX4, { color: theme.colors.light }]}>
                  {
                    'Wash Trading\nSellers of a collectible, such as an NFT, can purchase the item using their own money to over-inflate the item’s value. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewHJ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconi2}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_5B, { color: theme.colors.light }]}>
                  {
                    'This has been illegal in the US since 1936, however the crypto market does not have this regulation yet. '
                  }
                </Text>
              </View>

              <View style={styles.ViewbZ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconc2}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textzu, { color: theme.colors.light }]}>
                  {'Always do as much research as possible!'}
                </Text>
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewBN} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('FeedbackScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidoc,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nComing Soon'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid_1o: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidZ2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewum: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Imagekd: {
    width: 75,
    height: 75,
  },
  View_2f: {
    alignItems: 'center',
  },
  Texta7: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_0P: {
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
  IcontY: {
    right: 8,
  },
  Textow: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewhh: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconr6: {
    right: 8,
  },
  TextRB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_3h: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconJk: {
    right: 8,
  },
  TexthT: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewiw: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconVY: {
    right: 8,
  },
  Textwd: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewqJ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconDb: {
    right: 8,
  },
  TextbZ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewpy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconMX: {
    right: 8,
  },
  Text_79: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewUl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconhZ: {
    right: 8,
  },
  TextwO: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_5P: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  SwiperItemmr: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Iconv0: {
    right: 8,
  },
  TextGa: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewhV: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconDu: {
    right: 8,
  },
  Textkr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  VieweT: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconYQ: {
    right: 8,
  },
  TextKm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewZC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconWQ: {
    right: 8,
  },
  Text_9V: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewbg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconYq: {
    right: 8,
  },
  TextUs: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewaR: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  IconBI: {
    right: 8,
  },
  TextOr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewcL: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_3e: {
    right: 8,
  },
  Text_1q: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Views7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  SwiperItemGb: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Iconhh: {
    right: 8,
  },
  TextY0: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_9j: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_2x: {
    right: 8,
  },
  Textj8: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewFJ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconCL: {
    right: 8,
  },
  TextpT: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewmj: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_94: {
    right: 8,
  },
  TextX4: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewsG: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconi2: {
    right: 8,
  },
  Text_5B: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewHJ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  Iconc2: {
    right: 8,
  },
  Textzu: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewbZ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 12,
  },
  SwiperItemHe: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperGC: {
    width: '100%',
    height: 450,
  },
  ButtonSolidoc: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewBN: {
    alignSelf: 'center',
  },
  LinearGradientRc: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(AvoidingScamsScreen);
