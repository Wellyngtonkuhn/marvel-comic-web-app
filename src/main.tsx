import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";
import DefaultStyle from "./styles/DefaultStyle";
import RoutesPath from "./routes/Routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <DefaultStyle />
      <NavBar />
        <RoutesPath />
      <Footer />
    </QueryClientProvider>
  </BrowserRouter>
);
