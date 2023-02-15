import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../../components/icon';
import BaseInput from '../../../../components/inputs/baseInput';
import Text from '../../../../components/text';
import { GroupIconWrapper, IconWrapper, InputWrapper, SearchWrapper, SortButton, TitleWrapper, Wrapper } from './styles';
import { IProps } from './types';


const Header: React.FC<IProps> = (props) => {
  const { t, i18n } = useTranslation()
  const { searchValue, setSearchValue } = props

  return (
    <Wrapper>
      <TitleWrapper>
        <Text
          text='Messages'
          color='primaryFont'
          weight='bold'
          size='extra_giant_26' />

        <GroupIconWrapper>
          <IconWrapper>
            <Icon
              family='Ionicons'
              color='secundaryFont'
              size='big_25'
              name='camera' />
          </IconWrapper>

          <IconWrapper>
            <Icon
              family='Ionicons'
              color='secundaryFont'
              size='big_25'
              name='notifications' />
          </IconWrapper>
        </GroupIconWrapper>
      </TitleWrapper>

      <InputWrapper>
        <SearchWrapper>
          <BaseInput
            color='secundaryBackground'
            outline={true}
            value={searchValue}
            onChangeValue={setSearchValue}
            placeholder={t('Search message...')} 
            hasLeftIcon={true}/>
        </SearchWrapper>

        <SortButton>
          <Icon
            family='Ionicons'
            color='secundaryFont'
            size='big_25'
            name='md-filter' />
        </SortButton>
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(Header);
