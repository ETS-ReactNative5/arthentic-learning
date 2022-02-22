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

const BlockchainScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientd0}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.ViewTA} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'CryptoBasicsScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_0a,
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
              styles.ButtonSolidr0,
              {
                color: theme.colors.light,
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
              },
            ]}
            title={'Feedback'}
          />
        </View>

        <View style={styles.ViewmV} pointerEvents={'auto'}>
          <Image
            style={styles.ImagetP}
            source={Images.TransparentLogoMark}
            resizeMode={'cover'}
          />
        </View>

        <View
          style={[
            styles.Viewcr,
            { backgroundColor: theme.colors.lightInverse, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <Text style={[styles.TextlY, { color: theme.colors.surface }]}>
            {'Blockchain'}
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
          <Swiper
            style={styles.Swiper_0g}
            dotActiveColor={theme.colors.primary}
            dotsTouchable={true}
            dotColor={theme.colors.background}
            loop={true}
          >
            <SwiperItem style={styles.SwiperItemXa}>
              <Image
                style={styles.ImageT2}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextWK, { color: theme.colors.light }]}>
                {'A Brief Introduction'}
              </Text>

              <View style={styles.Viewod} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_6B}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_64, { color: theme.colors.light }]}>
                  {
                    'The basis for cryptocurrencies, this new technology allows a bunch of computers to test the truthfulness of a set of data at a regular interval.\n'
                  }
                </Text>
              </View>

              <View style={styles.View_8m} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconx4}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texto6, { color: theme.colors.light }]}>
                  {'The data set is called a ledger.\n'}
                </Text>
              </View>

              <View style={styles.Viewy3} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconWe}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextTj, { color: theme.colors.light }]}>
                  {
                    'Every node, or device connected to the blockchain, holds a full copy of the ledger. If one of the ledgers doesn’t match all the others, it is marked as a false ledger.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewzl} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconq4}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Text_3c, { color: theme.colors.light }]}>
                  {
                    'The greater the number of nodes, the more secure the blockchain is.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemJY}>
              <Image
                style={styles.ImagekZ}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextaR, { color: theme.colors.light }]}>
                {'How Blockchain is Made'}
              </Text>

              <View style={styles.View_0v} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconas}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextjM, { color: theme.colors.light }]}>
                  {
                    'Mining is the process of creating new nodes and is usually rewarded with coins/tokens from the blockchain.\n'
                  }
                </Text>
              </View>

              <View style={styles.Viewi2} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEE}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextKZ, { color: theme.colors.light }]}>
                  {'Every time the network updates, every node updates.\n'}
                </Text>
              </View>

              <View style={styles.Viewff} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_8Z}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texteo, { color: theme.colors.light }]}>
                  {'The network verifies updates using a consensus mechanism.'}
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemwB}>
              <Image
                style={styles.ImageJf}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextZE, { color: theme.colors.light }]}>
                {'Main Consensus Mechanisms'}
              </Text>

              <View style={styles.View_0U} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconcg}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextUC, { color: theme.colors.light }]}>
                  {
                    'Proof of Work (PoW) is a form of proof in which one party (the prover) proves to others (the validators) that a certain amount of computation has been done for their reward.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewmO} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_0M}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textex, { color: theme.colors.light }]}>
                  {
                    'This method is energy intensive and requires lots of computer power. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewU1} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconEF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextNH, { color: theme.colors.light }]}>
                  {
                    'Proof of Stake (PoS) gives proof based on the number of coins/tokens pledged to the blockchain. If a holder owns more coins, their block is more likely to be validated next.'
                  }
                </Text>
              </View>

              <View style={styles.ViewxC} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconJl}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textzj, { color: theme.colors.light }]}>
                  {
                    'The theory is that the people with the most money in the system will want the system to continue working.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemUe}>
              <Text style={[styles.TextIw, { color: theme.colors.light }]}>
                {'Secondary Consensus Mechanisms'}
              </Text>

              <View style={styles.ViewcX} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUR}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TexteG, { color: theme.colors.light }]}>
                  {
                    'Delegated Proof of Stake (DPoS) is like PoS, but adds the benefit of a democratically elected group to govern the validation. \n'
                  }
                </Text>
              </View>

              <View style={styles.View_6o} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUl}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textbf, { color: theme.colors.light }]}>
                  {
                    'Proof of Capacity (PoC) is a system that has been predetermined. Instead of proving where the block is added, the storage has already been mapped out, or plotted. The miners use the mapped out storage to create blocks much quicker than any other consensus mechanism.'
                  }
                </Text>
              </View>

              <View style={styles.ViewMx} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconJE}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextFI, { color: theme.colors.light }]}>
                  {'PoC only works with a large amount of storage capacity. \n'}
                </Text>
              </View>

              <View style={styles.ViewbU} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconCH}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextHp, { color: theme.colors.light }]}>
                  {
                    'Proof of Elapsed Time (PoET) allows the validators to show how long they’ve waited to mine a block, incentivising miners to keep working on the project for their reward.'
                  }
                </Text>
              </View>

              <View style={styles.Viewz4} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_0D}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textmm, { color: theme.colors.light }]}>
                  {
                    'Proof of Burn (PoB) requires the miner to send some cryptocurrency to an inaccessible wallet to validate, thus burning the crypto.'
                  }
                </Text>
              </View>

              <View style={styles.ViewYn} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconMF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextxG, { color: theme.colors.light }]}>
                  {
                    'Proof of Authority (PoA) works better for private blockchains, as a predetermined set of users have the power to validate transactions.'
                  }
                </Text>
              </View>

              <View style={styles.ViewzF} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconJF}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Texth7, { color: theme.colors.light }]}>
                  {
                    'While there are many more consensus mechanisms, their main point is to use game theory to control how the blockchain is used and maintained. '
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItem_0q}>
              <Image
                style={styles.ImageGP}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Texttc, { color: theme.colors.light }]}>
                {'IPFS (Interplanetary File System)'}
              </Text>

              <View style={styles.ViewHd} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconSt}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextS1, { color: theme.colors.light }]}>
                  {
                    'The Interplanetary File System is decentralized data storage for blockchain media.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemNg}>
              <Image
                style={styles.ImagerP}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.TextNJ, { color: theme.colors.light }]}>
                {'Forking, or How Blockchains Update'}
              </Text>

              <View style={styles.ViewAh} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUz}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextYw, { color: theme.colors.light }]}>
                  {
                    'When upgrading a blockchain, the software has to be approved by the current validators. If they cannot agree on a roadmap, the group can split, or fork into many groups.\n'
                  }
                </Text>
              </View>

              <View style={styles.ViewkN} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconYd}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextGs, { color: theme.colors.light }]}>
                  {
                    'Hard forks are incompatible with the old blockchain, where soft forks remain compatible.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItemYu}>
              <Image
                style={styles.ImageqX}
                source={{
                  uri: 'https://static.draftbit.com/images/placeholder-image.png',
                }}
                resizeMode={'cover'}
              />
              <Text style={[styles.Textav, { color: theme.colors.light }]}>
                {'Gas Fees, AKA The Price of Using Blockchain'}
              </Text>

              <View style={styles.ViewBw} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconz9}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textm1, { color: theme.colors.light }]}>
                  {
                    'To have your data submitted on a block, you have to pay a fee, called Gas. \n'
                  }
                </Text>
              </View>

              <View style={styles.ViewEM} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icon_4A}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextDa, { color: theme.colors.light }]}>
                  {
                    'This can be for a transaction or calculation on the chain. \n'
                  }
                </Text>
              </View>

              <View style={styles.View_0B} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icong9}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.Textdf, { color: theme.colors.light }]}>
                  {'Gas is not charged to see the current balances.\n'}
                </Text>
              </View>

              <View style={styles.Viewuq} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconfd}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Text style={[styles.TextOB, { color: theme.colors.light }]}>
                  {
                    'Gas fees are anticipated to drop as new blockchain technology emerges.\n'
                  }
                </Text>
              </View>
            </SwiperItem>

            <SwiperItem style={styles.SwiperItembp}>
              <Text style={[styles.TextBB, { color: theme.colors.light }]}>
                {'Sources'}
              </Text>

              <View style={styles.ViewGe} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconmu}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://mitsloan.mit.edu/ideas-made-to-matter/blockchain-explained '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'MIT Explains Blockchain'}
                />
              </View>

              <View style={styles.Viewog} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconNU}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.bitdegree.org/crypto/tutorials/blockchain-explained'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"BitDegree's Course on Blockchain"}
                />
              </View>

              <View style={styles.ViewvB} pointerEvents={'auto'}>
                <Icon
                  style={styles.Iconzm}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://econcs.seas.harvard.edu/files/econcs/files/naim-thesis.pdf'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Harvard Talks Blockchain'}
                />
              </View>

              <View style={styles.ViewQL} pointerEvents={'auto'}>
                <Icon
                  style={styles.IconUq}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://www.dre.vanderbilt.edu/~schmidt/PDF/CH0007_Deka_v8.pdf '
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={"Vanderbilt's Blockchain Course"}
                />
              </View>

              <View style={styles.Viewfs} pointerEvents={'auto'}>
                <Icon
                  style={styles.Icond7}
                  size={24}
                  color={theme.colors.light}
                  name={'FontAwesome/dot-circle-o'}
                />
                <Link
                  onPress={() => {
                    try {
                      Linking.openURL(
                        'https://plato.stanford.edu/entries/game-theory/'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ color: theme.colors.primary }}
                  title={'Stanford on Game Theory'}
                />
              </View>
            </SwiperItem>
          </Swiper>

          <View style={styles.ViewqU} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={() => {
                try {
                  navigation.navigate('WalletsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonSolidGE,
                {
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                },
              ]}
              title={'Next Up:\nOne Wallet to Rule Them All'}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolid_0a: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ButtonSolidr0: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewTA: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ImagetP: {
    width: 75,
    height: 75,
  },
  ViewmV: {
    alignItems: 'center',
  },
  TextlY: {
    fontSize: 24,
    fontFamily: 'RobotoCondensed_400Regular',
  },
  Viewcr: {
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
  ImageT2: {
    width: '100%',
    height: 200,
  },
  TextWK: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Icon_6B: {
    right: 8,
  },
  Text_64: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconx4: {
    right: 8,
  },
  Texto6: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_8m: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconWe: {
    right: 8,
  },
  TextTj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewy3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Iconq4: {
    right: 8,
  },
  Text_3c: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewzl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemXa: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagekZ: {
    width: '100%',
    height: 200,
  },
  TextaR: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconas: {
    right: 8,
  },
  TextjM: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_0v: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconEE: {
    right: 8,
  },
  TextKZ: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewi2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_8Z: {
    right: 8,
  },
  Texteo: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewff: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemJY: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageJf: {
    width: '100%',
    height: 200,
  },
  TextZE: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconcg: {
    right: 8,
  },
  TextUC: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_0U: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_0M: {
    right: 8,
  },
  Textex: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewmO: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 18,
  },
  IconEF: {
    right: 8,
  },
  TextNH: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewU1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconJl: {
    right: 8,
  },
  Textzj: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewxC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 18,
  },
  SwiperItemwB: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextIw: {
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconUR: {
    right: 8,
  },
  TexteG: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewcX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconUl: {
    right: 8,
  },
  Textbf: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_6o: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconJE: {
    right: 8,
  },
  TextFI: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewMx: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 18,
  },
  IconCH: {
    right: 8,
  },
  TextHp: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewbU: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  Icon_0D: {
    right: 8,
  },
  Textmm: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewz4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconMF: {
    right: 8,
  },
  TextxG: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewYn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  IconJF: {
    right: 8,
  },
  Texth7: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewzF: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 6,
  },
  SwiperItemUe: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageGP: {
    width: '100%',
    height: 200,
  },
  Texttc: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconSt: {
    right: 8,
  },
  TextS1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewHd: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItem_0q: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImagerP: {
    width: '100%',
    height: 200,
  },
  TextNJ: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  IconUz: {
    right: 8,
  },
  TextYw: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewAh: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconYd: {
    right: 8,
  },
  TextGs: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewkN: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemNg: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  ImageqX: {
    width: '100%',
    height: 200,
  },
  Textav: {
    marginTop: 12,
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconz9: {
    right: 8,
  },
  Textm1: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewBw: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icon_4A: {
    right: 8,
  },
  TextDa: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewEM: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icong9: {
    right: 8,
  },
  Textdf: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  View_0B: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconfd: {
    right: 8,
  },
  TextOB: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewuq: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItemYu: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextBB: {
    marginBottom: 12,
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18,
  },
  Iconmu: {
    right: 8,
  },
  ViewGe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconNU: {
    right: 8,
  },
  Viewog: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Iconzm: {
    right: 8,
  },
  ViewvB: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  IconUq: {
    right: 8,
  },
  ViewQL: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  Icond7: {
    right: 8,
  },
  Viewfs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  SwiperItembp: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  Swiper_0g: {
    width: '100%',
    height: 465,
  },
  ButtonSolidGE: {
    borderRadius: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 192,
    height: 60,
  },
  ViewqU: {
    alignSelf: 'center',
  },
  LinearGradientd0: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(BlockchainScreen);
