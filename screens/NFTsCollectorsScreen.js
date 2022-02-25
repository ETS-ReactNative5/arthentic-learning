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

const NFTsCollectorsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientrw}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.Viewfe} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidVr,
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
              styles.ButtonSolidBB,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.ViewdU} pointerEvents={'auto'}>
          <Image
            style={styles.Imagezu}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.View_4c,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.Text_2p, { color: theme.colors.surface }]}>
            {'Content in Web3'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwipertC}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemrV}>
              <Image
                style={styles.ImagefV}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textbk, { color: theme.colors.light }]}>
                {'The NFT (Non-Fungible Token)'}
              </Text>

              <View style={styles.ViewAu} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_4x}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextED, { color: theme.colors.light }]}>
                  {
                    'Non-Fungible Tokens are how artists will sell their work in the future. A direct line to support content creation.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewCc} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_0u}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextpA, { color: theme.colors.light }]}>
                  {
                    'Reasons people buy NFTs: \nArt Appreciation\nStatus Symbol\nMake Money\nSupport Content Creation\nJoin a Community\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewvb} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_6I}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_4K, { color: theme.colors.light }]}>
                  {
                    'NFTs represent the proof of ownership of a digital piece of content, which can be tied to benefits and  physical assets.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemFj}>
              <Image
                style={styles.ImageA5}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textan, { color: theme.colors.light }]}>
                {'NFT Terms'}
              </Text>

              <View style={styles.ViewZQ} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconck}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TexttW, { color: theme.colors.light }]}>
                  {
                    'NFT Collections usually revolve around a community project with a mutual goal. The artwork usually looks similar and can contain any number of pieces from 2 to a million.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewqm} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconO5}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texte0, { color: theme.colors.light }]}>
                  {
                    'Generative Art is art that in whole or in part has been created with the use of an autonomous system. By using a certain smart contract, artists can make 1000s of NFTs with a small fraction of the work.'
                  }
                </Text>
              </View>

              <View style={styles.Viewmy} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcongL}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextHv, { color: theme.colors.light }]}>
                  {
                    'Floor Price is the lowest amount of money you are able to spend to become a member of an NFT project.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_94}>
              <Image
                style={styles.ImagexS}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextxQ, { color: theme.colors.light }]}>
                {'How to Buy an NFT'}
              </Text>

              <View style={styles.ViewBm} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_3C}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextsR, { color: theme.colors.light }]}>
                  {
                    'Pick an NFT marketplace, set up a compatible wallet & add some compatible coin to buy the NFT with\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewGY} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_8K}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextE6, { color: theme.colors.light }]}>
                  {
                    'Pick an NFT, be sure to research and check for reports of scams'
                  }
                </Text>
              </View>

              <View style={styles.ViewQQ} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconjF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextRB, { color: theme.colors.light }]}>
                  {
                    'In addition to the price of the NFT, you’ll have to pay a transaction fee to write your ownership of the NFT onto the blockchain.'
                  }
                </Text>
              </View>

              <View style={styles.Viewyx} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_0I}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextIa, { color: theme.colors.light }]}>
                  {
                    'If you’re using the NFT in a DApp, follow their instructions to connect and use your NFT.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemsb}>
              <Text style={[styles.Texty3, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.View_5s} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconDt}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.csail.mit.edu/news/nfts-explained'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'MIT explains NFTs'}
                />
              </View>

              <View style={styles.ViewaB} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEQ}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.nfi.edu/non-fungible-token/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Nashville Film Institute on NFTs'}
                />
              </View>

              <View style={styles.ViewsM} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconz1}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://nftexplained.io/best-nft-marketplaces/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'(Unofficial) List of NFT Marketplaces'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.Viewmt} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('DappsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidDO,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nInteracting with the New Internet'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidVr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidBB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  Viewfe: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Imagezu: {
    width: 75,
    height: 75,
  },
  ViewdU: {
    alignItems: 'center',
  },
  Text_2p: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_4c: {
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
  ImagefV: {
    width: '100%',
    height: 200,
  },
  Textbk: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_4x: {
    right: 8,
  },
  TextED: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewAu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_0u: {
    right: 8,
  },
  TextpA: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewCc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_6I: {
    right: 8,
  },
  Text_4K: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewvb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemrV: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageA5: {
    width: '100%',
    height: 200,
  },
  Textan: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconck: {
    right: 8,
  },
  TexttW: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewZQ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconO5: {
    right: 8,
  },
  Texte0: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewqm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IcongL: {
    right: 8,
  },
  TextHv: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewmy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemFj: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagexS: {
    width: '100%',
    height: 200,
  },
  TextxQ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_3C: {
    right: 8,
  },
  TextsR: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewBm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_8K: {
    right: 8,
  },
  TextE6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewGY: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconjF: {
    right: 8,
  },
  TextRB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewQQ: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_0I: {
    right: 8,
  },
  TextIa: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewyx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_94: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Texty3: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconDt: {
    right: 8,
  },
  View_5s: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconEQ: {
    right: 8,
  },
  ViewaB: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconz1: {
    right: 8,
  },
  ViewsM: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemsb: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwipertC: {
    width: '100%',
    height: 450,
  },
  ButtonSolidDO: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  Viewmt: {
    alignSelf: 'center',
  },
  LinearGradientrw: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(NFTsCollectorsScreen);
