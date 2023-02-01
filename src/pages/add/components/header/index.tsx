import React, { forwardRef, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import Search from '../../../../components/search';
import { Wrapper } from './styles';
import { IProps } from './types';


const Header = forwardRef<View, IProps>((props, ref) => {
  const { t, i18n } = useTranslation()
  const { usernameSearch, setUsernameSearch } = props

  return (
    <Wrapper>
      <Search
        searchValue={usernameSearch}
        setSearchValue={setUsernameSearch}
        placeholder={t('Input the username')} />
    </Wrapper>
  )
})

export default memo(Header);
