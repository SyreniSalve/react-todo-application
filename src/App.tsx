import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainRouter from "./navigation/MainRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Layout footer={<Footer />} header={<Header />}>
        <MainRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
