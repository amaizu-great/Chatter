import LogoutButtonRedux from "./LogoutButtonRedux";
import { StoreProvider } from "@/redux/StoreProvider";

const LogOutButton = () => {
  return (
    <>
      <StoreProvider>
        <LogoutButtonRedux />
      </StoreProvider>
    </>
  );
};

export default LogOutButton;
