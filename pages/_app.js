import "../styles/tailwind.css";
import "../styles/App.css";
import "animate.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
