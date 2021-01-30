import Head from 'next/head'
import Navbar from './navs/Navbar'
import Home from  './views/Home'
export default function Layout() {
  return (
    <div>
      <head>
         <title>ASB FE Test</title>
        <meta name="theme-color" content="#C7FFEB" />
        <meta name="msapplication-TileColor" content="#da532c"/>
         <link
            rel="preload"
            href="/fonts/ProductSans-Black.ttf"
            as="font"
            crossOrigin=""
        />
        <link
            rel="preload"
            href="/fonts/ProductSans-Thin.ttf"
            as="font"
            crossOrigin=""
          />
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
      </head>
      <body>
          <Navbar />
          <Home />
      </body>
      </div>
  )
}