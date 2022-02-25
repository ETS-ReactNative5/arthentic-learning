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

const TaxesScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientxc}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.View_4n} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidCx,
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
                navigation.navigate('InvestorMenuScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidNq,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.ViewSI} pointerEvents={'auto'}>
          <Image
            style={styles.ImageWM}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewJK,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Text_66, { color: theme.colors.surface }]}>
            {'US Crypto Tax Laws'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperTk}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItem_6Z}>
              <Image
                style={styles.Image_7a}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextaX, { color: theme.colors.light }]}>
                {'So You Made a Bunch of Money with Crypto?'}
              </Text>

              <View style={styles.ViewsV} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconP8}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextDi, { color: theme.colors.light }]}>
                  {
                    'Capital Gains Tax is the tax on the profit gained from a trade.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewS1} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconrU}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextbN, { color: theme.colors.light }]}>
                  {
                    'In the US, you’re charged a tax on the gains you made in a crypto trade once the money turns back into dollars. \n'
                  }
                </Text>
              </View>

              <View style={styles.Viewbo} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcongP}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textiv, { color: theme.colors.light }]}>
                  {
                    'Tax can also be charged for converting one crypto to another when profiting.'
                  }
                </Text>
              </View>

              <View style={styles.View_9Z} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconB3}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextCl, { color: theme.colors.light }]}>
                  {
                    'Note: Buying and holding crypto in a wallet isn’t taxable until changing it to another currency. '
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_0W}>
              <Text style={[styles.TextOv, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewbX} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconU9}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.investopedia.com/terms/c/capital_gains_tax.asp'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Capital Gains Defined by Investopedia'}
                />
              </View>

              <View style={styles.Viewnk} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconrT}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.coinbase.com/learn/crypto-basics/understanding-crypto-taxes '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Coinbase Explains Crypto Taxes'}
                />
              </View>

              <View style={styles.ViewbE} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconcI}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.irs.gov/pub/irs-utl/2018ntf-bitcoin-cryptocurrency-an-introduction-and-tax-consequences.pdf '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'IRS on Crypto Taxes'}
                />
              </View>
            </SwiperItem>
          </Swiper>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidCx: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidNq: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  View_4n: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageWM: {
    width: 75,
    height: 75,
  },
  ViewSI: {
    alignItems: 'center',
  },
  Text_66: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewJK: {
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
  Image_7a: {
    width: '100%',
    height: 200,
  },
  TextaX: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconP8: {
    right: 8,
  },
  TextDi: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewsV: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconrU: {
    right: 8,
  },
  TextbN: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewS1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IcongP: {
    right: 8,
  },
  Textiv: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewbo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconB3: {
    right: 8,
  },
  TextCl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_9Z: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_6Z: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextOv: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconU9: {
    right: 8,
  },
  ViewbX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconrT: {
    right: 8,
  },
  Viewnk: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconcI: {
    right: 8,
  },
  ViewbE: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItem_0W: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperTk: {
    width: '100%',
    height: 450,
  },
  LinearGradientxc: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(TaxesScreen);
