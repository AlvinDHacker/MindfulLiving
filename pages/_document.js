import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

export default function Document() {

  useEffect(()=>{
    clarity.init("ig1hhuwm9l")
  }, [])

  return (
    <Html lang="en">
      <Head>
        <title>Tech Tietans</title>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
