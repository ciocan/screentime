import styled from "styled-components"
import Head from "~components/Head"
import { NavBar } from "~components/NavBar"
import { navigationPages } from "~lib/constants"
import { Instagram } from "styled-icons/fa-brands/Instagram"
import * as gtag from "~lib/gtag"
import { media } from "~lib/media"
import { Link } from "rebass"

interface Props {
  children: any
  title?: string
}

export const Layout = ({ children, title = "" }: Props) => (
  <Container>
    <Head
      title={`${title} #SCREENTIME Photography`}
      description="#SCREENTIME is an impactful social project which raises awareness of how many hours we spend with our eyeballs glued to the small screen."
      keywords="#screentime, screen time, screen addiction, screen time use, digital minimalism"
    />
    <NavBar items={navigationPages}>
      <Link
        href="//instagram.com/ciocan"
        target="_new"
        ml="auto"
        onClick={() =>
          gtag.event({ action: "click", category: "Instagram", label: "icon" })
        }
      >
        <InstagramIcon />
      </Link>
    </NavBar>
    {children}
  </Container>
)

const Container = styled.main`
  max-width: 70ch;
  min-height: calc(100vh - 4ch);
  padding: 2ch;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  line-height: 1.5em;
  ${media.md`
    width: auto;`}
  ${media.sm`
    padding: 24px 14px;`}
`

const InstagramIcon = styled(Instagram)`
  color: black;
  width: 20px;
  height: 20px;
`
