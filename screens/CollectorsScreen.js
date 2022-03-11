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

const CollectorsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientq3}
        endY={100}
        endX={100}
        color1={theme.colors.mediumInverse}
        color2={theme.colors.medium}
      >
        <View style={styles.ViewbF} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidhC,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
                borderBottomLeftRadius: 12,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.ViewV5} pointerEvents={'auto'}>
          <Image
            style={styles.Imageds}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewqeContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.TexthA, { color: theme.colors.light }]}>
            {"Here's Why You Should Care About NFTs\nfor"}
          </Text>

          <Text style={[styles.TextL6, { color: theme.colors.primary }]}>
            {'Collectors'}
          </Text>

          <View style={styles.View_1N} pointerEvents={'auto'}>
            <View style={styles.Viewdb} pointerEvents={'auto'}>
              <Text style={[styles.TextkW, { color: theme.colors.light }]}>
                {'Find Your Passion'}
              </Text>

              <View style={styles.View_54} pointerEvents={'auto'}>
                <View style={styles.ViewGM} pointerEvents={'auto'}>
                  <Icon
                    style={styles.Iconi2}
                    name={'MaterialIcons/collections'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextCw, { color: theme.colors.light }]}>
                    {
                      'Collectors can own physical and digital assets and prove ownership with NFTs.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewIy} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconeY}
                    name={'MaterialCommunityIcons/gauge-empty'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextD2, { color: theme.colors.light }]}>
                    {
                      'Scarcity and tokenization can make the investment less risky and speculative.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewTs} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconAU}
                    name={'FontAwesome/group'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Textbx, { color: theme.colors.light }]}>
                    {
                      'Collectors have the ability to participate in global communities and can access exclusive events in some groups.'
                    }
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('CollectorMenuScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.ButtonOutline_3b}
            title={'Other Collector Topics'}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidhC: {
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
  },
  ViewbF: {
    alignSelf: 'flex-end',
  },
  Imageds: {
    width: 75,
    height: 75,
  },
  ViewV5: {
    alignItems: 'center',
  },
  TexthA: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextL6: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 77,
    marginTop: 12,
    marginBottom: 24,
  },
  TextkW: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Iconi2: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextCw: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewGM: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconeY: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextD2: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewIy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconAU: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textbx: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewTs: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_54: {
    marginTop: 12,
    marginBottom: 12,
  },
  Viewdb: {
    width: '100%',
  },
  View_1N: {
    flexDirection: 'row',
  },
  ButtonOutline_3b: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ScrollViewqeContent: {
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  LinearGradientq3: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(CollectorsScreen);
