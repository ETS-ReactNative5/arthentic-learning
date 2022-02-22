import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Web2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientl7}
        endY={100}
        endX={100}
        color1={theme.colors.medium}
        color2={theme.colors.light}
      >
        <View style={styles.ViewpO} pointerEvents={'auto'}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.ViewMu} pointerEvents={'auto'}>
              <Icon
                style={styles.Icon_8j}
                name={'Ionicons/arrow-back-circle'}
                size={48}
                color={theme.colors.primary}
              />
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.ViewxW} pointerEvents={'auto'}>
              <Icon
                style={styles.IconNx}
                name={'Ionicons/close-circle-sharp'}
                size={48}
                color={theme.colors.primary}
              />
            </View>
          </Touchable>
        </View>

        <View style={styles.ViewVk} pointerEvents={'auto'}>
          <Image
            style={styles.Image_6R}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewCLContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.TextZd, { color: theme.colors.mediumInverse }]}>
            {
              "Big companies started working on the 'current' internet, which allowed"
            }
          </Text>

          <Text style={[styles.TextP9, { color: theme.colors.primary }]}>
            {'Writing'}
          </Text>

          <View style={styles.Viewbb} pointerEvents={'auto'}>
            <View pointerEvents={'auto'}>
              <Text
                style={[styles.TextUa, { color: theme.colors.mediumInverse }]}
              >
                {'Pros of Web2'}
              </Text>

              <View style={styles.View_1z} pointerEvents={'auto'}>
                <View style={styles.View_9a} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconLA}
                    name={'MaterialCommunityIcons/cellphone-information'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.Text_9b,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Organized Information'}
                  </Text>
                </View>

                <View style={styles.Viewzg} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconeb}
                    name={'MaterialCommunityIcons/podcast'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.Text_0C,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Podcasting'}
                  </Text>
                </View>

                <View style={styles.Viewsz} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconww}
                    name={'Entypo/user'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.TextEm,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Social Networks'}
                  </Text>
                </View>

                <View style={styles.ViewrM} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icon_82}
                    name={'Entypo/video'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.TextT9,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Sharing Content'}
                  </Text>
                </View>

                <View style={styles.ViewUn} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconQr}
                    name={'MaterialIcons/emoji-people'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.TextF4,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Content Creators'}
                  </Text>
                </View>
              </View>
            </View>

            <View pointerEvents={'auto'}>
              <Text
                style={[styles.TextUG, { color: theme.colors.mediumInverse }]}
              >
                {'Cons of Web2'}
              </Text>

              <View style={styles.View_40} pointerEvents={'auto'}>
                <View style={styles.Viewog} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconBb}
                    name={'MaterialCommunityIcons/select-group'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.TextQ2,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Central Information'}
                  </Text>
                </View>

                <View style={styles.ViewIW} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconp3}
                    name={'MaterialIcons/security'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.Texti2,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Security Flaws'}
                  </Text>
                </View>

                <View style={styles.Viewc3} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconlc}
                    name={'AntDesign/barschart'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.TextrH,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Harvesting Personal\nInfo for Ads'}
                  </Text>
                </View>

                <View style={styles.Viewsk} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconKa}
                    name={'MaterialCommunityIcons/account-remove'}
                    size={24}
                    color={theme.colors.secondary}
                  />
                  <Text
                    style={[
                      styles.Text_3d,
                      { color: theme.colors.mediumInverse },
                    ]}
                  >
                    {'Cost Per Click'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.ViewyS} pointerEvents={'auto'}>
            <View style={styles.ViewY0} pointerEvents={'auto'}>
              <Text
                style={[styles.TextPr, { color: theme.colors.mediumInverse }]}
              >
                {'The internet is currently in this'}
              </Text>

              <Text
                style={[styles.TextdH, { color: theme.colors.mediumInverse }]}
              >
                {' centralized'}
              </Text>
            </View>

            <View style={styles.ViewJS} pointerEvents={'auto'}>
              <Text
                style={[styles.Text_0L, { color: theme.colors.mediumInverse }]}
              >
                {
                  'mode, which allows big companies to essentially control your online life.'
                }
              </Text>
            </View>
          </View>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('Web3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineRA,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'So People Built Their Own Internet...'}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Icon_8j: {
    marginLeft: 24,
  },
  ViewMu: {
    flexDirection: 'row',
    marginTop: 18,
  },
  IconNx: {
    marginRight: 24,
  },
  ViewxW: {
    flexDirection: 'row',
    marginTop: 18,
  },
  ViewpO: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image_6R: {
    width: 75,
    height: 75,
  },
  ViewVk: {
    alignItems: 'center',
  },
  TextZd: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextP9: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 96,
    marginTop: 12,
    marginBottom: 24,
  },
  TextUa: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  IconLA: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_9b: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  View_9a: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconeb: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_0C: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewzg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconww: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextEm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewsz: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon_82: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextT9: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewrM: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconQr: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextF4: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewUn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_1z: {
    marginTop: 12,
    marginBottom: 12,
  },
  TextUG: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  IconBb: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextQ2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewog: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconp3: {
    marginRight: 6,
    marginLeft: 6,
  },
  Texti2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewIW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconlc: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextrH: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    marginTop: 6,
    marginBottom: 6,
  },
  Viewc3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconKa: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_3d: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 10,
    marginTop: 6,
    marginBottom: 6,
  },
  Viewsk: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_40: {
    marginTop: 12,
    marginBottom: 12,
  },
  Viewbb: {
    flexDirection: 'row',
  },
  TextPr: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  TextdH: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  ViewY0: {
    flexDirection: 'row',
  },
  Text_0L: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
  ViewJS: {
    flexDirection: 'row',
  },
  ViewyS: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  ButtonOutlineRA: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  ScrollViewCLContent: {
    paddingTop: 32,
    paddingBottom: 32,
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
  },
  LinearGradientl7: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Web2Screen);
