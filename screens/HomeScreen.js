import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientPo}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewET} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_6u,
              {
                borderRadius: 12,
                backgroundColor: theme.colors.secondary,
                color: theme.colors.light,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewBI} pointerEvents={'auto'}>
          <Image
            style={styles.ImageRN}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <View style={styles.ViewOe} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('Web1Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidDb,
                {
                  backgroundColor: theme.colors.mediumInverse,
                  color: theme.colors.primary,
                },
              ]}
              title={'A New Internet is Here!'}
            />
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('WalletsScreen_CZIN2fUW');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidAM,
                {
                  backgroundColor: theme.colors.mediumInverse,
                  color: theme.colors.yellow,
                },
              ]}
              title={'Accessing Web3\n(All About Wallets)'}
            />
          </View>

          <View style={styles.Viewyh} pointerEvents={'auto'}>
            <View style={styles.Viewba} pointerEvents={'auto'}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ArtistsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.Viewls} pointerEvents={'auto'}>
                  <Circle size={80} bgColor={theme.colors.secondary}>
                    <Circle size={70} bgColor={theme.colors.divider}>
                      <Icon
                        size={32}
                        color={theme.colors.primary}
                        name={'FontAwesome/paint-brush'}
                      />
                    </Circle>
                  </Circle>

                  <Text style={[styles.TextOD, { color: theme.colors.light }]}>
                    {'Artists'}
                  </Text>
                </View>
              </Touchable>
            </View>
            <Spacer top={0} right={16} bottom={0} left={16} />
            <View style={styles.ViewLV} pointerEvents={'auto'}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('InvestorsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.Viewtl} pointerEvents={'auto'}>
                  <Circle size={80} bgColor={theme.colors.secondary}>
                    <Circle size={70} bgColor={theme.colors.divider}>
                      <Icon
                        size={32}
                        color={theme.colors.primary}
                        name={'Foundation/bitcoin-circle'}
                      />
                    </Circle>
                  </Circle>

                  <Text style={[styles.TextXE, { color: theme.colors.light }]}>
                    {'Investors'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>

          <View pointerEvents={'auto'}>
            <View style={styles.ViewyN} pointerEvents={'auto'}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('CollectorsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.View_1i} pointerEvents={'auto'}>
                  <Circle size={80} bgColor={theme.colors.secondary}>
                    <Circle size={70} bgColor={theme.colors.divider}>
                      <Icon
                        size={32}
                        color={theme.colors.primary}
                        name={'FontAwesome/group'}
                      />
                    </Circle>
                  </Circle>

                  <Text style={[styles.TextrU, { color: theme.colors.light }]}>
                    {'Collectors'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>

          <View style={styles.View_72} pointerEvents={'auto'}>
            <Text style={[styles.TextfP, { color: theme.colors.light }]}>
              {'Safe Harbor Statement'}
            </Text>

            <Text style={[styles.TextxX, { color: theme.colors.light }]}>
              {
                'We do not consider ourselves the definitive source on any topics in this app. Please do your own research and let us know if we got anything wrong!'
              }
            </Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid_6u: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 14,
  },
  ViewET: {
    alignSelf: 'flex-end',
  },
  ImageRN: {
    width: 75,
    height: 75,
  },
  ViewBI: {
    alignItems: 'center',
  },
  ButtonSolidDb: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  ButtonSolidAM: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    textAlign: 'center',
    fontSize: 24,
    marginTop: 24,
    marginBottom: 24,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  ViewOe: {
    alignItems: 'center',
  },
  TextOD: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  Viewls: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewba: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  TextXE: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  Viewtl: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewLV: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewyh: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextrU: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  View_1i: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewyN: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  TextfP: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  TextxX: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  View_72: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 24,
  },
  LinearGradientPo: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(HomeScreen);
