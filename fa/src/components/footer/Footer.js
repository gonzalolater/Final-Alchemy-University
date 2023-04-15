import React from 'react'
import { ReactComponent as DiscordSVG } from '../../icons/Discord.svg'
import { ReactComponent as TwitterSVG } from '../../icons/Twitter.svg'
import { ReactComponent as InstagramVG } from '../../icons/Instagram.svg'
import { ReactComponent as OpenSeaSVG } from '../../icons/OpenSea.svg'
import './footer.css'

const Footer = () => {
  const handleOpenSea = () => {
    window.open('https://testnets.opensea.io/SrZygon')
  }
  const handleDiscord = () => {
    window.open('https://discord.gg/k6FCNy7RtC')
  }

  const handleTwitter = () => {
    window.open('https://twitter.com/Coach_Bullets')
  }

  const handleInstagram = () => {
    window.open('https://www.instagram.com/srzygon/')
  }
  return (
    <div className='footerBC componentFirst'>
      <div className='footerMain componentSecond'>
        <div className='roadmap'>
          <div className='footerIcon'>
            <OpenSeaSVG />
          </div>
          <div className='footerLink' onClick={handleOpenSea}>
          <div className='footerIconText'>Open sea (ClickHere) </div>
          </div>
          <div className='footerName'>Binaryville</div>
          <div className='footerName'>About Binaryville</div>

          <div className='footerJoin'>Join us</div>
          <div className='footerContainer'>
            <div className='footerLink' onClick={handleDiscord}>
              <DiscordSVG className='footerIcon' />
              <div className='footerLinkText'>Discord</div>
            </div>
            <div className='footerLink' onClick={handleTwitter}>
              <TwitterSVG className='footerIcon' />
              <div className='footerLinkText'>Twitter</div>
            </div>
            <div className='footerLink' onClick={handleInstagram}>
              <InstagramVG className='footerIcon' />
              <div className='footerLinkText'>Instagram</div>
            </div>
          </div>
          <div className='footerBox' />
        </div>
      </div>
    </div>
  )
}

export default Footer
