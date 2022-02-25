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

const Web30Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientJz}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewUZ} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidX1,
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
              styles.ButtonSolidMH,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.ViewgG} pointerEvents={'auto'}>
          <Image
            style={styles.Image_6h}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.Viewe6,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextFr, { color: theme.colors.surface }]}>
            {'The New Internet'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperDT}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemdN}>
              <Image
                style={styles.ImageJr}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_6Z, { color: theme.colors.light }]}>
                {'Web3 Basics'}
              </Text>

              <View style={styles.Viewa1} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_2i}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textwq, { color: theme.colors.light }]}>
                  {
                    'The internet started as something you could read, then we got the power to post, or write. The third version of the internet is about owning your data.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewvC} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconsK}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textp9, { color: theme.colors.light }]}>
                  {
                    'Current social media giants can take down any post, financial institutions can block most transactions at will, and there are many other aspects of the internet that are currently controlled by one person or company. \n'
                  }
                </Text>
              </View>

              <View style={styles.View_6f} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUb}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextjM, { color: theme.colors.light }]}>
                  {
                    'With more direct ownership, people will have to rely on less middlemen in this next version of the internet.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemNQ}>
              <Text style={[styles.TextDR, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.View_77} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconQt}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://ethereum.org/en/developers/docs/web2-vs-web3/ '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"Ethereum's Guide to Web3"}
                />
              </View>

              <View style={styles.View_9v} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconel}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.odysseydao.com/articles/what-is-web3'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"OdysseyDAO's Take on Web3"}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewQp} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('BlockchainScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidc6,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nBlockchain Basics'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidX1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidMH: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewUZ: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Image_6h: {
    width: 75,
    height: 75,
  },
  ViewgG: {
    alignItems: 'center',
  },
  TextFr: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  Viewe6: {
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
  ImageJr: {
    width: '100%',
    height: 200,
  },
  Text_6Z: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_2i: {
    right: 8,
  },
  Textwq: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewa1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconsK: {
    right: 8,
  },
  Textp9: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewvC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconUb: {
    right: 8,
  },
  TextjM: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_6f: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemdN: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextDR: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconQt: {
    right: 8,
  },
  View_77: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconel: {
    right: 8,
  },
  View_9v: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemNQ: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperDT: {
    width: '100%',
    height: 450,
  },
  ButtonSolidc6: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewQp: {
    alignSelf: 'center',
  },
  LinearGradientJz: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Web30Screen);
