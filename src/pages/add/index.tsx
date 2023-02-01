import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header';
import { Wrapper } from './styles';


const Add: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [usernameSearch, setUsernameSearch] = useState('')

  return (
    <Wrapper>
      <Header
        usernameSearch={usernameSearch}
        setUsernameSearch={setUsernameSearch}/>
    </Wrapper>
  )
}

export default Add;
