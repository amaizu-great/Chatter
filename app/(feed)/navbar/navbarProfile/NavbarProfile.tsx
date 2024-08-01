import { StoreProvider } from "@/redux/StoreProvider";
import NavbarProfileRedux from "./NavbarProfileRedux";

interface NavBarProfileProps {
  props: {};
}


const NavbarProfile: React.FC<NavBarProfileProps> = (props) => {

  return (
    <StoreProvider>
      <NavbarProfileRedux props={props} />
    </StoreProvider>
  );
};

export default NavbarProfile;
