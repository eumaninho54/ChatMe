import React, { useContext, useState } from 'react';
import { ButtonWrapper, HaveAccount, InputWrapper, Logo, Register, SafeAreaView, Title, Titles, Wrapper } from './styles';
import Text from '../../../../components/text';
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/input';
import logo from './../../../../assets/logo/logo.png'
import Button from '../../../../components/button';
import { ThemeContext } from 'styled-components/native';
import { ITheme } from '../../../../styles/colors/types';


const SignIn: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [state, setState] = useState('TESTANDO')
  const [state2, setState2] = useState('TESTANDO')
  const theme = useContext<ITheme>(ThemeContext)

  return (
    <SafeAreaView>
      <Wrapper>
        <Logo resizeMode='contain' source={logo} />

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
        <Register>
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
