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

const NFTsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradiento9}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewbC} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidD6,
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
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidbU,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.View_23} pointerEvents={'auto'}>
          <Image
            style={styles.Image_5U}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewhY,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextVZ, { color: theme.colors.surface }]}>
            {'Content in Web3'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.Swiper_8m}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemVu}>
              <Image
                style={styles.Image_77}
                source={Images.NFTTokens}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_7k, { color: theme.colors.light }]}>
                {'The NFT (Non-Fungible Token)'}
              </Text>

              <View style={styles.ViewLL} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcongX}
                  size={24}
                  color={theme.colors.light}
                  name={'Entypo/creative-commons'}
                />
                <Text style={[styles.TextGX, { color: theme.colors.light }]}>
                  {
                    'Non-Fungible Tokens are how artists will sell their work in the future. A direct line to support content creation.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewy4} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEP}
                  size={24}
                  color={theme.colors.light}
                  name={'Entypo/creative-commons-noncommercial-us'}
                />
                <Text style={[styles.TextFR, { color: theme.colors.light }]}>
                  {
                    'NFTs represent the proof of ownership of a digital piece of content, which can be tied to benefits and  physical assets.'
                  }
                </Text>
              </View>

              <View style={styles.ViewkH} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconpa}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/opencart'}
                />
                <Text style={[styles.Text_74, { color: theme.colors.light }]}>
                  {
                    'Reasons people buy NFTs: \nArt Appreciation\nStatus Symbol\nMake Money\nSupport Content Creation\nJoin a Community\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemXZ}>
              <Image
                style={styles.Imagek4}
                resizeMode={'cover'}
                source={Images.CopyOfToken}
              />
              <Text style={[styles.TextY0, { color: theme.colors.light }]}>
                {'NFT Terms'}
              </Text>

              <View style={styles.Viewbp} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconFV}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/google-circles-communities'}
                />
                <Text style={[styles.Textcl, { color: theme.colors.light }]}>
                  {
                    'NFT Collections usually revolve around a community project with a mutual goal. The artwork usually looks similar and can contain any number of pieces from 2 to a million.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewi9} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconx8}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/face-agent'}
                />
                <Text style={[styles.TextNu, { color: theme.colors.light }]}>
                  {
                    'Generative Art is art that in whole or in part has been created with the use of an autonomous system. By using a certain smart contract, artists can make 1000s of NFTs with a small fraction of the work.'
                  }
                </Text>
              </View>

              <View style={styles.View_88} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconwG}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/floor-plan'}
                />
                <Text style={[styles.Textlm, { color: theme.colors.light }]}>
                  {
                    'Floor Price is the lowest amount of money you are able to spend to become a member of an NFT project.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemxD}>
              <Image
                style={styles.ImagegK}
                resizeMode={'cover'}
                source={Images.HowToBuyTokenscrypto}
              />
              <Text style={[styles.Textr4, { color: theme.colors.light }]}>
                {'How to Buy an NFT'}
              </Text>

              <View style={styles.View_3s} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconj8}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialIcons/local-grocery-store'}
                />
                <Text style={[styles.Textuk, { color: theme.colors.light }]}>
                  {
                    'Pick an NFT marketplace, set up a compatible wallet & add some compatible coin to buy the NFT with\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewTz} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconMU}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/text-box-search'}
                />
                <Text style={[styles.Text_8g, { color: theme.colors.light }]}>
                  {
                    'Pick an NFT, be sure to research and check for reports of scams'
                  }
                </Text>
              </View>

              <View style={styles.ViewfK} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconpi}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialIcons/payments'}
                />
                <Text style={[styles.TextKb, { color: theme.colors.light }]}>
                  {
                    'In addition to the price of the NFT, you’ll have to pay a transaction fee to write your ownership of the NFT onto the blockchain.'
                  }
                </Text>
              </View>

              <View style={styles.ViewrG} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconQE}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialIcons/integration-instructions'}
                />
                <Text style={[styles.TextaJ, { color: theme.colors.light }]}>
                  {
                    'If you’re using the NFT in a DApp, follow their instructions to connect and use your NFT.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItembf}>
              <Text style={[styles.TextOw, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewDb} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconi6}
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

              <View style={styles.ViewWV} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconLh}
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

              <View style={styles.Viewj0} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconPk}
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

          <View style={styles.ViewhM} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('DappsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolid_1E,
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
  ButtonSolidD6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidbU: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewbC: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Image_5U: {
    width: 75,
    height: 75,
  },
  View_23: {
    alignItems: 'center',
  },
  TextVZ: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewhY: {
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
  Image_77: {
    width: '100%',
    height: 200,
  },
  Text_7k: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IcongX: {
    right: 8,
  },
  TextGX: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewLL: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconEP: {
    right: 8,
  },
  TextFR: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewy4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconpa: {
    right: 8,
  },
  Text_74: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewkH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemVu: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Imagek4: {
    width: '100%',
    height: 200,
  },
  TextY0: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconFV: {
    right: 8,
  },
  Textcl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewbp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconx8: {
    right: 8,
  },
  TextNu: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewi9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconwG: {
    right: 8,
  },
  Textlm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_88: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemXZ: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagegK: {
    width: '100%',
    height: 200,
  },
  Textr4: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconj8: {
    right: 8,
  },
  Textuk: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_3s: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconMU: {
    right: 8,
  },
  Text_8g: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewTz: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconpi: {
    right: 8,
  },
  TextKb: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewfK: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconQE: {
    right: 8,
  },
  TextaJ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewrG: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemxD: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextOw: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconi6: {
    right: 8,
  },
  ViewDb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconLh: {
    right: 8,
  },
  ViewWV: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconPk: {
    right: 8,
  },
  Viewj0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItembf: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Swiper_8m: {
    width: '100%',
    height: 450,
  },
  ButtonSolid_1E: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewhM: {
    alignSelf: 'center',
  },
  LinearGradiento9: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(NFTsScreen);
