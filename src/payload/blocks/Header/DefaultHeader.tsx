'use client'

import { Media, SiteSetting } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { sidebarClick, sidebarSignUpClick, stickyNav } from '@/utils/nav'

import Nav from './Nav'

const DefaultHeader = ({
  singleMenu,
  dark,
  headerData,
}: {
  singleMenu: boolean
  dark: boolean
  headerData: SiteSetting['header']
}) => {
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
                  <Image
                    src={(dark && (headerData?.logo_image as Media)?.url) || ''}
                    alt={(headerData?.logo_image as Media)?.alt || 'Logo'}
                    title='Logo'
                    height={40}
                    width={150}
                  />
                </Link>
              </div>
            </div>
            <div className='nav-outer ms-lg-auto clearfix'>
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} headerData={headerData} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <NavSearch /> */}
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
