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

const WalletOldScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientO3}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.View_5L} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidhY,
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
                navigation.navigate('CryptoBasicsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidnA,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.Views6} pointerEvents={'auto'}>
          <Image
            style={styles.ImageDo}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewOM,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Texteo, { color: theme.colors.surface }]}>
            {'Crypto Wallets'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperOC}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemJn}>
              <Image
                style={styles.Imageav}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextUh, { color: theme.colors.light }]}>
                {'What is a Crypto Wallet'}
              </Text>

              <View style={styles.ViewIL} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconfC}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textx8, { color: theme.colors.light }]}>
                  {
                    "To use Web 3.0, the first thing you'll need is a crypto wallet. "
                  }
                </Text>
              </View>

              <View style={styles.Viewaa} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEg}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextWK, { color: theme.colors.light }]}>
                  {
                    'All your interactions, such as purchases and sales, will be tied to the wallet you use.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewcJ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconzr}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextTI, { color: theme.colors.light }]}>
                  {'You can also own more than one wallet.\n'}
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemzL}>
              <Image
                style={styles.ImagegS}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextJQ, { color: theme.colors.light }]}>
                {'Types of Wallets'}
              </Text>

              <View style={styles.ViewJZ} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconfZ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextAb, { color: theme.colors.light }]}>
                  {
                    'There are software(hot) and hardware(cold) wallets. Software wallets are easier to access but less secure, where hardware wallets are the ideal option for larger amounts of crypto.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_60} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconrY}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textd6, { color: theme.colors.light }]}>
                  {
                    'Custodial Wallets: When you buy crypto from a centralized exchange, your coins are put in a wallet that is technically owned by that exchange. It is recommended to move your money to wallets where you have the private key.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemt9}>
              <Text style={[styles.Textf6, { color: theme.colors.light }]}>
                {'Need to Know Vocab'}
              </Text>

              <View style={styles.View_6y} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconex}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextFH, { color: theme.colors.light }]}>
                  {
                    'Private Key: A secret number that is used in cryptography, similar to a password. \nDO NOT SHARE THESE WITH ANYONE.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewea} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconKj}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextaB, { color: theme.colors.light }]}>
                  {
                    'Seed Phrase: Words generated by your cryptocurrency wallet that give you access to the crypto associated with that wallet. \nDO NOT SHARE THIS WITH ANYONE.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewCu} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconT9}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextAo, { color: theme.colors.light }]}>
                  {
                    'Wallet Address: A unique string of numbers and letters (also called a public key) that people can use to send you cryptocurrency, which are transacted and verified on the blockchain transactions.\nThis is what you give people to pay you crypto.'
                  }
                </Text>
              </View>

              <View style={styles.Viewde} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_6e}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextxZ, { color: theme.colors.light }]}>
                  {
                    'ENS(Ethereum Name Service): A name and lookup service built on the Ethereum blockchain that allows crypto users to interact/pay each other, wallet to wallet.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemux}>
              <View pointerEvents={'auto'}>
                <Text style={[styles.Text_3j, { color: theme.colors.light }]}>
                  {'Top Crypto Wallets'}
                </Text>

                <View style={styles.ViewPz} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconhW}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://metamask.io/');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Metamask (Ethereum Wallet)'}
                  />
                </View>

                <View style={styles.ViewHK} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconGJ}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://www.coinbase.com/wallet');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Coinbase (Non-Custodial)'}
                  />
                </View>

                <View style={styles.ViewDt} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconiH}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://trustwallet.com/');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Trust (Mobile-Only Decentralized Wallet)'}
                  />
                </View>

                <View style={styles.Viewzv} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconXt}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://phantom.app/');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Phantom (Solana Wallet)'}
                  />
                </View>

                <View style={styles.Viewxd} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconwg}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://www.ledger.com/');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Ledger (Hardware)'}
                  />
                </View>

                <View style={styles.ViewaX} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconQF}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/dot-circle-o'}
                  />
                  <Link
                    onPress={() => {
                      try {
                        Linking.openURL('https://trezor.io/');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={{ color: theme.colors.primary }}
                    title={'Trezor (Hardware)'}
                  />
                </View>
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewcI} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('DAOsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_2j,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nThe Communities Behind the Blockchain'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidhY: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidnA: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  View_5L: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageDo: {
    width: 75,
    height: 75,
  },
  Views6: {
    alignItems: 'center',
  },
  Texteo: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewOM: {
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
  Imageav: {
    width: '100%',
    height: 200,
  },
  TextUh: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconfC: {
    right: 8,
  },
  Textx8: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewIL: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconEg: {
    right: 8,
  },
  TextWK: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewaa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconzr: {
    right: 8,
  },
  TextTI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewcJ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemJn: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagegS: {
    width: '100%',
    height: 200,
  },
  TextJQ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconfZ: {
    right: 8,
  },
  TextAb: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewJZ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconrY: {
    right: 8,
  },
  Textd6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_60: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemzL: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Textf6: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconex: {
    right: 8,
  },
  TextFH: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_6y: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconKj: {
    right: 8,
  },
  TextaB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconT9: {
    right: 8,
  },
  TextAo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewCu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_6e: {
    right: 8,
  },
  TextxZ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewde: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemt9: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Text_3j: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconhW: {
    right: 8,
  },
  ViewPz: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconGJ: {
    right: 8,
  },
  ViewHK: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconiH: {
    right: 8,
  },
  ViewDt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconXt: {
    right: 8,
  },
  Viewzv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconwg: {
    right: 8,
  },
  Viewxd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconQF: {
    right: 8,
  },
  ViewaX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemux: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperOC: {
    width: '100%',
    height: 450,
  },
  ButtonSolid_2j: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewcI: {
    alignSelf: 'center',
  },
  LinearGradientO3: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(WalletOldScreen);
