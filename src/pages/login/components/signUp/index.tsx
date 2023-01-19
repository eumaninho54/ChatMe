import React, { useState } from 'react';
import { Back, ButtonWrapper, InputWrapper, PasswordWrapper, Title, Titles, Wrapper } from './styles';
import SafeArea from '../../../../components/safeArea';
import Text from '../../../../components/text';
import Logo from '../../../../components/logo';
import LogoPng from '../../../../assets/logo/logo.png'
import { useTranslation } from 'react-i18next';
import Input from '../../../../components/input';
import Button from '../../../../components/button';
import Icon from '../../../../components/icon';
import { useNavigation } from '@react-navigation/native';
import { SignInScreenNavigation } from '../../../../routes/types';


const SignUp: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [state, setState] = useState('')
  const { navigate } = useNavigation<SignInScreenNavigation>()
  const onSignUp = () => {
  }

  return (
    <SafeArea color='primaryBackground'>
      <Back onPress={() => navigate('signIn')}>
        <SafeArea>
          <Icon
            color='primaryColor'
            name='angle-left'
            size='extra_big_30'
            family='FontAwesome5' />
        </SafeArea>
      </Back>

      <Wrapper>
        <Logo
          resizeMode='contain'
          size='giant_150'
          source={LogoPng} />

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

          <PasswordWrapper>
            <Input
              value={state}
              onChangeValue={(value) => setState(value)}
              placeholder={t('Password')}
              type={'password'} />

            <Input
              value={state}
              onChangeValue={(value) => setState(value)}
              placeholder={t('Confirm Password')}
              type={'password'} />
          </PasswordWrapper>
        </InputWrapper>

        <ButtonWrapper>
          <Button text={t('SignUp')} type='solid' />
          <Button onPress={onSignUp} text={t('SignUp')} type='solid' />
        </ButtonWrapper>

      </Wrapper>
    </SafeArea>
  )
}

export default SignUp;
