import Logo from "../Site/Logo";

export default function Header() {
  const menu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Posts",
      href: "/posts",
    },
  ];
  return (
    <>
      <header className="10vh shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Logo width={150} height={150} />
            <nav>
              <ul className="flex gap-5 mr-6 ">
                {menu.map((item, index) => (
                  <li key={index} className="">
                    <a
                      className=" items-center border-b-2 border-transparent p-2 text-xl font-semibold  text-gray-500 hover:border-[#4796cd] hover:text-gray-700 transition-all duration-300 "
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
