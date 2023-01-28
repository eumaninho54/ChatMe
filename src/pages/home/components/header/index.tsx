import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Icon from '../../../../components/icon';
import Input from '../../../../components/input';
import { InputWrapper, SortButton, Wrapper } from './styles';
import { IProps } from './types';


const Header: React.FC<IProps> = (props) => {
  const { t, i18n } = useTranslation()
  const { searchValue, setSearchValue } = props

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder={t('Search message...')}
          value={searchValue}
          onChangeValue={setSearchValue}
          iconLeft='search'
          type='text' />
      </InputWrapper>

      <SortButton>
        <Icon
          family='Ionicons'
          color='primaryFont'
          size='big_25'
          name='md-filter'/>
      </SortButton>
    </Wrapper>
  )
}

export default Header;
