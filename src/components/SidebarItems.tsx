import { SidebarItem, sidebarItems } from "@/utils/navbarLink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItems = ({
  setIsOpen,
}: {
  setIsOpen?: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarItems.map(({ name, id, route }: SidebarItem) => (
        <Link
          key={id}
          onClick={() => setIsOpen?.(false)}
          href={route}
          className={`flex flex-col justify-center items-center text-xs h-14 shadow-sm hover:bg-white transition-colors ${
            pathname === route ? "text-redprimary shadow-md" : "text-grayish/70"
          }`}
        >
          <Image
            src={`/icons/${name.toLowerCase()}.svg`}
            alt={name}
            width={20}
            height={20}
            className={`m-1 ${
              pathname === route
                ? "text-redprimary filter-redprimary"
                : "text-grayish filter-grayish/70"
            }`}
          />
          {name}
        </Link>
      ))}
    </>
  );
};

export default SidebarItems;
