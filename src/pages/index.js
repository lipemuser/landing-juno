import React from "react"

import Wrapper from "../App/Wrapper"
import SEO from "../App/seo"
import MainBanner from "../App/Banners/main"
import HowItWorks from "../App/HowItWorks/index"
import IssueBilling from '../App/IssueBilling/index'
import Mobile from '../App/Banners/mobile'

const IndexPage = () => {
  const [ backPosition, setBackPosition ] = React.useState('50%');
  const [ backMobilePosition, setBackMobilePosition ] = React.useState('50%');
  const [ backWidth, setBackWidth ] = React.useState('50%');

  const verifyMatchMedia = function() {

    if (typeof window !== 'undefined') {
      let mq = window.matchMedia( "(max-width: 860px)" );
      if (mq.matches){
          setBackPosition('70%');
          setBackMobilePosition('37%');
          setBackWidth('100%');
      }
      else{
          setBackPosition('50%');
          setBackMobilePosition('5%');
          setBackWidth('50%');
      }
    }

  }

  React.useMemo(() => verifyMatchMedia(), []);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => verifyMatchMedia());
    }
  }, []);

  return (
    <Wrapper>
      <SEO title="Landing Page | Juno" lang="pt" />
      <>
        <MainBanner height="535px" backPosition={backPosition} />
        <HowItWorks />
        <IssueBilling />
        <Mobile backMobilePosition={backMobilePosition} backWidth={backWidth} height="450px" />
      </>
    </Wrapper>
  )
}

export default IndexPage
