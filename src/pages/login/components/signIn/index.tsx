import React, { useContext, useState } from 'react';
import { ButtonWrapper, HaveAccount, InputWrapper, Register, SafeAreaView, Title, Titles, Wrapper } from './styles';
import Text from '../../../../components/text';
import { useTranslation } from 'react-i18next';
import LoginInput from '../../../../components/inputs/loginInput';
import logo from './../../../../assets/logo/logo.png'
import Button from '../../../../components/button';
import { IStackNavigation } from '../../../../routes/types';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../../components/logo';
import { useAppDispatch } from '../../../../store/hooks';
import { Alert } from 'react-native';
import { IError } from '../../../../services/api/types';
import { signInThunk } from '../../../../store/reducers/user/thunks/signInThunk';
import { AxiosError } from 'axios';
import { apiError } from '../../../../errors/apiError';


const SignIn: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { navigate } = useNavigation<IStackNavigation>()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const verifyPassword = () => {
    if (password.length < 8) {
      setPassword('')
      Alert.alert('Error', t('Password must be at least 8 characters long') as string)
      return false
    }
    return true
  }

  const onSignIn = async () => {
    if (verifyPassword()) {
      await dispatch(signInThunk({ email, password }))
        .unwrap()
        .catch((err: AxiosError) => apiError({ err, t }))
    }
  }

  const onForgotPassword = () => {

  }

  return (
    <SafeAreaView >
      <Wrapper behavior='padding'>
        <Logo
          resizeMode='contain'
          source={logo}
          size={'giant_150'} />

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
          <LoginInput
            value={email}
            onChangeValue={setEmail}
            placeholder={t('Email')}
            type={'email'}
            isLogin />
          <LoginInput
            value={password}
            onChangeValue={setPassword}
            placeholder={t('Password')}
            type={'password'}
            isLogin={true} />
        </InputWrapper>

        <ButtonWrapper>
          <Button onPress={onSignIn} text={t('Login')} type='solid' />
          <Button onPress={onForgotPassword} text={t('Forgot password?')} type='clean' />
        </ButtonWrapper>
      </Wrapper>

      <HaveAccount>
        <Text
          text={t("Don't have an account?")}
          color={'secundaryFont'}
          size={'small_14'}
          weight={'regular'} />
        <Register onPress={() => { navigate('signUp') }}>
          <Text
            text={t('Register!')}
            color={'primaryColor'}
            size={'small_14'}
            weight={'bold'} />
        </Register>
      </HaveAccount>
    </SafeAreaView>
  )
}

export default SignIn;
