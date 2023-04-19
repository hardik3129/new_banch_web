import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <Link to={'/'}>Home</Link> &nbsp;
      <Link to={'/about'}>About</Link> &nbsp;
      <Link to={'/contact'}>Contact</Link> &nbsp;
    </>
  )
}

export default Header
