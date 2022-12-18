import Header from '../components/Header';
import Hero from '../components/Hero';
import Links from '../components/Links';
import Steps from '../components/Steps';
import Extra from '../components/Extra';
import Update from '../components/Update';
import Subscribe from '../components/Subscribe';

export default function Home() {
  return (
    <div className='max-w-[1920px] mx-auto'>
      <Header />
      <Hero />
      <Links />
      <Steps />
      <Extra />
      <Update />
      <Subscribe />
    </div>
  )
}