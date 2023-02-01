import React, { useState } from 'react';
import Header from './components/header';
import { SafeAreaView, Wrapper } from './styles';
import '../../services/websockets';
import Empty from '../../components/empty';
import DownArrow from '../../assets/arrow/arrow.png'
import { useTranslation } from 'react-i18next';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [searchValue, setSearchValue] = useState('')
  const mockadoData = []

  return (
    <SafeAreaView edges={['top']}>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      {mockadoData.length == 0
        ?
        <Empty
          title={t('No chat yet...')}
          description={t('Search for any contact or add a new one!')}
          srcImage={DownArrow} />

        :
        <Wrapper>

        </Wrapper>

      }

    </SafeAreaView>
  )
}

export default Home;
