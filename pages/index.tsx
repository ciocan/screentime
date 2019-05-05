import styled from "styled-components"
import { Layout } from "~components/Layout"
import { Heading, Text } from "rebass"

export default () => (
  <Layout>
    <Heading fontSize={[2, 3]} fontWeight="normal">
      <Text as="span" fontWeight="bold">
        #SCREENTIME
      </Text>{" "}
      is an impactful social project which raises awareness of how many hours we
      spend with our eyeballs glued to the small screen.
    </Heading>

    <Gallery>
      <Image gridArea="main" alt="scree time" src="static/gallery/scr1.jpg" />
      <Image gridArea="e1" alt="scree time" src="static/gallery/scr2.jpg" />
      <Image gridArea="e2" alt="scree time" src="static/gallery/scr3.jpg" />
      <Image gridArea="e3" alt="scree time" src="static/gallery/scr4.jpg" />
    </Gallery>
  </Layout>
)

const Gallery = styled.section`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1.5fr 0.5fr;
  grid-template-areas: "main main main" "e1 e2 e3";
  column-gap: 20px;
  row-gap: 20px;
  position: relative;
  margin-bottom: 20px;
`

const Image = styled.img<any>`
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};
`
