import React, { forwardRef, useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useCombinedRefs } from '../../hooks/useCombineRefs';
import { ITheme } from '../../styles/colors/types';
import Icon from '../icon';
import Input from '../input';
import { InputField, InputWrapper } from './styles';
import { IProps } from './types';


const Search = forwardRef<TextInput, IProps>((props, ref) => {
  const { t, i18n } = useTranslation()
  const { searchValue, setSearchValue } = props
  const refInput = useRef<TextInput>()
  const combinedRef = useCombinedRefs<TextInput>(ref, refInput)
  const theme = useContext<ITheme>(ThemeContext)
  const [borderFocused, setBorderFocused] = useState(theme.primaryBackground)


  return (
    <InputWrapper borderColor={borderFocused}>
      <Icon
        name='search'
        size='normal_20'
        color='primaryFont'
        family='Ionicons' />

      <InputField
        ref={combinedRef}
        key={props.key}
        value={searchValue}
        onChangeText={setSearchValue}
        onFocus={() => setBorderFocused(theme.focused)}
        onBlur={() => setBorderFocused(theme.primaryBackground)}
        placeholder={props.placeholder}
        placeholderTextColor={theme.secundaryFont}
      />
    </InputWrapper>
  )
})

export default Search;
