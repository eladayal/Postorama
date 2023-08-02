import Logo from "../Site/Logo";

export default function Footer() {
  return (
    <>
      <footer className="10vh border-t-2">
        <div className="container mx-auto">
          <div className="flex justify-center md:justify-start  items-center">
            <Logo width={100} height={100} />
          </div>
          <div className="flex justify-center items-center my-2">
            <p>developed by Elad Ayal | Symbio</p>
          </div>
        </div>
      </footer>
    </>
  );
}
