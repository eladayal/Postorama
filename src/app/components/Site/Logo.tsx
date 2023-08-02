import Image from "next/image";
import Link from "next/link";

export default function Logo({ width, height }: { width: number; height: number }) {
  return (
    <>
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/dbt4olgrj/image/upload/v1690901712/Postorama_cjzj48.png"
          width={width}
          height={height}
          alt="Postorama-logo"
        ></Image>
      </Link>
    </>
  );
}
