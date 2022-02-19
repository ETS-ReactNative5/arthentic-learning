import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CollectorScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradient_5w}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewiS} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidsD,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewUK} pointerEvents={'auto'}>
          <Image
            style={styles.ImagetM}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewLI,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextHB, { color: theme.colors.surface }]}>
            {'Amassing a Collection'}
          </Text>
        </View>

        <View style={styles.ViewOo} pointerEvents={'auto'}>
          <View style={styles.ViewtV} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NFTsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewTy} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/lightbulb-group'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextNC, { color: theme.colors.light }]}>
                  {'Why You Should\nCare About NFTs'}
                </Text>
              </View>
            </Touchable>
          </View>

          <View style={styles.ViewKZ} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('DappsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewLl} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/webhook'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textpu, { color: theme.colors.light }]}>
                  {'How to Use the \nNew Internet'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('CryptocurrencyScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.Viewda} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/bitcoin'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextVq, { color: theme.colors.light }]}>
                  {'Cryptocurrency \nSimplified'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidsD: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewiS: {
    alignSelf: 'flex-end',
  },
  ImagetM: {
    width: 75,
    height: 75,
  },
  ViewUK: {
    alignItems: 'center',
  },
  TextHB: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewLI: {
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
  TextNC: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewTy: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewtV: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Textpu: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewLl: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextVq: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  Viewda: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewKZ: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  ViewOo: {
    justifyContent: 'space-evenly',
  },
  LinearGradient_5w: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(CollectorScreen);
