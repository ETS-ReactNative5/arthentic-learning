import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const BurnoutScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientlc}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewCe} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'ArtistScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidV0,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidNm,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewTx} pointerEvents={'auto'}>
          <Image
            style={styles.ImageVu}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.Viewoq,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextJD, { color: theme.colors.surface }]}>
            {'Coping with Burnout'}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewCHContent}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <Image
            style={styles.Imageb9}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            resizeMode={'cover'}
          />
          <Text style={[styles.TextYf, { color: theme.colors.light }]}>
            {"Ever Feel Like You're Out of Creativity?"}
          </Text>

          <View style={styles.Viewhc} pointerEvents={'auto'}>
            <Icon
              style={styles.Icon_30}
              size={24}
              color={theme.colors.light}
              name={'FontAwesome/dot-circle-o'}
            />
            <Text style={[styles.TextNl, { color: theme.colors.light }]}>
              {
                'Creative Burnout is a real thing that can prevent you from completely enjoying your art process.\n'
              }
            </Text>
          </View>

          <View style={styles.ViewMX} pointerEvents={'auto'}>
            <Icon
              style={styles.Icontw}
              size={24}
              color={theme.colors.light}
              name={'FontAwesome/dot-circle-o'}
            />
            <Text style={[styles.TextW8, { color: theme.colors.light }]}>
              {
                "While we aren't mental health professionals, we have a few resources to help your creative journey."
              }
            </Text>
          </View>

          <View style={styles.ViewSj} pointerEvents={'auto'}>
            <Icon
              style={styles.Icona5}
              size={24}
              color={theme.colors.light}
              name={'FontAwesome/dot-circle-o'}
            />
            <Link
              onPress={() => {
                try {
                  Linking.openURL(
                    'https://bootcamp.berkeley.edu/blog/mental-health-resources-to-help-prevent-creative-and-professional-burnout/'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={"Berkley School of Music's (Free) Resources"}
            />
          </View>

          <View style={styles.Viewy7} pointerEvents={'auto'}>
            <Icon
              style={styles.Icon_1a}
              size={24}
              color={theme.colors.light}
              name={'FontAwesome/dot-circle-o'}
            />
            <Link
              onPress={() => {
                try {
                  Linking.openURL(
                    'https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'National Institute of Mental Health on Stress'}
            />
          </View>

          <View style={styles.ViewiB} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('FeedbackScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidam,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nComing Soon'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidV0: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidNm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewCe: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImageVu: {
    width: 75,
    height: 75,
  },
  ViewTx: {
    alignItems: 'center',
  },
  TextJD: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  Viewoq: {
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
  Imageb9: {
    width: '100%',
    height: 200,
  },
  TextYf: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_30: {
    right: 8,
  },
  TextNl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewhc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icontw: {
    right: 8,
  },
  TextW8: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewMX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icona5: {
    right: 8,
  },
  ViewSj: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_1a: {
    right: 8,
  },
  Viewy7: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ButtonSolidam: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewiB: {
    alignSelf: 'center',
  },
  ScrollViewCHContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  LinearGradientlc: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(BurnoutScreen);
