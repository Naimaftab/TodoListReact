'use client'
import {NextUIProvider} from "@nextui-org/react";
import App from './components/App/page';
import './styles.css';
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <NextUIProvider>
      <div className='appContainer'>
        <Header/>
            <App/>
        <Footer/>
      </div>
    </NextUIProvider>
  )
}
