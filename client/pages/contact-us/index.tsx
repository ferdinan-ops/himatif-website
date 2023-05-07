import { Container, Layout } from "@/components"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { getContact } from "@/lib/api"
import { IContactData } from "@/types/himatif.type"
import { GetServerSideProps } from "next"

interface ContactProps {
  contacts: IContactData
}

export default function Contact({ contacts }: ContactProps) {
  return (
    <Layout title="Hubungi Kami ~ Himpunan Mahasiswa Teknik Informatika" isHome={false}>
      <Container className="my-[96px] py-5 pb-14 font-sans text-font-black xl:py-20">
        <div className="mx-auto flex flex-col items-center gap-8 pb-10 md:w-8/12 xl:w-6/12 xl:pb-14">
          <h1 className="text-center text-lg font-bold xl:text-3xl">
            Hubungi Kami melalui Kontak Ini
          </h1>
          <article className="shadow-md px-4 py-2 rounded-md flex gap-5 items-center">
            <FaFacebookF />
            <div className="flex flex-col gap-2">
              <span>Facebook</span>
              <span>{contacts.data.attributes.kontak.facebook_link}</span>
            </div>
          </article>
        </div>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await getContact()

  return { props: { contacts: data } }
}