import { Layout } from "../components"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#E7C1CC",
              },
            },
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
