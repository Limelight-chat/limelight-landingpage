import { Navbar5 } from "@/components/navbar5";
import Footer from "@/components/footer";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar5 />
      {children}
      <Footer />
    </>
  );
}
