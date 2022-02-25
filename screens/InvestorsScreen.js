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

const InvestorsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientTe}
        endY={100}
        endX={100}
        color1={theme.colors.medium}
        color2={theme.colors.mediumInverse}
      >
        <View style={styles.Viewqp} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidI5,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.ViewgT} pointerEvents={'auto'}>
          <Image
            style={styles.ImageCf}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewYdContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.TextSn, { color: theme.colors.light }]}>
            {"Here's Why You Should Care About NFTs\nfor"}
          </Text>

          <Text style={[styles.TextSM, { color: theme.colors.primary }]}>
            {'Investors'}
          </Text>

          <View style={styles.ViewcO} pointerEvents={'auto'}>
            <View style={styles.ViewDx} pointerEvents={'auto'}>
              <Text style={[styles.TextsP, { color: theme.colors.light }]}>
                {'Master the Internet Economy'}
              </Text>

              <View style={styles.Viewwl} pointerEvents={'auto'}>
                <View style={styles.View_57} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconst}
                    name={'FontAwesome/bitcoin'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textyk, { color: theme.colors.light }]}>
                    {
                      'Web 3.0 offers exciting opportunities that investors can capitalize on.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewaF} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconcy}
                    name={'Foundation/social-stack-overflow'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textcj, { color: theme.colors.light }]}>
                    {
                      'There are several options when holding cryptocurrencies that allow passive and active income growth.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewWN} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icon_67}
                    name={'FontAwesome/bank'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextF3, { color: theme.colors.light }]}>
                    {
                      'When lots of artists turn to creating NFTs, virtual museums will likely come into existence.'
                    }
                  </Text>
                </View>

                <View style={styles.View_9i} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Icondb}
                    name={'MaterialCommunityIcons/forwardburger'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textpm, { color: theme.colors.light }]}>
                    {
                      'NFTs will be the future of how you sell and represent your artistic business.'
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('InvestorMenuScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.ButtonOutlineYd}
            title={'More Investment Topics'}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidI5: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
  },
  Viewqp: {
    alignSelf: 'flex-end',
  },
  ImageCf: {
    width: 75,
    height: 75,
  },
  ViewgT: {
    alignItems: 'center',
  },
  TextSn: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextSM: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 77,
    marginTop: 12,
    marginBottom: 24,
  },
  TextsP: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Iconst: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textyk: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  View_57: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Iconcy: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textcj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewaF: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon_67: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextF3: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewWN: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icondb: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textpm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  View_9i: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewwl: {
    marginTop: 12,
    marginBottom: 12,
  },
  ViewDx: {
    width: '100%',
  },
  ViewcO: {
    flexDirection: 'row',
  },
  ButtonOutlineYd: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ScrollViewYdContent: {
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  LinearGradientTe: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(InvestorsScreen);
