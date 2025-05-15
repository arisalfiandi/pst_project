import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "auto",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logos/logopst.png"
        alt="logo"
        height={70}
        width={70}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;
