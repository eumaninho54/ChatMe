import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/header';
import { Wrapper } from './styles';
import './services/websockets';


const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <SafeAreaView>
      <Wrapper>
        <Header 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}/>
      </Wrapper>
    </SafeAreaView>
  )
}

export default Home;
