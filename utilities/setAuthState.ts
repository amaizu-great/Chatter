//this function is to make sure that the Redux AuthSlice is in Sync with Next Auth Authentication
// it will set it to false if the user isnt authenticated and true if the user is authenticated
//NavBarProfileRedux.tsx
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setAuthStateTrue, setAuthStateFalse } from "@/redux/features/authSlice";

const useAuthSync = () => {
  const dispatch = useDispatch();
  const { status } = useSession();
  const authState = useSelector(selectAuth);

  useEffect(() => {
    if (status === "authenticated") {
      if (!authState) {
        dispatch(setAuthStateTrue());
      }
    } else {
      if (authState) {
        dispatch(setAuthStateFalse());
      }
    }
  }, [status, authState, dispatch]); // Dependency array to ensure proper effect execution
};

export default useAuthSync;

