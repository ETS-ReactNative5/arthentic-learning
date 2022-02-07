import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const IntroScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientit}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewWW} pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidYl,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewBs} pointerEvents={'auto'}>
          <Image
            style={styles.ImageTn}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View style={styles.ViewgH} pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidu1,
              {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.medium,
              },
            ]}
            title={'Introduction'}
          />
          <ButtonSolid
            style={[
              styles.ButtonSolidui,
              {
                backgroundColor: theme.colors.divider,
                color: theme.colors.lightInverse,
              },
            ]}
            title={'Advanced'}
          />
          <ButtonSolid
            style={[
              styles.ButtonSolid_1k,
              {
                backgroundColor: theme.colors.divider,
                color: theme.colors.lightInverse,
              },
            ]}
            title={'Premium'}
          />
        </View>

        <View style={styles.Viewwv} pointerEvents={'auto'}>
          <View style={styles.ViewPC} pointerEvents={'auto'}>
            <View style={styles.ViewF7} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'Entypo/line-graph'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.TextK1, { color: theme.colors.light }]}>
                {'Economics Basics\n'}
              </Text>
            </View>

            <View style={styles.ViewFe} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'MaterialCommunityIcons/spider-web'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textav, { color: theme.colors.light }]}>
                {'Web 3.0'}
              </Text>
            </View>

            <View style={styles.ViewD2} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'MaterialCommunityIcons/graphql'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.TextD6, { color: theme.colors.light }]}>
                {'Cryptography\n(Security)\n'}
              </Text>
            </View>

            <View style={styles.ViewTe} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'Ionicons/wallet-outline'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.TextV3, { color: theme.colors.light }]}>
                {'Crypto Wallet'}
              </Text>
            </View>

            <View style={styles.ViewkL} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'MaterialCommunityIcons/security'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textid, { color: theme.colors.light }]}>
                {'Avoiding Scams'}
              </Text>
            </View>
          </View>

          <View style={styles.Viewya} pointerEvents={'auto'}>
            <View style={styles.ViewyR} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'Ionicons/infinite'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textwi, { color: theme.colors.light }]}>
                {'Metaverse'}
              </Text>
            </View>

            <View style={styles.Viewhj} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'Ionicons/md-disc-outline'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textmk, { color: theme.colors.light }]}>
                {'Decentralization'}
              </Text>
            </View>

            <View style={styles.ViewWU} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'MaterialCommunityIcons/semantic-web'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textfc, { color: theme.colors.light }]}>
                {'Blockchain'}
              </Text>
            </View>

            <View style={styles.ViewC7} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'MaterialCommunityIcons/bitcoin'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.TextvI, { color: theme.colors.light }]}>
                {'Coins vs. Tokens'}
              </Text>
            </View>

            <View style={styles.ViewmJ} pointerEvents={'auto'}>
              <Circle size={80} bgColor={theme.colors.secondary}>
                <Circle size={70} bgColor={theme.colors.divider}>
                  <Icon
                    size={32}
                    color={theme.colors.primary}
                    name={'Ionicons/md-newspaper'}
                  />
                </Circle>
              </Circle>

              <Text style={[styles.Textz0, { color: theme.colors.light }]}>
                {'Smart Contracts'}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidYl: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewWW: {
    alignSelf: 'flex-end',
  },
  ImageTn: {
    width: 75,
    height: 75,
  },
  ViewBs: {
    alignItems: 'center',
  },
  ButtonSolidu1: {
    borderRadius: 8,
    fontFamily: 'RobotoCondensed_400Regular',
    textAlign: 'center',
    fontSize: 18,
  },
  ButtonSolidui: {
    borderRadius: 8,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
    fontSize: 18,
  },
  ButtonSolid_1k: {
    borderRadius: 8,
    fontFamily: 'RobotoCondensed_700Bold',
    textAlign: 'center',
    fontSize: 18,
  },
  ViewgH: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
    paddingBottom: 16,
  },
  TextK1: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewF7: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textav: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewFe: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextD6: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
  },
  ViewD2: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextV3: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewTe: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textid: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewkL: {
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 6,
  },
  ViewPC: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Textwi: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewyR: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textmk: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  Viewhj: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textfc: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewWU: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  TextvI: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewC7: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Textz0: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewmJ: {
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Viewya: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewwv: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  LinearGradientit: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(IntroScreen);
