import { Navbar5 } from "@/components/navbar5";
import Footer from "@/components/footer";
import Banner from "@/components/banner";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner />
      <Navbar5 />
      {children}
      <Footer />
    </>
  );
}
