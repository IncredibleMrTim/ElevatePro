import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SanityLive } from "@/sanity/live";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <SanityLive />
    </>
  );
}
