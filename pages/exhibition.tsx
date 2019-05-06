import { Layout } from "~components/Layout"
import { Text, Link } from "rebass"
import ImageGallery from "react-image-gallery"

const IMAGE_ALT = "https://screentime.gallery"
const makeImg = (i: number) => ({
  original: `/static/exhibition/reception${i}.jpg`,
  originalAlt: IMAGE_ALT,
  thumbnail: `/static/exhibition/reception${i}_tn.jpg`,
  thumbnailAlt: IMAGE_ALT
})

const images = Array.from(Array(6).keys()).map(i => makeImg(i + 1))

export default () => (
  <Layout title="Exhibition">
    <Text mb="10px">
      The enlightening photography exhibition takes features{" "}
      <Link href="//instagram.com/ciocan" target="_new" color="black">
        Radu Ciocan’s
      </Link>
      {` `}favourite prints. With 24 large pictures in a specially-curated
      gallery of photos, each image will be accompanied by a quote from various
      research studies about screen use.
    </Text>
    <Text mb="10px">
      The first exhibition was at {` `}
      <Link
        href="http://www.camden-image-gallery.co.uk/"
        target="_new"
        color="black"
      >
        Camden Image Gallery
      </Link>
      {` `} in London between 30th April and 5th May 2019
    </Text>

    <ImageGallery
      lazyLoad
      showPlayButton={false}
      showFullscreenButton={false}
      items={images}
    />
  </Layout>
)
