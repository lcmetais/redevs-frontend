import { ReactNode } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import * as S from './styles'

type Link = {
  label: string
  href: string
  linksIcon?: string
}

export type MenuItemProps = {
  label: string
  icon?: ReactNode
  links?: Link[]
  href?: string
}

const MenuItem = ({ icon, label, links, href }: MenuItemProps) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  const handleSubMenu = (href: string) => {
    navigate(href)
  }

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        {label != '' && (
          <S.Title
            onClick={() => {
              href && handleSubMenu(href)
            }}
            activeCursor={!!href}
            active={href === pathname}
          >
            <S.IconWrapper>{icon}</S.IconWrapper> <span>{label}</span>
          </S.Title>
        )}
      </S.WrapperTitle>
      <S.WrapperLinks
        activePadding={links && links[0].linksIcon ? true : false}
      >
        {links?.map(({ label, href, linksIcon }) => (
          <S.Links
            onClick={() => {
              handleSubMenu(href)
            }}
            key={href}
            active={
              pathname === href ||
              pathname.includes(href) ||
              href.includes(searchParams.get('saletype')!)
            }
          >
            {linksIcon && <img src={linksIcon} />} {label}
          </S.Links>
        ))}
      </S.WrapperLinks>
    </S.Wrapper>
  )
}

export default MenuItem
