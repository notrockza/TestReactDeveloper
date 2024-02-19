import { Route, Routes } from "react-router-dom";
import User from "../component/๊User/User";
import UserTable from "../component/๊User/UserTable";
import Home from "../component/Home";
import { LayoutStyle } from "../component/LayoutStyle/LayoutStyle";

export const mainRoutes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<User />} />
    <Route path="/t" element={<UserTable />} />
    <Route path="/layoutstyle" element={<LayoutStyle />} />
  </Routes>
);
