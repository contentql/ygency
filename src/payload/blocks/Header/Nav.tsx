import { Media, SiteSetting } from '@payload-types'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'

import Menu from './Menu'

const Nav = ({
  singleMenu,
  headerData,
}: {
  singleMenu: boolean
  headerData: SiteSetting['header']
}) => {
  return (
    <nav className='main-menu navbar-expand-lg'>
      <Accordion>
        <div className='navbar-header py-10'>
          <div className='mobile-logo'>
            <Link legacyBehavior href='/'>
              <a>
                <img
                  src={(headerData?.logo_image as Media)?.url || ''}
                  alt={(headerData?.logo_image as Media)?.alt || 'Logo'}
                  title='Logo'
                  style={{ width: '100px', height: 'auto' }}
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={'button'}
            className='navbar-toggle'
            eventKey='navbar-collapse'>
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey='navbar-collapse'
          className='navbar-collapse clearfix'>
          <Menu singleMenu={singleMenu} headerLinks={headerData?.menuItems} />
        </Accordion.Collapse>
      </Accordion>
    </nav>
  )
}
export default Nav
