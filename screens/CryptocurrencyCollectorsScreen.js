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

const CryptocurrencyCollectorsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientbS}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewHg} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidTI,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('CollectorMenuScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidiM,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.ViewYU} pointerEvents={'auto'}>
          <Image
            style={styles.ImageaT}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.View_4m,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Text_3A, { color: theme.colors.surface }]}>
            {'Cryptocurrency'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.Swiperkk}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemeY}>
              <Image
                style={styles.ImageMn}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textmn, { color: theme.colors.light }]}>
                {'Currency is Now Fully Digital'}
              </Text>

              <View style={styles.ViewPb} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconMg}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_4o, { color: theme.colors.light }]}>
                  {
                    'Cryptocurrencies allow the transaction of any type of value without intermediaries.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewgW} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconbz}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textsm, { color: theme.colors.light }]}>
                  {
                    'Running on the blockchain allows people to trust one another as all the transactions are visible on the ledger.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewEK} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconHx}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextJQ, { color: theme.colors.light }]}>
                  {
                    'Both coins and tokens are cryptocurrency, but coins have their own blockchain, where tokens are run on another chain. Tokens can be turned into coins with adequate resources.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_5N}>
              <Image
                style={styles.ImageLp}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextcJ, { color: theme.colors.light }]}>
                {'What Are Crypto Coins'}
              </Text>

              <View style={styles.ViewNa} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconjJ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextTt, { color: theme.colors.light }]}>
                  {
                    'Coins are like virtual money, used to buy both internet and real-life stuff.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewqs} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconPx}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texty8, { color: theme.colors.light }]}>
                  {
                    'Stable Coins have a value based on the value of a government currency, exchange-traded commodities(ETFs), or another cryptocurrency.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewkk} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconI1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextH3, { color: theme.colors.light }]}>
                  {
                    'Examples of Coins: Ethereum, XRP, Polkadot, Litecoin, Binance Coin, EOS, Tezos, Monero, NEM, ZCash, Dash, Dogecoin'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemH0}>
              <Image
                style={styles.ImagebG}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextZo, { color: theme.colors.light }]}>
                {'What Are Crypto Tokens'}
              </Text>

              <View style={styles.Viewti} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconue}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextDt, { color: theme.colors.light }]}>
                  {
                    'Tokens give users property rights, the ability to own a piece of the internet.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewf4} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEw}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_3y, { color: theme.colors.light }]}>
                  {
                    'Wrapped Tokens: A token that represents a cryptocurrency from another blockchain or token standard; the wrapped token can be used on certain non-native blockchains and later redeemed for the original cryptocurrency.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewIW} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconRz}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextxX, { color: theme.colors.light }]}>
                  {
                    'Examples of Tokens: Utility Tokens, Security Tokens, Asset Tokens, Stablecoins, Payment Tokens, Equity Tokens and Non-Fungible Tokens (NFTs)'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemDT}>
              <Text style={[styles.TextH6, { color: theme.colors.light }]}>
                {'Airdrop'}
              </Text>

              <View style={styles.View_5I} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icona1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textud, { color: theme.colors.light }]}>
                  {
                    'A distribution of a cryptocurrency token or coin, usually for free, to numerous wallet addresses. Airdrops are a way of gaining attention, building goodwill and incentivizing adoption.\n'
                  }
                </Text>
              </View>

              <Text style={[styles.Textq7, { color: theme.colors.light }]}>
                {'Staking'}
              </Text>

              <View style={styles.ViewnK} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconxw}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textgn, { color: theme.colors.light }]}>
                  {
                    'A way of earning rewards for holding certain cryptocurrencies.'
                  }
                </Text>
              </View>

              <Text style={[styles.TextM3, { color: theme.colors.light }]}>
                {'Burning'}
              </Text>

              <View style={styles.ViewWm} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3K}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textpu, { color: theme.colors.light }]}>
                  {'Removing coins/tokens from the available supply.'}
                </Text>
              </View>

              <Text style={[styles.TextXO, { color: theme.colors.light }]}>
                {'ICO (Initial Coin Offering)'}
              </Text>

              <View style={styles.ViewlE} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconZb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextEv, { color: theme.colors.light }]}>
                  {
                    'Initial Coin Offerings are a method of raising funds for a new crypto project. '
                  }
                </Text>
              </View>

              <View style={styles.View_81} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconRW}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textvo, { color: theme.colors.light }]}>
                  {
                    'It is the cryptocurrency equivalent of an Initial Public Offering (IPO).'
                  }
                </Text>
              </View>

              <View style={styles.ViewHW} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconDJ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextmM, { color: theme.colors.light }]}>
                  {'Always do research before investing in a new project.'}
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemhE}>
              <Text style={[styles.Text_1c, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewQI} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconjp}
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

              <View style={styles.ViewdN} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconJ1}
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

              <View style={styles.ViewIQ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3Z}
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

              <View style={styles.ViewzX} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconq2}
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

          <View style={styles.Viewg3} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('DefiScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidaB,
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
  ButtonSolidTI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidiM: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewHg: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageaT: {
    width: 75,
    height: 75,
  },
  ViewYU: {
    alignItems: 'center',
  },
  Text_3A: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_4m: {
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
  ImageMn: {
    width: '100%',
    height: 200,
  },
  Textmn: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconMg: {
    right: 8,
  },
  Text_4o: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewPb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconbz: {
    right: 8,
  },
  Textsm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewgW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconHx: {
    right: 8,
  },
  TextJQ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewEK: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemeY: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageLp: {
    width: '100%',
    height: 200,
  },
  TextcJ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconjJ: {
    right: 8,
  },
  TextTt: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewNa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconPx: {
    right: 8,
  },
  Texty8: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewqs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconI1: {
    right: 8,
  },
  TextH3: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewkk: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_5N: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagebG: {
    width: '100%',
    height: 200,
  },
  TextZo: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconue: {
    right: 8,
  },
  TextDt: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewti: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconEw: {
    right: 8,
  },
  Text_3y: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewf4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconRz: {
    right: 8,
  },
  TextxX: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewIW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemH0: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextH6: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icona1: {
    right: 8,
  },
  Textud: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_5I: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Textq7: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconxw: {
    right: 8,
  },
  Textgn: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewnK: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextM3: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_3K: {
    right: 8,
  },
  Textpu: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewWm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextXO: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconZb: {
    right: 8,
  },
  TextEv: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewlE: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconRW: {
    right: 8,
  },
  Textvo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_81: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconDJ: {
    right: 8,
  },
  TextmM: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewHW: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemDT: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Text_1c: {
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconjp: {
    right: 8,
  },
  ViewQI: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconJ1: {
    right: 8,
  },
  ViewdN: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_3Z: {
    right: 8,
  },
  ViewIQ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconq2: {
    right: 8,
  },
  ViewzX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemhE: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Swiperkk: {
    width: '100%',
    height: 465,
  },
  ButtonSolidaB: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  Viewg3: {
    alignSelf: 'center',
  },
  LinearGradientbS: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(CryptocurrencyCollectorsScreen);
