import growth_monitor from "../assets/img/growth_monitor.png";

import { Header } from "../assets/styles/styledComponents/NavbarStyle";

export default function Navbar() {
  return (
    <Header>
      <img src={growth_monitor} alt="LOGO" />
    </Header>
  );
}
