import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import Text from '../text';
import { TitleWrapper, Image, Wrapper, DescriptionWrapper } from './styles';
import { IProps } from './types';


const Empty = forwardRef<View, IProps>((props, ref) => {
  const { title, description, srcImage } = props

  return (
    <Wrapper>
      <TitleWrapper>
        <Text
          align='center'
          text={title}
          color={'primaryFont'}
          size={'giant_22'}
          weight={'bold'} />
      </TitleWrapper>

      <DescriptionWrapper>
        <Text
          align='center'
          text={description}
          color={'secundaryFont'}
          size={'big_18'}
          weight={'semibold'} />
      </DescriptionWrapper>


      {srcImage
        ? 
        <Image 
          resizeMode='contain'
          source={srcImage} />

        : null
      }
    </Wrapper>
  )
})

export default memo(Empty);
