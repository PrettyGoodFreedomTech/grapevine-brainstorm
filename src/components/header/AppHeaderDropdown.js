import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilHome,
  cibWikipedia,
  cibApple,
  cibTwitter,
  cilInfo,
  cilArrowThickFromLeft,
  cilBuilding,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'

const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
          Pretty Good Apps
        </CDropdownHeader>
        <CDropdownItem
          href="#"
          onClick={() => {
            console.log('home')
          }}
        >
          <CIcon icon={cilHome} className="me-2" />
          Home
        </CDropdownItem>
        <CDropdownItem
          href="#/helloWorld"
          onClick={() => {
            console.log('helloWorld')
          }}
        >
          <CIcon icon={cilBuilding} className="me-2" />
          Hello World
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Apps</CDropdownHeader>
        <CDropdownItem href="#/app1">
          <CIcon icon={cibWikipedia} className="me-2" />
          App 1
        </CDropdownItem>
        <CDropdownItem href="#/app2">
          <CIcon icon={cibTwitter} className="me-2" />
          App 2
        </CDropdownItem>
        <CDropdownItem href="#/app3">
          <CIcon icon={cibApple} className="me-2" />
          App 3
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
        <CDropdownItem href="#/profile">
          <CIcon icon={cilUser} className="me-2" />
          My Profile
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Settings</CDropdownHeader>
        <CDropdownItem href="#/login">
          <CIcon icon={cilArrowThickFromLeft} className="me-2" />
          Login
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Brainstorm</CDropdownHeader>
        <CDropdownItem href="#/about">
          <CIcon icon={cilInfo} className="me-2" />
          About
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
