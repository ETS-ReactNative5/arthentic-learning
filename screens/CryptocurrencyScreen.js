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

const CryptocurrencyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientyK}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewCa} pointerEvents={'auto'}>
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
              styles.ButtonSolidXd,
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
              styles.ButtonSolidjI,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewUa} pointerEvents={'auto'}>
          <Image
            style={styles.ImagebN}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.Views6,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextWk, { color: theme.colors.surface }]}>
            {'Cryptocurrency'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperkU}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemzS}>
              <Image
                style={styles.ImageUd}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextC0, { color: theme.colors.light }]}>
                {'Currency is Now Fully Digital'}
              </Text>

              <View style={styles.Viewkn} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3N}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextjN, { color: theme.colors.light }]}>
                  {
                    'Cryptocurrencies allow the transaction of any type of value without intermediaries.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewsh} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_2E}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textm5, { color: theme.colors.light }]}>
                  {
                    'Running on the blockchain allows people to trust one another as all the transactions are visible on the ledger.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_92} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icongw}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextaF, { color: theme.colors.light }]}>
                  {
                    'Both coins and tokens are cryptocurrency, but coins have their own blockchain, where tokens are run on another chain. Tokens can be turned into coins with adequate resources.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemGf}>
              <Image
                style={styles.ImageIs}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Texty0, { color: theme.colors.light }]}>
                {'What Are Crypto Coins'}
              </Text>

              <View style={styles.ViewV1} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icontz}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_9O, { color: theme.colors.light }]}>
                  {
                    'Coins are like virtual money, used to buy both internet and real-life stuff.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewqf} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconRx}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TexteB, { color: theme.colors.light }]}>
                  {
                    'Stable Coins have a value based on the value of a government currency, exchange-traded commodities(ETFs), or another cryptocurrency.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewdb} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_5a}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextL4, { color: theme.colors.light }]}>
                  {
                    'Examples of Coins: Ethereum, XRP, Polkadot, Litecoin, Binance Coin, EOS, Tezos, Monero, NEM, ZCash, Dash, Dogecoin'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemNh}>
              <Image
                style={styles.Imageld}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_0c, { color: theme.colors.light }]}>
                {'What Are Crypto Tokens'}
              </Text>

              <View style={styles.ViewOR} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconK3}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_9Q, { color: theme.colors.light }]}>
                  {
                    'Tokens give users property rights, the ability to own a piece of the internet.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewl0} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconVQ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextDq, { color: theme.colors.light }]}>
                  {
                    'Wrapped Tokens: A token that represents a cryptocurrency from another blockchain or token standard; the wrapped token can be used on certain non-native blockchains and later redeemed for the original cryptocurrency.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewO9} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_92}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextuV, { color: theme.colors.light }]}>
                  {
                    'Examples of Tokens: Utility Tokens, Security Tokens, Asset Tokens, Stablecoins, Payment Tokens, Equity Tokens and Non-Fungible Tokens (NFTs)'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemIN}>
              <Text style={[styles.TextCE, { color: theme.colors.light }]}>
                {'Airdrop'}
              </Text>

              <View style={styles.ViewRU} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconDI}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextNB, { color: theme.colors.light }]}>
                  {
                    'A distribution of a cryptocurrency token or coin, usually for free, to numerous wallet addresses. Airdrops are a way of gaining attention, building goodwill and incentivizing adoption.\n'
                  }
                </Text>
              </View>

              <Text style={[styles.Textcp, { color: theme.colors.light }]}>
                {'Staking'}
              </Text>

              <View style={styles.Viewqo} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconNz}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextMC, { color: theme.colors.light }]}>
                  {
                    'A way of earning rewards for holding certain cryptocurrencies.'
                  }
                </Text>
              </View>

              <Text style={[styles.TextaB, { color: theme.colors.light }]}>
                {'Burning'}
              </Text>

              <View style={styles.View_3J} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconC5}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextnE, { color: theme.colors.light }]}>
                  {'Removing coins/tokens from the available supply.'}
                </Text>
              </View>

              <Text style={[styles.Text_8f, { color: theme.colors.light }]}>
                {'ICO (Initial Coin Offering)'}
              </Text>

              <View style={styles.View_4p} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconXH}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textkb, { color: theme.colors.light }]}>
                  {
                    'Initial Coin Offerings are a method of raising funds for a new crypto project. '
                  }
                </Text>
              </View>

              <View style={styles.View_7c} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconmO}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_1d, { color: theme.colors.light }]}>
                  {
                    'It is the cryptocurrency equivalent of an Initial Public Offering (IPO).'
                  }
                </Text>
              </View>

              <View style={styles.Viewzb} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcontJ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextPx, { color: theme.colors.light }]}>
                  {'Always do research before investing in a new project.'}
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_1y}>
              <Text style={[styles.TextcU, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewdH} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconwv}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.ledger.com/academy/basic-basics/about-crypto/what-is-cryptocurrency '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Ledger Explains Cryptocurrency'}
                />
              </View>

              <View style={styles.Viewx9} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconxZ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.oswego.edu/cts/basics-about-cryptocurrency'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'State University of New York on Cryptocurrency'}
                />
              </View>

              <View style={styles.ViewhD} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconFo}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://online.stanford.edu/future-for-cryptocurrency '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Stanford on the Future of Cryptocurrency'}
                />
              </View>

              <View style={styles.ViewEa} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconWX}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp#toc-what-is-an-initial-coin-offering-ico'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Investopedia Defines ICOs'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewsY} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('DefiScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidYR,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nDecentralized Finance'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidXd: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidjI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewCa: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImagebN: {
    width: 75,
    height: 75,
  },
  ViewUa: {
    alignItems: 'center',
  },
  TextWk: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  Views6: {
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
  ImageUd: {
    width: '100%',
    height: 200,
  },
  TextC0: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_3N: {
    right: 8,
  },
  TextjN: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewkn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_2E: {
    right: 8,
  },
  Textm5: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewsh: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icongw: {
    right: 8,
  },
  TextaF: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_92: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemzS: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageIs: {
    width: '100%',
    height: 200,
  },
  Texty0: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icontz: {
    right: 8,
  },
  Text_9O: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewV1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconRx: {
    right: 8,
  },
  TexteB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewqf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_5a: {
    right: 8,
  },
  TextL4: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewdb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemGf: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Imageld: {
    width: '100%',
    height: 200,
  },
  Text_0c: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconK3: {
    right: 8,
  },
  Text_9Q: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewOR: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconVQ: {
    right: 8,
  },
  TextDq: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewl0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_92: {
    right: 8,
  },
  TextuV: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewO9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemNh: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextCE: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconDI: {
    right: 8,
  },
  TextNB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewRU: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Textcp: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconNz: {
    right: 8,
  },
  TextMC: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewqo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextaB: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconC5: {
    right: 8,
  },
  TextnE: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_3J: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Text_8f: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconXH: {
    right: 8,
  },
  Textkb: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_4p: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconmO: {
    right: 8,
  },
  Text_1d: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_7c: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IcontJ: {
    right: 8,
  },
  TextPx: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewzb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemIN: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextcU: {
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconwv: {
    right: 8,
  },
  ViewdH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconxZ: {
    right: 8,
  },
  Viewx9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconFo: {
    right: 8,
  },
  ViewhD: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconWX: {
    right: 8,
  },
  ViewEa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItem_1y: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperkU: {
    width: '100%',
    height: 465,
  },
  ButtonSolidYR: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewsY: {
    alignSelf: 'center',
  },
  LinearGradientyK: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(CryptocurrencyScreen);
