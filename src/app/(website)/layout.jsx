import { Footer, Header } from "@/component";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
