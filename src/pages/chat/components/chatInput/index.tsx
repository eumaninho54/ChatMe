import React, { memo, useEffect, useRef, useState } from 'react';
import { Animated, View } from 'react-native';
import BaseInput from '../../../../components/inputs/baseInput';
import { ButtonsGroup, ButtonsWrapper, IconWrapper, InputWrapper, SendGroup, Wrapper } from './styles';
import Icon from '../../../../components/icon';
import { useWebSocket } from '../../../../hooks/useWebSocket/useWebSocket';
import { IProps } from './types';


const ChatInput: React.FC<IProps> = ({ idChat }) => {
  const { sendMessage } = useWebSocket()
  const [messageText, setMessageText] = useState('')
  const buttonsWidth = useRef(new Animated.Value(100)).current


  const onSend = () => {
    sendMessage({ message: messageText, idChat })
  }

  const sendOpacity = buttonsWidth.interpolate({
    inputRange: [50, 80],
    outputRange: [1, 0]
  })

  const buttonsGroupOpacity = buttonsWidth.interpolate({
    inputRange: [50, 80],
    outputRange: [0, 1]
  })

  const buttonsGroupzIndex = buttonsWidth.interpolate({
    inputRange: [50, 80],
    outputRange: [0, 1]
  })

  useEffect(() => {
    Animated.spring(buttonsWidth, {
      toValue: messageText != '' ? 50 : 80,
      useNativeDriver: false,
      bounciness: 100
    }).start()

  }, [messageText])

  return (
    <Wrapper>
      <InputWrapper>
        <BaseInput
          multiline
          color='primaryBackground'
          outline={false}
          value={messageText}
          onChangeValue={setMessageText}
          placeholder=''
          autoCorrect
          autoCapitalize='sentences' />
      </InputWrapper>

      <ButtonsWrapper 
        style={{ width: buttonsWidth }}>
        <ButtonsGroup 
          style={{ opacity: buttonsGroupOpacity, zIndex: buttonsGroupzIndex }}>
          <IconWrapper>
            <Icon
              family='Ionicons'
              color='secundaryFont'
              size='big_25'
              name='mic' />
          </IconWrapper>

          <IconWrapper>
            <Icon
              family='Ionicons'
              color='secundaryFont'
              size='big_25'
              name='camera' />
          </IconWrapper>
        </ButtonsGroup>

        <SendGroup 
          style={{ opacity: sendOpacity }}>
          <IconWrapper onPress={onSend}>
            <Icon
              family='Ionicons'
              color='secundaryFont'
              size='big_25'
              name='send' />
          </IconWrapper>
        </SendGroup>
      </ButtonsWrapper>
    </Wrapper>
  )
}

export default memo(ChatInput);
