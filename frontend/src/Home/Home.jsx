import React, { useState } from 'react'
import Header from '../Common/Header/Header'
import FirstSection from './firstSection'
import SecondSection from './SecondSection'
import ThirdAdv from './ThirdAdv'
import EighthSection from './EighthSection'
import NinthSection from './NinthSection'
import TenthSection from './TenthSection'
import EleventhSection from './EleventhSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'
import SeventhSection from './SeventhSection'
import Footer from '../Common/Footer/Footer'

const Home = () => {
  const [showFooterSearch, setShowFooterSearch] = useState(false);
  const onSearchButtonClick = () => {
    setShowFooterSearch(!showFooterSearch);
  };
  return (
    <>
      <Header onSearchButtonClick={onSearchButtonClick} />
      {!showFooterSearch && (
        <>
          <FirstSection />
          <SecondSection />
          <ThirdAdv />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <EighthSection />
          <NinthSection />
          <TenthSection />
          <EleventhSection />
        </>
      )}
      <Footer />
    </>
  )
}

export default Home