import { Layout } from "~components/Layout"
import { Text, Link } from "rebass"
import styled from "styled-components"

export default () => (
  <Layout title="Book">
    <Text mb="10px">
      Buy the <strong>#SCREENTIME</strong> book from {` `}
      <Link
        href="https://www.blurb.co.uk/b/9452747-screen-time"
        target="_new"
        color="black"
      >
        Blurb
      </Link>
    </Text>
    <Book
      id="data-blurb-bookshare-9452747"
      data-bindattr-146="146"
      height="600"
      data-bindattr-147="147"
      width="100%"
      data-bindattr-148="148"
      src="https://www.blurb.co.uk/bookshare/app/index.html?bookId=9452747"
      data-bindattr-149="149"
      frameborder="0"
      allowfullscreen=""
      onload="this.focus()"
      scrolling="no"
    />
  </Layout>
)

const Book = styled.iframe<any>`
  width: 100%;
  border: 0;
`
