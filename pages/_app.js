import '@/styles/globals.css'
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    clarity.init("ig1hhuwm9l")
  }, [])

  return <Component {...pageProps} />
}