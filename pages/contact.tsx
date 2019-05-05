import { Layout } from "~components/Layout"
import { Text, Link } from "rebass"
import * as gtag from "~lib/gtag"

export default () => (
  <Layout title="Contact">
    <Text mb="10px">
      For enquiries contact at ciocan@gmail.com or DM on {` `}
      <Link
        href="//instagram.com/ciocan"
        target="_new"
        color="black"
        onClick={() =>
          gtag.event({
            action: "click",
            category: "Instagram",
            label: "contact"
          })
        }
      >
        Instagram
      </Link>
    </Text>
  </Layout>
)
