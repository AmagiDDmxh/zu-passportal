// import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState } from "react"
// @ts-expect-error no typing
import ImageFadeIn from "react-image-fade-in"
import Image from "next/image"

const Home: NextPage = () => {
  const [activeImage, setActiveImage] = useState(1)

  const changeNextImage = () => {
    setActiveImage((x) => x + 1)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zu Passportal</title>
        <meta content="Zu Passportal" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        {activeImage <= 7 && (
          <div className={styles.imageContainer}>
            <ImageFadeIn
              src={`/${activeImage}.jpg`}
              onClick={changeNextImage}
            />
          </div>
        )}
        {activeImage > 7 && (
          <div className={styles.stampedImageContainer}>
            <ImageFadeIn src="7.jpg" />
            <div className={styles.stampedImage}>
              <Image width={180} height={180} src="/stamp.jpg" />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
