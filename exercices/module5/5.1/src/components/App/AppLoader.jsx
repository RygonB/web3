import { ProviderWrapper as ButtonProvierWrapper } from "../../contexts/countersContext";
import App from "./App";

const Apploader = () => {
  return (
    <ButtonProvierWrapper>
      <App />
    </ButtonProvierWrapper>
  );
};

export default Apploader;
