import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[16px] font-normal text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-90 px-8 py-4 text-white transition-all hover:bg-black"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
