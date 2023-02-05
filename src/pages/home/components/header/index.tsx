import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Icon from '../../../../components/icon';
import Input from '../../../../components/input';
import Search from '../../../../components/search';
import Text from '../../../../components/text';
import { InputWrapper, SearchWrapper, SortButton, TitleWrapper, Wrapper } from './styles';
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
      </TitleWrapper>

      <InputWrapper>
        <SearchWrapper>
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder={t('Search message...')} />
        </SearchWrapper>

        <SortButton>
          <Icon
            family='Ionicons'
            color='primaryFont'
            size='big_25'
            name='md-filter' />
        </SortButton>
      </InputWrapper>
    </Wrapper>
  )
}

export default memo(Header);
