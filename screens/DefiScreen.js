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

const DefiScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientwY}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewO6} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'InvestorScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidKR,
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
              styles.ButtonSolidNV,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewbP} pointerEvents={'auto'}>
          <Image
            style={styles.ImageG9}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.View_5J,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Text_0v, { color: theme.colors.surface }]}>
            {'Decentralized Finance'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.Swiperfa}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemvv}>
              <Image
                style={styles.ImageCt}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextkZ, { color: theme.colors.light }]}>
                {'Introducing a New System of Value'}
              </Text>

              <View style={styles.View_2d} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEV}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextYP, { color: theme.colors.light }]}>
                  {
                    'Decentralized Finance is one of the most important aspects of the coming web3 rollout, focusing on peer-to-peer transactions.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewIW} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconbt}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textbg, { color: theme.colors.light }]}>
                  {
                    'Smart contracts are used to create trust between anonymous parties.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_8m} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconGb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textkg, { color: theme.colors.light }]}>
                  {
                    'Most DeFi regulation is currently under debate in the United States.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemen}>
              <Image
                style={styles.ImageuC}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_1t, { color: theme.colors.light }]}>
                {'Liquidity Pooling'}
              </Text>

              <View style={styles.ViewAg} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconRp}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextOQ, { color: theme.colors.light }]}>
                  {
                    'A collection of multiple types of currency locked in a smart contract. Liquidity pools are used to facilitate decentralized trading, lending, and backbone of many decentralized exchanges (DEX)\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewK3} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconwb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextFj, { color: theme.colors.light }]}>
                  {
                    'The funds run on a ratio of one currency to another. For example, an investor will put 50 of Coin A and 50 of Coin B(Assuming equal value) into the pool. A trader can then trade their Coin A for Coin B using the pool. The price of the coins in the pool will change so that there’s always an equal ratio.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemwp}>
              <Text style={[styles.Textmp, { color: theme.colors.light }]}>
                {'Automated Market Maker'}
              </Text>

              <View style={styles.ViewkG} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconWi}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextSL, { color: theme.colors.light }]}>
                  {
                    'The algorithm used in crypto to represent the supply and demand of a currency.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewCS} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconHq}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextQw, { color: theme.colors.light }]}>
                  {
                    'In a Liquidity Pool, the AMM allows seamless transaction of different currencies at a fair market price.'
                  }
                </Text>
              </View>

              <View style={styles.View_8M} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconaH}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextdZ, { color: theme.colors.light }]}>
                  {
                    'Rather than having a centralized source where every coin’s price is listed, the AMM calculates a fair price using the blockchain’s inherent data. '
                  }
                </Text>
              </View>

              <Text style={[styles.TextcX, { color: theme.colors.light }]}>
                {'Impermanent Loss'}
              </Text>

              <View style={styles.View_7Z} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconze}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextVj, { color: theme.colors.light }]}>
                  {
                    'The opportunity cost of not putting money into a liquidity pool.'
                  }
                </Text>
              </View>

              <View style={styles.Viewlb} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconH1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextLV, { color: theme.colors.light }]}>
                  {
                    'For example, when an investor puts an amount of Coin A into the pool, the Automated Market Maker can change the price so it’s worth less than the current market value.'
                  }
                </Text>
              </View>

              <View style={styles.View_33} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconpj}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_9h, { color: theme.colors.light }]}>
                  {
                    'To avoid this, only put money into large liquidity pools with a form of currency stability.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemtn}>
              <Text style={[styles.TextaT, { color: theme.colors.light }]}>
                {'Flash Loans'}
              </Text>

              <View style={styles.VieweS} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconpE}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextR3, { color: theme.colors.light }]}>
                  {
                    'This feature of smart contracts allows the acquisition and use of an uncollateralized loan of any amount, as long as it’s paid back in the same blockchain transaction.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_7e} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconxF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textzs, { color: theme.colors.light }]}>
                  {
                    'A smart contract can loan $1M(in stablecoin), buy Eth in one marketplace, sell the Eth at another marketplace for profit, and pay back the $1M loan leaving the user with the profit. This example is called Flash Loan Arbitrage.'
                  }
                </Text>
              </View>

              <Text style={[styles.TextgC, { color: theme.colors.light }]}>
                {'Yield Farming'}
              </Text>

              <View style={styles.View_2a} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_4b}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_6G, { color: theme.colors.light }]}>
                  {
                    'Yield farming is a way to make more crypto with your crypto, The smart contract moves crypto around between different lending marketplaces to maximize returns.'
                  }
                </Text>
              </View>

              <Text style={[styles.TexthJ, { color: theme.colors.light }]}>
                {'(Some) Crypto Exchanges'}
              </Text>

              <View style={styles.View_0Z} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconWy}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texttq, { color: theme.colors.light }]}>
                  {
                    'Centralized: Binance Chain, Coinbase, eTorro, Gemini, crypto.com'
                  }
                </Text>
              </View>

              <View style={styles.ViewD4} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconCE}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_0g, { color: theme.colors.light }]}>
                  {
                    'Decentralized: dYdX, 1inch, Balancer, PancakeSwap, SushiSwap, UniSwap'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemaT}>
              <Text style={[styles.TextLL, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.Viewd1} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icony1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://corpgov.law.harvard.edu/2021/01/14/defi-and-the-future-of-finance/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Harvard Explains DeFi'}
                />
              </View>

              <View style={styles.View_0X} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icontu}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://definetwork.berkeley.edu/initiatives/ '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"Berkeley's Take on DeFi"}
                />
              </View>

              <View style={styles.Viewiq} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_9n}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://wifpr.wharton.upenn.edu/wp-content/uploads/2021/06/DeFi-Policy-Maker-Toolkit-Final.pdf'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"World Economic Forum's Paper on DeFi"}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.View_4m} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('TaxesScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_9v,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nTaxes for Crypto'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidKR: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidNV: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewO6: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageG9: {
    width: 75,
    height: 75,
  },
  ViewbP: {
    alignItems: 'center',
  },
  Text_0v: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_5J: {
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
  ImageCt: {
    width: '100%',
    height: 200,
  },
  TextkZ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconEV: {
    right: 8,
  },
  TextYP: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_2d: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconbt: {
    right: 8,
  },
  Textbg: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewIW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconGb: {
    right: 8,
  },
  Textkg: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_8m: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemvv: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageuC: {
    width: '100%',
    height: 200,
  },
  Text_1t: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconRp: {
    right: 8,
  },
  TextOQ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewAg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconwb: {
    right: 8,
  },
  TextFj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewK3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemen: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Textmp: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconWi: {
    right: 8,
  },
  TextSL: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewkG: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconHq: {
    right: 8,
  },
  TextQw: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewCS: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconaH: {
    right: 8,
  },
  TextdZ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_8M: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextcX: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconze: {
    right: 8,
  },
  TextVj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_7Z: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconH1: {
    right: 8,
  },
  TextLV: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewlb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconpj: {
    right: 8,
  },
  Text_9h: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_33: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemwp: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextaT: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconpE: {
    right: 8,
  },
  TextR3: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  VieweS: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconxF: {
    right: 8,
  },
  Textzs: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_7e: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextgC: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_4b: {
    right: 8,
  },
  Text_6G: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_2a: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TexthJ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconWy: {
    right: 8,
  },
  Texttq: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_0Z: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconCE: {
    right: 8,
  },
  Text_0g: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewD4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemtn: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextLL: {
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icony1: {
    right: 8,
  },
  Viewd1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icontu: {
    right: 8,
  },
  View_0X: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_9n: {
    right: 8,
  },
  Viewiq: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemaT: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Swiperfa: {
    width: '100%',
    height: 465,
  },
  ButtonSolid_9v: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  View_4m: {
    alignSelf: 'center',
  },
  LinearGradientwY: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(DefiScreen);
