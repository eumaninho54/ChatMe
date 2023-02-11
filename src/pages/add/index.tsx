import React from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import User from './components/user';
import { Indicator, ModalContent, ModalWrapper, TopIndicatorWrapper } from './styles';
import { IProps } from './types';


const Add: React.FC<IProps> = (props) => {
  const { isVisible, setVisible, type } = props
  const { bottom } = useSafeAreaInsets()

  const renderTypeModal = () => {
    switch (type) {
      case 'User':
        return (
          <View style={{ marginBottom: Platform.OS == 'ios' ? bottom : 0 }}>
            <User />
          </View>
        )

      case 'Group':
        return (
          <View style={{ marginBottom: Platform.OS == 'ios' ? bottom : 0 }}>

          </View>
        )
    }
  }

  return (
    <ModalWrapper
      isVisible={isVisible}
      onBackdropPress={() => setVisible?.(false)}
      backdropOpacity={0.7}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      hideModalContentWhileAnimating
      useNativeDriver
      presentationStyle={'overFullScreen'}
    >
      <ModalContent behavior={'padding'}>
        <TopIndicatorWrapper
          activeOpacity={1}
          onPress={() => setVisible?.(false)}>
          <Indicator />
        </TopIndicatorWrapper>

        {renderTypeModal()}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Add;
