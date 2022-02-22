import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  Icon,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Web3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientvo}
        endY={100}
        endX={100}
        color1={theme.colors.secondary}
        color2={theme.colors.mediumInverse}
      >
        <View style={styles.ViewLU} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidmm,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.ViewGz} pointerEvents={'auto'}>
          <Image
            style={styles.ImageWR}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewFpContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.TextHZ, { color: theme.colors.light }]}>
            {'The New Internet is all about letting people have'}
          </Text>

          <Text style={[styles.TextcP, { color: theme.colors.primary }]}>
            {'Ownership'}
          </Text>

          <View style={styles.View_9u} pointerEvents={'auto'}>
            <View pointerEvents={'auto'}>
              <Text style={[styles.TextHG, { color: theme.colors.light }]}>
                {'What is Web3 All About?'}
              </Text>

              <View style={styles.ViewK9} pointerEvents={'auto'}>
                <View style={styles.Viewqu} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icon_4K}
                    name={'MaterialCommunityIcons/database-lock'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextCN, { color: theme.colors.light }]}>
                    {'You choose where your data goes'}
                  </Text>
                </View>

                <View style={styles.Viewm5} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconug}
                    name={'Entypo/eye'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Texty2, { color: theme.colors.light }]}>
                    {
                      'Activity is known to all users, allowing \ntrust in all transactions'
                    }
                  </Text>
                </View>

                <View style={styles.Viewva} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconnK}
                    name={'MaterialCommunityIcons/bank-transfer'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textv0, { color: theme.colors.light }]}>
                    {'Multiple Monetization Methods \nfor Creators'}
                  </Text>
                </View>

                <View style={styles.ViewJT} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icon_5I}
                    name={'MaterialCommunityIcons/account-multiple'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextMB, { color: theme.colors.light }]}>
                    {'Peer-to-peer transactions \n(no middlemen)'}
                  </Text>
                </View>

                <View style={styles.View_41} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icongp}
                    name={'MaterialCommunityIcons/printer-3d'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextaC, { color: theme.colors.light }]}>
                    {'3D Content, like AR/VR'}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.ViewFu} pointerEvents={'auto'}>
            <View style={styles.ViewQJ} pointerEvents={'auto'}>
              <Text style={[styles.TextgC, { color: theme.colors.light }]}>
                {'The internet is about to change'}
              </Text>

              <Text style={[styles.Textnb, { color: theme.colors.light }]}>
                {' forever'}
              </Text>
            </View>

            <View style={styles.ViewQq} pointerEvents={'auto'}>
              <Text style={[styles.TextsS, { color: theme.colors.light }]}>
                {'and we want to show you exactly how, starting with:'}
              </Text>
            </View>
          </View>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('MetaverseScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineHH,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'The Metaverse'}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidmm: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
  },
  ViewLU: {
    alignSelf: 'flex-end',
  },
  ImageWR: {
    width: 75,
    height: 75,
  },
  ViewGz: {
    alignItems: 'center',
  },
  TextHZ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextcP: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 77,
    marginTop: 12,
    marginBottom: 24,
  },
  TextHG: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Icon_4K: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextCN: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewqu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconug: {
    marginRight: 6,
    marginLeft: 6,
  },
  Texty2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewm5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconnK: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textv0: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  Viewva: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon_5I: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextMB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewJT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icongp: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextaC: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  View_41: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewK9: {
    marginTop: 12,
    marginBottom: 12,
  },
  View_9u: {
    flexDirection: 'row',
  },
  TextgC: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  Textnb: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  ViewQJ: {
    flexDirection: 'row',
  },
  TextsS: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
  ViewQq: {
    flexDirection: 'row',
  },
  ViewFu: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  ButtonOutlineHH: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  ScrollViewFpContent: {
    paddingTop: 32,
    paddingBottom: 32,
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
  },
  LinearGradientvo: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Web3Screen);
