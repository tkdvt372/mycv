import React from 'react'
import {BsFacebook,BsGithub,BsTwitter} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/dvt372/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/tkdvt372" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/dvt372" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials