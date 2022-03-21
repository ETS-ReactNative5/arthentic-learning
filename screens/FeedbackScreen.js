import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  ScreenContainer,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const FeedbackScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientQj}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.Viewkw} pointerEvents={'auto'}>
          <Image
            style={styles.ImageTJ}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <View
            style={[
              styles.View_1Z,
              { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
            ]}
            pointerEvents={'auto'}
          >
            <Text style={[styles.TextGi, { color: theme.colors.surface }]}>
              {'Feedback'}
            </Text>
          </View>

          <View style={styles.Viewvw} pointerEvents={'auto'}>
            <SwiperItem style={styles.SwiperItemqW}>
              <Text style={[styles.TextYp, { color: theme.colors.light }]}>
                {'Please Contact Us!'}
              </Text>

              <View style={styles.ViewF9} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconCh}
                  size={24}
                  color={theme.colors.light}
                  name={'AntDesign/form'}
                />
                <Text style={[styles.Textsk, { color: theme.colors.light }]}>
                  {'Fill out the form on our website or\n'}
                </Text>
              </View>

              <View style={styles.ViewhG} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconYL}
                  size={24}
                  color={theme.colors.light}
                  name={'MaterialCommunityIcons/email'}
                />
                <Text style={[styles.TextUI, { color: theme.colors.light }]}>
                  {'Email us at arthentic.me@gmail.com'}
                </Text>
              </View>
            </SwiperItem>
          </View>

          <View style={styles.Viewjm} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidbW,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Back to Learning'}
            />
          </View>

          <View style={styles.View_94} pointerEvents={'auto'}>
            <Touchable
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.instagram.com/arthenticme/'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchablesf}
            >
              <Icon
                size={24}
                color={theme.colors.medium}
                name={'AntDesign/instagram'}
              />
            </Touchable>

            <Touchable
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://discord.gg/ApGAwuNB8W'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.Touchable_1Z}
            >
              <Icon
                size={24}
                name={'MaterialCommunityIcons/discord'}
                color={theme.colors.medium}
              />
            </Touchable>

            <Touchable
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://twitter.com/ArthenticMe'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableQE}
            >
              <Icon
                size={24}
                color={theme.colors.medium}
                name={'AntDesign/twitter'}
              />
            </Touchable>

            <Touchable
              onPress={async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.arthenticme.com'
                  );
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TouchableHh}
            >
              <Icon
                size={24}
                color={theme.colors.medium}
                name={'MaterialCommunityIcons/web'}
              />
            </Touchable>
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageTJ: {
    width: 75,
    height: 75,
  },
  Viewkw: {
    alignItems: 'center',
    marginTop: 48,
  },
  TextGi: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  View_1Z: {
    paddingTop: 16,
    paddingBottom: 16,
    width: 230,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextYp: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconCh: {
    right: 8,
  },
  Textsk: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewF9: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconYL: {
    right: 8,
  },
  TextUI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewhG: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemqW: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Viewvw: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 50,
  },
  ButtonSolidbW: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  Viewjm: {
    alignSelf: 'center',
  },
  Touchablesf: {
    marginLeft: 12,
    marginRight: 12,
  },
  Touchable_1Z: {
    marginLeft: 12,
    marginRight: 12,
  },
  TouchableQE: {
    marginLeft: 12,
    marginRight: 12,
  },
  TouchableHh: {
    marginLeft: 12,
    marginRight: 12,
  },
  View_94: {
    alignSelf: 'center',
    marginTop: 24,
    flexDirection: 'row',
  },
  LinearGradientQj: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(FeedbackScreen);
