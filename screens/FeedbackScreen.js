import React from 'react';
import * as FeedbackApi from '../apis/FeedbackApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonSolid,
  Icon,
  LinearGradient,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const FeedbackScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const testPostPOST = FeedbackApi.useTestPostPOST();

  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textFieldValue, setTextFieldValue] = React.useState('');

  return (
    <ScreenContainer>
      <LinearGradient
        style={styles.LinearGradientQj}
        endY={100}
        endX={100}
        color1={theme.colors.background}
        color2={theme.colors.lightInverse}
      >
        <View style={styles.View_2m} pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidsK,
              {
                color: theme.colors.light,
                backgroundColor: theme.colors.mediumInverse,
                borderBottomLeftRadius: 12,
              },
            ]}
            title={'Back to\nLearning'}
          />
        </View>

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
            <TextField
              onChangeText={newStyledTextFieldValue => {
                const textFieldValue = newStyledTextFieldValue;
                try {
                  setTextFieldValue(textFieldValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextFieldEi,
                {
                  color: theme.colors.background,
                  backgroundColor: theme.colors.medium,
                  borderRadius: 12,
                  borderColor: theme.colors.background,
                },
              ]}
              placeholder={'IG, Twitter, or Email'}
              type={'solid'}
              value={textFieldValue}
              placeholderTextColor={theme.colors.background}
            />
            <TextField
              onChangeText={newStyledTextAreaValue => {
                const textAreaValue = newStyledTextAreaValue;
                try {
                  setTextAreaValue(textAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextFieldWp,
                {
                  backgroundColor: theme.colors.medium,
                  color: theme.colors.background,
                  borderColor: theme.colors.background,
                },
              ]}
              placeholder={
                'How can we improve? Is there anything we got wrong? Do you need help with setting up an NFT or DAO? Anything we didn’t think of?'
              }
              type={'solid'}
              multiline={true}
              numberOfLines={6}
              value={textAreaValue}
              placeholderTextColor={theme.colors.background}
            />
          </View>

          <View style={styles.Viewjm} pointerEvents={'auto'}>
            <ButtonSolid
              onPress={async () => {
                try {
                  await testPostPOST.mutateAsync({
                    feedback: textAreaValue,
                    name: textFieldValue,
                  });
                  navigation.navigate('HomeScreen');
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
              title={'Thank You For Letting Us Know!'}
            />
          </View>

          <View style={styles.View_94} pointerEvents={'auto'}>
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
  ButtonSolidsK: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  View_2m: {
    alignItems: 'flex-end',
  },
  ImageTJ: {
    width: 75,
    height: 75,
  },
  Viewkw: {
    alignItems: 'center',
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
  TextFieldEi: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 12,
    marginTop: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextFieldWp: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
    paddingTop: 12,
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
  Touchable_1Z: {
    marginLeft: 12,
    marginRight: 12,
  },
  TouchableQE: {
    marginLeft: 12,
    marginRight: 12,
  },
  Touchablesf: {
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
