import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const WalletsScreen_CZIN2fUW = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientxZ}
        endY={100}
        endX={100}
        color1={theme.colors.mediumInverse}
        color2={theme.colors.secondary}
      >
        <View style={styles.Viewk9} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidfQ,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.ViewLD} pointerEvents={'auto'}>
          <Image
            style={styles.Imagear}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollView_0GContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.TextvX, { color: theme.colors.light }]}>
            {'The Web3 Wallet is everything about your personal'}
          </Text>

          <Text style={[styles.TextFs, { color: theme.colors.primary }]}>
            {'Identity'}
          </Text>

          <View style={styles.View_0M} pointerEvents={'auto'}>
            <Text style={[styles.Textpc, { color: theme.colors.light }]}>
              {
                'A Wallet is a tool for accessing the Web3 economy (DeFi, Blockchain, NFTs, DApps, Airdrops, etc.). You can store digital assets securely without needing to trust a third party.'
              }
            </Text>
          </View>

          <View style={styles.ViewcM} pointerEvents={'auto'}>
            <View pointerEvents={'auto'}>
              <Text style={[styles.TextCO, { color: theme.colors.light }]}>
                {'Save Your Seed Phrase'}
              </Text>

              <View style={styles.Viewfv} pointerEvents={'auto'}>
                <View style={styles.ViewJ4} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icont6}
                    name={'Ionicons/wallet'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextRc, { color: theme.colors.light }]}>
                    {
                      "When making a wallet, you'll be asked\nto setup a seed/recovery phrase."
                    }
                  </Text>
                </View>

                <View style={styles.ViewhR} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconwa}
                    name={'Entypo/eye'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textwr, { color: theme.colors.light }]}>
                    {
                      "If you lose access to your computer or \nsmartphone, this is how you'll recover \nall your funds."
                    }
                  </Text>
                </View>

                <View style={styles.View_7k} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconIO}
                    name={'MaterialCommunityIcons/bank-transfer'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Text_8J, { color: theme.colors.light }]}>
                    {'Record your seed phrase and store \nit offline.'}
                  </Text>
                </View>

                <View style={styles.ViewIy} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconRW}
                    name={'MaterialCommunityIcons/account-multiple'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Text_06, { color: theme.colors.light }]}>
                    {'Do NOT share or store the phrase online.'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View pointerEvents={'auto'}>
            <Text style={[styles.Textwe, { color: theme.colors.light }]}>
              {'Top Crypto Wallets'}
            </Text>

            <View style={styles.ViewQQ} pointerEvents={'auto'}>
              <Icon
                style={styles.IconyB}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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

            <View style={styles.Viewnl} pointerEvents={'auto'}>
              <Icon
                style={styles.IconUV}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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

            <View style={styles.Viewr0} pointerEvents={'auto'}>
              <Icon
                style={styles.IconAl}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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

            <View style={styles.ViewT0} pointerEvents={'auto'}>
              <Icon
                style={styles.IconQn}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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

            <View style={styles.ViewNH} pointerEvents={'auto'}>
              <Icon
                style={styles.IconGc}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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

            <View style={styles.View_56} pointerEvents={'auto'}>
              <Icon
                style={styles.Iconse}
                size={24}
                color={theme.colors.light}
                name={'Entypo/controller-record'}
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
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidfQ: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
  },
  Viewk9: {
    alignSelf: 'flex-end',
  },
  Imagear: {
    width: 75,
    height: 75,
  },
  ViewLD: {
    alignItems: 'center',
  },
  TextvX: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextFs: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 77,
    marginTop: 12,
    marginBottom: 24,
  },
  Textpc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
  View_0M: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  TextCO: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Icont6: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextRc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewJ4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconwa: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textwr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewhR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconIO: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_8J: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  View_7k: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconRW: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_06: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewIy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewfv: {
    marginTop: 12,
    marginBottom: 12,
  },
  ViewcM: {
    flexDirection: 'row',
  },
  Textwe: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconyB: {
    right: 8,
  },
  ViewQQ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconUV: {
    right: 8,
  },
  Viewnl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconAl: {
    right: 8,
  },
  Viewr0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconQn: {
    right: 8,
  },
  ViewT0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconGc: {
    right: 8,
  },
  ViewNH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconse: {
    right: 8,
  },
  View_56: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ScrollView_0GContent: {
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  LinearGradientxZ: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(WalletsScreen_CZIN2fUW);
