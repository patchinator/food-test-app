import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../store/auth-context";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AuthContextProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AuthContextProvider>
  );
}

export default MyApp;
