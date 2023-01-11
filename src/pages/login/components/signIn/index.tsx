import React, { useState } from 'react';
import { ButtonWrapper, HaveAccount, InputWrapper, Register, Title, Titles, Wrapper } from './styles';
import Text from '../../../../components/text';
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/input';
import logo from './../../../../assets/logo/logo.png'
import Button from '../../../../components/button';
import { SignInScreenNavigation } from '../../../../routes/types';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../../../components/logo';
import SafeArea from '../../../../components/safeArea';


const SignIn: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [state, setState] = useState('TESTANDO')
  const [state2, setState2] = useState('TESTANDO')
  const { navigate } = useNavigation<SignInScreenNavigation>()

  return (
    <SafeArea color='primaryBackground'>
      <Wrapper>
        <Logo 
          resizeMode='contain' 
          source={logo} 
          size={'giant_150'}/>

        <Titles>
          <Title>
            <Text
              text={t('Welcome to ChatMe!')}
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
            value={state}
            onChangeValue={(value) => setState(value)}
            placeholder={t('Email')}
            type={'email'} />
          <Input
            value={state2}
            onChangeValue={(value) => setState2(value)}
            placeholder={t('Password')}
            type={'password'} />
        </InputWrapper>

        <ButtonWrapper>
          <Button text={t('Login')} type='solid' />
          <Button text={t('Forgot password?')} type='clean' />
        </ButtonWrapper>
      </Wrapper>

      <HaveAccount>
        <Text
          text={t("Don't have an account?")}
          color={'secundaryFont'}
          size={'small_14'}
          weight={'regular'} />
        <Register onPress={() => {navigate('signUp')}}>
          <Text
            text={t('Register!')}
            color={'primaryColor'}
            size={'small_14'}
            weight={'bold'} />
        </Register>
      </HaveAccount>
    </SafeArea>
  )
}

export default SignIn;
