import { About, Hero, Layout, Misi, Tujuan, Visi } from "../components";
import { hero } from "../utils/data";

export default function Home() {
   return (
      <Layout title="Himpunan Mahasiswa Teknik Informatika" isHome>
         <Hero blogs={hero} />
         <About />
         <Visi />
         <Misi />
         <Tujuan />
      </Layout>
   );
}
