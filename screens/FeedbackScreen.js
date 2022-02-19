import React from 'react';
import Images from '../config/Images';
import {
  ButtonSolid,
  LinearGradient,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const FeedbackScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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
                borderRadius: 12,
                backgroundColor: theme.colors.mediumInverse,
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
            onChangeText={textFieldValue => {
              try {
                setTextFieldValue(textFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextFieldEL,
              {
                color: theme.colors.background,
                borderRadius: 12,
                borderColor: theme.colors.background,
                backgroundColor: theme.colors.medium,
              },
            ]}
            placeholder={'Name'}
            type={'solid'}
            value={textFieldValue}
            placeholderTextColor={theme.colors.background}
          />
          <TextField
            onChangeText={textFieldValue => {
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
            placeholder={'IG/Twitter'}
            type={'solid'}
            value={textFieldValue}
            placeholderTextColor={theme.colors.background}
          />
          <TextField
            onChangeText={textAreaValue => {
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
    alignSelf: 'flex-start',
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
  TextFieldEL: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginTop: 18,
    marginBottom: 18,
  },
  TextFieldEi: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginBottom: 18,
    marginTop: 18,
  },
  TextFieldWp: {
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginTop: 18,
    marginBottom: 18,
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
  LinearGradientQj: {
    width: '100%',
    height: '100%',
  },
});

export default withTheme(FeedbackScreen);
