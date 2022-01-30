import {memo} from "react";
import "./styles.scss";

const Main = ({children}) => <main className="main">{children}</main>;

export default memo(Main);