import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElements = links.map(((link) => {
    const linkId = `#` + link
    return <a key = { link } href= { linkId }>{ link }</a>
  }))
  return <nav>{navElements}</nav>;
}

export default NavBar;
