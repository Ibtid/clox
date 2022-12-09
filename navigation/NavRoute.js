import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContextProvider";
import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";

const NavRoute = () => {
  const { user, isloading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default NavRoute;
