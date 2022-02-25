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

const ArtistMenuScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientfa}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.Vieweh} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidpI,
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
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidn9,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.View_4k} pointerEvents={'auto'}>
          <Image
            style={styles.Imaged8}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewCo,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextdY, { color: theme.colors.surface }]}>
            {'Content Creators'}
          </Text>
        </View>

        <View style={styles.ViewqG} pointerEvents={'auto'}>
          <View style={styles.ViewmV} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('MetaverseScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.Viewqb} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/infinite'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Text_74, { color: theme.colors.light }]}>
                  {'Entering the\nMetaverse'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NFTsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewUj} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'MaterialIcons/collections'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.TextWC, { color: theme.colors.light }]}>
                  {'The Rundown\non NFTs'}
                </Text>
              </View>
            </Touchable>
          </View>

          <View style={styles.Viewfx} pointerEvents={'auto'}>
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('DappsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.View_8a} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/disc-outline'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Textya, { color: theme.colors.light }]}>
                  {'How to Use the\nNew Internet'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('BurnoutScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View style={styles.ViewAa} pointerEvents={'auto'}>
                <Circle size={80} bgColor={theme.colors.secondary}>
                  <Circle size={70} bgColor={theme.colors.divider}>
                    <Icon
                      size={32}
                      color={theme.colors.primary}
                      name={'Ionicons/ios-flame-sharp'}
                    />
                  </Circle>
                </Circle>

                <Text style={[styles.Text_9B, { color: theme.colors.light }]}>
                  {'Coping with \nBurnout'}
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
  ButtonSolidpI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidn9: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Vieweh: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Imaged8: {
    width: 75,
    height: 75,
  },
  View_4k: {
    alignItems: 'center',
  },
  TextdY: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewCo: {
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
  Text_74: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  Viewqb: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextWC: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewUj: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewmV: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Textya: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  View_8a: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Text_9B: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewAa: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewfx: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ViewqG: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  LinearGradientfa: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(ArtistMenuScreen);
