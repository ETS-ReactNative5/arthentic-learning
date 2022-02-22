import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  Icon,
  LinearGradient,
  ScreenContainer,
  Square,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const Web1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradient_1L}
        endY={100}
        endX={100}
        color1={theme.colors.surface}
        color2={theme.colors.surface}
      >
        <View style={styles.ViewWw} pointerEvents={'auto'}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles.Viewk3} pointerEvents={'auto'}>
              <View style={styles.View_8C} pointerEvents={'auto'}>
                <Square size={30} bgColor={theme.colors.secondary} />
              </View>

              <View style={styles.ViewgU} pointerEvents={'auto'}>
                <Square size={30} bgColor={theme.colors.yellow} />
              </View>

              <View style={styles.ViewRb} pointerEvents={'auto'}>
                <Square size={30} bgColor={theme.colors.error} />
              </View>
            </View>
          </Touchable>
        </View>

        <View style={styles.ViewOU} pointerEvents={'auto'}>
          <Image
            style={styles.Imagems}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollView_7qContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <Text style={[styles.Textac, { color: theme.colors.mediumInverse }]}>
            {'When the internet first came out, the main function was'}
          </Text>

          <Text style={[styles.TextQo, { color: theme.colors.primary }]}>
            {'Reading'}
          </Text>

          <Text style={[styles.TextCl, { color: theme.colors.mediumInverse }]}>
            {'Qualities of Web1'}
          </Text>

          <View style={styles.Viewzz} pointerEvents={'auto'}>
            <View style={styles.Viewbg} pointerEvents={'auto'}>
              <Icon
                style={styles.Icone6}
                name={'Entypo/aircraft'}
                size={24}
                color={theme.colors.secondary}
              />
              <Text
                style={[styles.TextJI, { color: theme.colors.mediumInverse }]}
              >
                {"Read Someone's Travel Blog"}
              </Text>
            </View>

            <View style={styles.ViewUH} pointerEvents={'auto'}>
              <Icon
                style={styles.IconcC}
                name={'MaterialCommunityIcons/email-alert'}
                size={24}
                color={theme.colors.secondary}
              />
              <Text
                style={[styles.Textya, { color: theme.colors.mediumInverse }]}
              >
                {'Check Your Emails'}
              </Text>
            </View>

            <View style={styles.ViewA5} pointerEvents={'auto'}>
              <Icon
                style={styles.IconOw}
                name={'MaterialIcons/cloud-download'}
                size={24}
                color={theme.colors.secondary}
              />
              <Text
                style={[styles.Text_7d, { color: theme.colors.mediumInverse }]}
              >
                {'Download Files, like Music'}
              </Text>
            </View>

            <View style={styles.ViewhE} pointerEvents={'auto'}>
              <Icon
                style={styles.IconvS}
                name={'MaterialCommunityIcons/account-star'}
                size={24}
                color={theme.colors.secondary}
              />
              <Text
                style={[styles.TextX1, { color: theme.colors.mediumInverse }]}
              >
                {"Visit Your Favorite Artist's Fan Page"}
              </Text>
            </View>

            <View style={styles.Viewcb} pointerEvents={'auto'}>
              <Icon
                style={styles.IconEB}
                name={'FontAwesome/picture-o'}
                size={24}
                color={theme.colors.secondary}
              />
              <Text
                style={[styles.Textod, { color: theme.colors.mediumInverse }]}
              >
                {'Upload Files, like Pictures'}
              </Text>
            </View>
          </View>

          <View pointerEvents={'auto'}>
            <View style={styles.Viewys} pointerEvents={'auto'}>
              <Text
                style={[styles.TextBa, { color: theme.colors.mediumInverse }]}
              >
                {'The internet started as something '}
              </Text>

              <Text
                style={[styles.TextSC, { color: theme.colors.mediumInverse }]}
              >
                {'decentralized'}
              </Text>
            </View>

            <View style={styles.Viewur} pointerEvents={'auto'}>
              <Text
                style={[styles.TextOy, { color: theme.colors.mediumInverse }]}
              >
                {'meaning everyone had control of the content.'}
              </Text>
            </View>
          </View>
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('Web2Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlinevQ,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={"But This Wouldn't Last..."}
          />
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_8C: {
    paddingRight: 16,
    flexDirection: 'row',
  },
  ViewgU: {
    paddingRight: 16,
    flexDirection: 'row',
  },
  ViewRb: {
    paddingRight: 16,
    flexDirection: 'row',
  },
  Viewk3: {
    flexDirection: 'row',
    marginTop: 18,
  },
  ViewWw: {
    alignSelf: 'flex-end',
  },
  Imagems: {
    width: 75,
    height: 75,
  },
  ViewOU: {
    alignItems: 'center',
  },
  Textac: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  TextQo: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 96,
    marginTop: 12,
    marginBottom: 24,
  },
  TextCl: {
    fontFamily: 'RobotoCondensed_700Bold',
    fontSize: 24,
    textAlign: 'center',
  },
  Icone6: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextJI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewbg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconcC: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textya: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewUH: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconOw: {
    marginRight: 6,
    marginLeft: 6,
  },
  Text_7d: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewA5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconvS: {
    marginRight: 6,
    marginLeft: 6,
  },
  TextX1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  ViewhE: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconEB: {
    marginRight: 6,
    marginLeft: 6,
  },
  Textod: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewcb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewzz: {
    marginTop: 12,
    marginBottom: 12,
  },
  TextBa: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    textAlign: 'center',
  },
  TextSC: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textAlign: 'center',
  },
  Viewys: {
    flexDirection: 'row',
  },
  TextOy: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
  Viewur: {
    flexDirection: 'row',
  },
  ButtonOutlinevQ: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  ScrollView_7qContent: {
    paddingTop: 32,
    paddingBottom: 32,
    marginLeft: 18,
    marginRight: 18,
    alignItems: 'center',
  },
  LinearGradient_1L: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(Web1Screen);
