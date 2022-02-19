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

const InvestorScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientBE}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewG1} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidke,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.View_7F} pointerEvents={'auto'}>
          <Image
            style={styles.Imageig}
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
          <Text style={[styles.TextjA, { color: theme.colors.surface }]}>
            {'Investing in Web3'}
          </Text>
        </View>

        <View style={styles.View_5Y} pointerEvents={'auto'}>
          <View style={styles.View_5m} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('CryptocurrencyScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.VieweQ} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/logo-bitcoin'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textmu, { color: theme.colors.light }]}>
                  {'Cryptocurrency\nBreakdown'}
                </Text>
              </View>
            </Touchable>
          </View>

          <View style={styles.Viewxs} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('DefiScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewpV} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialCommunityIcons/bank-remove'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextoZ, { color: theme.colors.light }]}>
                  {'Decentralized\nFinance'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>

        <View pointerEvents={'auto'}>
          <View style={styles.View_8o} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('TaxesScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewLb} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'FontAwesome/balance-scale'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextyX, { color: theme.colors.light }]}>
                  {'US Crypto\nLaws'}
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
  ButtonSolidke: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewG1: {
    alignSelf: 'flex-end',
  },
  Imageig: {
    width: 75,
    height: 75,
  },
  View_7F: {
    alignItems: 'center',
  },
  TextjA: {
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
  Textmu: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  VieweQ: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  View_5m: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  TextoZ: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewpV: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewxs: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  View_5Y: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextyX: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewLb: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  View_8o: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  LinearGradientBE: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(InvestorScreen);
