import React, { useState } from 'react'

import { ReactComponent as PlusSVG } from '../../icons/Plus.svg'
import { ReactComponent as MinusSVG } from '../../icons/Minus.svg'

import './faq.css'

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  return (
    <div className='componentFirst faqScroll'>
      <div className='componentSecond'>
        <div className='faq'>
          <div className='roadmapTitle textHighlight'>FAQ</div>
          <div className='roadmapSubTitle'>a collection of 5,000 unique NFTs</div>
          <div className='faqContainer'>
            <div className='faqItem' onClick={() => setOne(!one)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>What is Binaryville?</div>
              </div>
              <div className='faqItemRight'>{one ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {one && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                   project to mine NFT with our wallet and a smart contract
                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setTwo(!two)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>Where do I buy the NFTs?</div>
              </div>
              <div className='faqItemRight'>{two ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {two && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                You can coin NFT Here if you want more you can call me.
                </div>
              </div>
            )}
            <div className='faqItem' onClick={() => setThree(!three)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>When will the game be ready?</div>
              </div>
              <div className='faqItemRight'>{three ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {three && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                This is a game model for the future, if many people are interested, development continues.
                </div>
              </div>
            )}

            <div className='faqItem' onClick={() => setFour(!four)}>
              <div className='faqItemLeft'>
                <div className='faqItemTitle'>What do I get?</div>
              </div>
              <div className='faqItemRight'>{four ? <MinusSVG /> : <PlusSVG />}</div>
            </div>
            {four && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerText'>
                  You can get an NFT to show your friends how updated you are and play in the future if the project continues.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
