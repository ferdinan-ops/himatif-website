import { About, Footer, Hero, Layout, Misi, Visi } from "../components";
import { hero } from "../utils/data";

export default function Home() {
   return (
      <Layout title="Himpunan Mahasiswa Teknik Informatika (HIMATIF) UNIKA">
         <Hero blogs={hero} />
         <About />
         <Visi />
         <Misi />
         <Footer />
      </Layout>
   );
}
