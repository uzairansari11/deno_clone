
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <ChakraBaseProvider>
   <Provider store={store}>
    <Header />
    <Component {...pageProps} />
    <Footer />
   </Provider>
  </ChakraBaseProvider>
 );
}
