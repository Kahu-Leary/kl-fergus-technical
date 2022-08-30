import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { wrapper } from '../redux/store'
import dynamic from 'next/dynamic'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// export default dynamic(() => Promise.resolve(MyApp), {ssr: true})
// export default wrapper.withRedux(MyApp)
export default MyApp
