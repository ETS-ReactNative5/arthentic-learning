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

const ArtistsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradient_4U}
        endY={100}
        endX={100}
        color1={theme.colors.medium}
        color2={theme.colors.mediumInverse}
      >
        <View style={styles.ViewlG} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidml,
              {
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              },
            ]}
            title={'Back Home'}
          />
        </View>

        <View style={styles.Viewo3} pointerEvents={'auto'}>
          <Image
            style={styles.Image_7D}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewjVContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.Text_7i, { color: theme.colors.light }]}>
            {"Here's Why You Should Care About NFTs\nfor"}
          </Text>

          <Text style={[styles.TextPs, { color: theme.colors.primary }]}>
            {'Artists'}
          </Text>

          <View style={styles.Viewbx} pointerEvents={'auto'}>
            <View style={styles.Viewhz} pointerEvents={'auto'}>
              <Text style={[styles.TextoT, { color: theme.colors.light }]}>
                {'Connect with Your Audience'}
              </Text>

              <View style={styles.ViewDV} pointerEvents={'auto'}>
                <View style={styles.ViewUH} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconpC}
                    name={'MaterialCommunityIcons/digital-ocean'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Text_6w, { color: theme.colors.light }]}>
                    {
                      "NFTs are digital representations of ownership. Today they're commonly used to represent all types of artwork."
                    }
                  </Text>
                </View>

                <View style={styles.ViewEb} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconmX}
                    name={'Entypo/copy'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextaG, { color: theme.colors.light }]}>
                    {
                      'NFTs can NOT be duplicated, giving a protected status to original artwork.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewvT} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconE2}
                    name={'FontAwesome/money'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextWO, { color: theme.colors.light }]}>
                    {
                      'There are digital marketplaces that give royalties for all sales on their platforms, meaning you get paid every single time your work sells.'
                    }
                  </Text>
                </View>

                <View style={styles.ViewCm} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconGy}
                    name={'FontAwesome/bank'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.TextVT, { color: theme.colors.light }]}>
                    {
                      'When lots of artists turn to creating NFTs, virtual museums will likely come into existence.'
                    }
                  </Text>
                </View>

                <View style={styles.Viewzx} pointerEvents={'auto'}>
                  <Icon
                    style={styles.IconeJ}
                    name={'MaterialCommunityIcons/forwardburger'}
                    size={24}
                    color={theme.colors.medium}
                  />
                  <Text style={[styles.Text_99, { color: theme.colors.light }]}>
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
                navigation.navigate('ArtistMenuScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.ButtonOutlinezo}
            title={'Other Artist Topics'}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidml: {
    borderRadius: 12,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
  },
  ViewlG: {
    alignSelf: 'flex-end',
  },
  Image_7D: {
    width: 75,
    height: 75,
  },
  Viewo3: {
    alignItems: 'center',
  },
  Text_7i: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextPs: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 77,
    marginTop: 12,
    marginBottom: 24,
  },
  TextoT: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  IconpC: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_6w: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewUH: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconmX: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextaG: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewEb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconE2: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextWO: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewvT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconGy: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextVT: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  ViewCm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconeJ: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_99: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
  },
  Viewzx: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewDV: {
    marginTop: 12,
    marginBottom: 12,
  },
  Viewhz: {
    width: '100%',
  },
  Viewbx: {
    flexDirection: 'row',
  },
  ButtonOutlinezo: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ScrollViewjVContent: {
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  LinearGradient_4U: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(ArtistsScreen);
