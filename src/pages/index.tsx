import Head from 'next/head'
import Navbar from '../components/navbar'
//import NestedLayout from '../components/nested-layout'

export default function Home() {
  return (
    <>
    <Head>
        <title>Print Desk - printdesk.xyz</title>
        <meta name="description" content="This is the description of the home page." />
        {/* Add more meta tags if needed */}
      </Head>
    <Navbar />
      <p>hello world</p>
    </>)
}
