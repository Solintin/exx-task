import Header from '../components/Header';
import Hero from '../components/Hero';
import Links from '../components/Links';
import Steps from '../components/Steps';
import Extra from '../components/Extra';
import Update from '../components/Update';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div className=''>
      <Header />
      <Hero />
      <Links />
      <Steps />
      <Extra />
      <Update />
      <Subscribe />
      <Footer />
    </div>
  )
}