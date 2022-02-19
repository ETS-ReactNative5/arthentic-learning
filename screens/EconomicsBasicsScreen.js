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

const EconomicsBasicsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradient_31}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewVz} pointerEvents={'auto'}>
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
              styles.ButtonSolid_7Z,
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
              styles.ButtonSolidXi,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewFu} pointerEvents={'auto'}>
          <Image
            style={styles.Imagez9}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewTK,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Texty3, { color: theme.colors.surface }]}>
            {'Economics Basics'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.Swiper_1S}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemfo}>
              <Image
                style={styles.Imaget1}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_5g, { color: theme.colors.light }]}>
                {'Supply and Demand'}
              </Text>

              <View style={styles.Viewn5} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_4t}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/shopping-bag'}
                />
                <Text style={[styles.Textlr, { color: theme.colors.light }]}>
                  {
                    'Supply is the quantity of something for sale, like the number of apples at an apple stand.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewBz} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconD3}
                  name={'Ionicons/ios-people-circle'}
                  size={24}
                  color={theme.colors.light}
                />
                <Text style={[styles.TextYe, { color: theme.colors.light }]}>
                  {
                    'Demand is how much of the product/service people want to buy.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewAn} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconQ3}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/trending-down'}
                />
                <Text style={[styles.Textxg, { color: theme.colors.light }]}>
                  {'When supply >(greater) demand, the price decreases.\n'}
                </Text>
              </View>

              <View style={styles.ViewnJ} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconOw}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/trending-up'}
                />
                <Text style={[styles.TextcI, { color: theme.colors.light }]}>
                  {'When supply <(less) demand, the price increases.\n'}
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemj8}>
              <Image
                style={styles.ImageR6}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextL2, { color: theme.colors.light }]}>
                {'Types of Goods'}
              </Text>

              <View style={styles.View_7i} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconGA}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textjv, { color: theme.colors.light }]}>
                  {
                    'Increase in income leads to an increase in demand for Normal Goods.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewx5} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_6P}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextNb, { color: theme.colors.light }]}>
                  {
                    'When income rises, people spend a higher percentage of their income on Luxury Goods. Ex. HD TVs, Jewelry, are bought by people with disposable income\n'
                  }
                </Text>
              </View>

              <View style={styles.View_7K} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconZB}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_0u, { color: theme.colors.light }]}>
                  {
                    'Increased income leads to less demand for Inferior Goods. Ex. Can of soup, fast food, instant noodles\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemuh}>
              <Image
                style={styles.ImageDZ}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textec, { color: theme.colors.light }]}>
                {'Inflation'}
              </Text>

              <View style={styles.Viewnu} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconbd}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textfu, { color: theme.colors.light }]}>
                  {
                    'When the average price of virtually everything consumers buy goes up.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewq2} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconit}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textad, { color: theme.colors.light }]}>
                  {
                    'Demand-Pull: When demand for goods/services exceeds production capacity.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewyz} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconCT}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_2M, { color: theme.colors.light }]}>
                  {'Cost-Push: When production costs increase prices.'}
                </Text>
              </View>

              <View style={styles.Viewat} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icons3}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextAD, { color: theme.colors.light }]}>
                  {
                    'Built-In: When prices rise, wages rise too, in order to maintain living costs.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemlg}>
              <Image
                style={styles.ImageMH}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextTv, { color: theme.colors.light }]}>
                {'Elasticity'}
              </Text>

              <View style={styles.ViewV0} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconzc}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextnA, { color: theme.colors.light }]}>
                  {
                    'The measure of how much demand for a good changes when the price increases or decreases.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewcT} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconQb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textyo, { color: theme.colors.light }]}>
                  {
                    'When the demand doesn’t change as much the good is Inelastic.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewWs} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconeb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextAh, { color: theme.colors.light }]}>
                  {
                    'When the demand changes due to price, the product is known as Elastic.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemiv}>
              <Image
                style={styles.ImageDj}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextD9, { color: theme.colors.light }]}>
                {'Opportunity Cost and Scarcity'}
              </Text>

              <View style={styles.ViewU8} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3V}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textux, { color: theme.colors.light }]}>
                  {
                    'In most economics, the theory is that people have more wants than can be fulfilled. The loss of potential gain from other alternatives when one alternative is chosen is called its opportunity cost.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewpP} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconnV}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextbO, { color: theme.colors.light }]}>
                  {
                    'Another major assumption of economics is Scarcity, or the idea that there aren’t enough resources to give everyone what they want.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemB3}>
              <Image
                style={styles.ImagehS}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextRO, { color: theme.colors.light }]}>
                {'Bear vs Bull Markets'}
              </Text>

              <View style={styles.Viewwz} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconA7}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textb1, { color: theme.colors.light }]}>
                  {
                    'Bull markets are when people are excited about the market and investments generally rise.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewLf} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconaw}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextAl, { color: theme.colors.light }]}>
                  {
                    'Bear markets are the opposite of bull markets, where the investment sentiment is low and investments generally decrease.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemN7}>
              <Image
                style={styles.Imagei3}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textke, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewkV} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconR1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://teachers.stjohns.k12.fl.us/keefe-t/files/2014/11/Economics-for-Dummies.pdf'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'St. Johns: Economics for K-12'}
                />
              </View>

              <View style={styles.Viewjg} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconqr}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://faculty.washington.edu/cnelson/Chap01.pdf'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Washington University'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.Viewoa} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('Web30Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidtx,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nThe New Internet'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid_7Z: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidXi: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewVz: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Imagez9: {
    width: 75,
    height: 75,
  },
  ViewFu: {
    alignItems: 'center',
  },
  Texty3: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewTK: {
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
  Imaget1: {
    width: '100%',
    height: 200,
  },
  Text_5g: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_4t: {
    right: 8,
  },
  Textlr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewn5: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconD3: {
    right: 8,
  },
  TextYe: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewBz: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconQ3: {
    right: 8,
  },
  Textxg: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewAn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconOw: {
    right: 8,
  },
  TextcI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewnJ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemfo: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageR6: {
    width: '100%',
    height: 200,
  },
  TextL2: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconGA: {
    right: 8,
  },
  Textjv: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_7i: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_6P: {
    right: 8,
  },
  TextNb: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewx5: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconZB: {
    right: 8,
  },
  Text_0u: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_7K: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemj8: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageDZ: {
    width: '100%',
    height: 200,
  },
  Textec: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconbd: {
    right: 8,
  },
  Textfu: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewnu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconit: {
    right: 8,
  },
  Textad: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewq2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconCT: {
    right: 8,
  },
  Text_2M: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewyz: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icons3: {
    right: 8,
  },
  TextAD: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemuh: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageMH: {
    width: '100%',
    height: 200,
  },
  TextTv: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconzc: {
    right: 8,
  },
  TextnA: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewV0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconQb: {
    right: 8,
  },
  Textyo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewcT: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconeb: {
    right: 8,
  },
  TextAh: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewWs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemlg: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageDj: {
    width: '100%',
    height: 200,
  },
  TextD9: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_3V: {
    right: 8,
  },
  Textux: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewU8: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconnV: {
    right: 8,
  },
  TextbO: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewpP: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemiv: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagehS: {
    width: '100%',
    height: 200,
  },
  TextRO: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconA7: {
    right: 8,
  },
  Textb1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewwz: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconaw: {
    right: 8,
  },
  TextAl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewLf: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemB3: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Imagei3: {
    width: '100%',
    height: 200,
  },
  Textke: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconR1: {
    right: 8,
  },
  ViewkV: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconqr: {
    right: 8,
  },
  Viewjg: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemN7: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Swiper_1S: {
    width: '100%',
    height: 450,
  },
  ButtonSolidtx: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  Viewoa: {
    alignSelf: 'center',
  },
  LinearGradient_31: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(EconomicsBasicsScreen);
