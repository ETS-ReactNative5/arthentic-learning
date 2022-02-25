import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DAOsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientbA}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewaV} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('FeedbackScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidwA,
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
                navigation.navigate('CryptoBasicsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidpk,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

        <View style={styles.ViewJK} pointerEvents={'auto'}>
          <Image
            style={styles.Image_0u}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.ViewQT,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextP1, { color: theme.colors.surface }]}>
            {'Intro to DAOs'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.SwiperaG}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItem_7g}>
              <Image
                style={styles.Imagece}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Text_8n, { color: theme.colors.light }]}>
                {'What Are DAOs?'}
              </Text>

              <View style={styles.ViewUd} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconXa}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextJh, { color: theme.colors.light }]}>
                  {
                    'A Decentralized Autonomous Organization can be thought of as an LLC on a blockchain. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewVI} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconmF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textoj, { color: theme.colors.light }]}>
                  {
                    'In a DAO, the group has a specific goal that can be executed using smart contracts. Members contribute funds through a token/coin system, allowing voting and ownership.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewiq} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconqU}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texthn, { color: theme.colors.light }]}>
                  {
                    'Key aspects of a DAO allow a flattened hierarchy compared to corporations, a grassroots nature, transparency, and community based around the globe.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_9J}>
              <Image
                style={styles.Image_4a}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textw9, { color: theme.colors.light }]}>
                {'Decentralization'}
              </Text>

              <View style={styles.View_2M} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconpX}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextQ1, { color: theme.colors.light }]}>
                  {
                    'Most organizations have a single authority to maintain and govern their systems, known as Centralization.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewC3} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconnj}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextGc, { color: theme.colors.light }]}>
                  {
                    'The transfer of control and decision-making from a centralized entity (individual, organization, or group thereof) to a distributed network is Decentralization.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewjy} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icony4}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextbR, { color: theme.colors.light }]}>
                  {
                    'With more direct ownership, people will have to rely on less middlemen in this next version of the internet.'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemI7}>
              <Text style={[styles.TextiJ, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.Viewik} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconHy}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://cdixon.org/2018/02/18/why-decentralization-matters'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Why Decentralization Matters'}
                />
              </View>

              <View style={styles.ViewaE} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconE3}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://linda.mirror.xyz/Vh8K4leCGEO06_qSGx-vS5lvgUqhqkCz9ut81WwCP2o '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"Beginner's Guide to DAOs"}
                />
              </View>

              <View style={styles.View_8Y} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_8s}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://clay.mirror.xyz/DwJ60O0R1IyRiPAZFBw4L05L3fd8PPxWnzDNedKtOas'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'DAO Nations'}
                />
              </View>

              <View style={styles.Viewc4} pointerEvents={'auto'}>
                <Icon
                  style={styles.IcongV}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://coopahtroopa.mirror.xyz/_EDyn4cs9tDoOxNGZLfKL7JjLo5rGkkEfRa_a-6VEWw'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'DAO Landscape'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.Viewb0} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('AvoidingScamsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidvt,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nAvoiding Scams'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidwA: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ButtonSolidpk: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewaV: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Image_0u: {
    width: 75,
    height: 75,
  },
  ViewJK: {
    alignItems: 'center',
  },
  TextP1: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  ViewQT: {
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
  Imagece: {
    width: '100%',
    height: 200,
  },
  Text_8n: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconXa: {
    right: 8,
  },
  TextJh: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewUd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconmF: {
    right: 8,
  },
  Textoj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewVI: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconqU: {
    right: 8,
  },
  Texthn: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewiq: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_7g: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Image_4a: {
    width: '100%',
    height: 200,
  },
  Textw9: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconpX: {
    right: 8,
  },
  TextQ1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_2M: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconnj: {
    right: 8,
  },
  TextGc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewC3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icony4: {
    right: 8,
  },
  TextbR: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewjy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItem_9J: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextiJ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconHy: {
    right: 8,
  },
  Viewik: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconE3: {
    right: 8,
  },
  ViewaE: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_8s: {
    right: 8,
  },
  View_8Y: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IcongV: {
    right: 8,
  },
  Viewc4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemI7: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  SwiperaG: {
    width: '100%',
    height: 450,
  },
  ButtonSolidvt: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  Viewb0: {
    alignSelf: 'center',
  },
  LinearGradientbA: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(DAOsScreen);
