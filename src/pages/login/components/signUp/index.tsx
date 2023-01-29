import React, { useContext, useState } from 'react';
import { Back, ButtonWrapper, InputWrapper, PasswordWrapper, SafeAreaView, Title, Titles, Wrapper } from './styles';
import Text from '../../../../components/text';
import Logo from '../../../../components/logo';
import LogoPng from '../../../../assets/logo/logo.png'
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Icon from '../../../../components/icon';
import { useNavigation } from '@react-navigation/native';
import { SignInScreenNavigation } from '../../../../routes/types';
import { signUp } from '../../../../store/user/thunks/signUp';
import { Alert } from 'react-native';
import { useAppDispatch } from '../../../../store/hooks';
import { IError } from '../../../../services/api/types';
import { ITheme } from '../../../../styles/colors/types';
import { ThemeContext } from 'styled-components/native';


const SignUp: React.FC = () => {
  const { t, i18n } = useTranslation()
  const theme = useContext<ITheme>(ThemeContext)
  const { navigate } = useNavigation<SignInScreenNavigation>()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const verifyPassword = () => {
    if (password != confirmPassword) {
      setPassword('')
      setConfirmPassword('')
      Alert.alert('Error', t('Different passwords') as string)
      return false
    }
    if (password.length < 8) {
      setPassword('')
      setConfirmPassword('')
      Alert.alert('Error', t('Password must be at least 8 characters long') as string)
      return false
    }
    return true
  }

  const onSignUp = async () => {
    if (verifyPassword()) {
      await dispatch(signUp({ email, password }))
        .unwrap()
        .catch((err: IError) => Alert.alert(t('Error'), t(err.message) as string))
    }
  }

  return (
    <SafeAreaView>
      <Back onPress={() => navigate('signIn')}>
        <SafeAreaView>
          <Icon
            color='primaryColor'
            name='angle-left'
            size='extra_big_30'
            family='FontAwesome5' />
        </SafeAreaView>
      </Back>

      <Wrapper>
        <Logo
          resizeMode='contain'
          size='giant_150'
          source={LogoPng} />

        <Titles>
          <Title>
            <Text
              text={t('Welcome to DevChat!')}
              color='primaryFont'
              size='big_18'
              weight='semibold' />
          </Title>

          <Title>
            <Text
              text={t('Keep your data safe!')}
              color='secundaryFont'
              size='normal_16'
              weight='regular' />
          </Title>
        </Titles>

        <InputWrapper>
          <Input
            value={email}
            onChangeValue={setEmail}
            placeholder={t('Email')}
            type={'email'} />

          <PasswordWrapper>
            <Input
              value={password}
              onChangeValue={setPassword}
              placeholder={t('Password')}
              type={'password'} />

            <Input
              value={confirmPassword}
              onChangeValue={setConfirmPassword}
              placeholder={t('Confirm Password')}
              type={'password'} />
          </PasswordWrapper>
        </InputWrapper>

        <ButtonWrapper>
          <Button onPress={onSignUp} text={t('SignUp')} type='solid' />
        </ButtonWrapper>

      </Wrapper>
    </SafeAreaView>
  )
}

export default SignUp;
