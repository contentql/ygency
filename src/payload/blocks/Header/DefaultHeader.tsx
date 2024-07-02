'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import { sidebarClick, sidebarSignUpClick, stickyNav } from '@/utils/nav'

import Nav from './Nav'
import NavSearch from './NavSearch'

const DefaultHeader = ({ singleMenu, dark }: any) => {
  useEffect(() => {
    stickyNav()
    // animation()
    sidebarClick()
    sidebarSignUpClick()
  }, [])

  return (
    <header className='main-header menu-absolute'>
      {/*Header-Upper*/}
      <div className='header-upper'>
        <div className='container-1620 clearfix container'>
          <div className='header-inner rpy-10 rel d-flex align-items-center'>
            <div className='logo-outer'>
              <div className='logo'>
                <Link legacyBehavior href='/'>
                  <a>
                    <img
                      src={
                        dark
                          ? 'assets/images/logos/logo-white.png'
                          : 'assets/images/logos/logo.png'
                      }
                      alt='Logo'
                      title='Logo'
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className='nav-outer ms-lg-auto clearfix'>
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className='menu-btns'>
              <div className='menu-sidebar'>
                <button>LogIn</button>
              </div>
            </div>
            <div className='menu-btns'>
              <div className='menu-sidebar-signup'>
                <button>SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  )
}
export default DefaultHeader
