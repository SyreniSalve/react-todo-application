import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainRouter from "./navigation/MainRouter";
import { QueryClient, QueryClientProvider } from "react-query";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <QueryClientProvider client={new QueryClient()}>
        <Layout footer={<Footer />} header={<Header />}>
          <MainRouter />
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
