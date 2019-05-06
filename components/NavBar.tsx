import styled from "styled-components"
import { get } from "lodash"
import { withRouter } from "next/router"
import { useEffect } from "react"
import Link from "next/link"
import { PageItem } from "~lib/constants"
import * as gtag from "~lib/gtag"
import { media } from "~lib/media"

interface NavProps {
  items: PageItem[]
  router: any
  children?: any
}

function _NavBar({ children, items, router }: NavProps) {
  useEffect(() => {
    gtag.pageview(router.pathname)
  })

  return (
    <Nav>
      <List>
        {items.map(item => (
          <NavItem
            {...item}
            isSelected={router.pathname === item.path}
            key={item.path}
          />
        ))}
      </List>
      {children}
    </Nav>
  )
}

export const NavBar = withRouter(_NavBar)

const Nav = styled.nav`
  margin-bottom: 40px;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  ${media.sm`
    flex-direction: column;`}
`

interface ItemProps extends PageItem {
  isSelected: boolean
}

const NavItem = ({ text, path, isSelected, extra }: ItemProps) => (
  <ListItem>
    <Link href={path} prefetch>
      <A href={path} isSelected={isSelected} extra={extra}>
        {text}
      </A>
    </Link>
  </ListItem>
)

const ListItem = styled.li`
  margin-right: 5px;
  ${media.sm`
    margin-bottom: 10px;`}
`

const A = styled.a<any>`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  letter-spacing: 1px;
  border: 1px solid white;
  font-weight: ${({ extra }) => (get(extra, "isHome") ? "bold" : "normal")};
  background: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};

  &:hover {
    cursor: pointer;
    border: 1px solid black;
  }
`
