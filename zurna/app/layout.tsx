import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: "Porno - Seksapel Porno izle - Sikiş izle - Sex Sikiş - En iyi Porno Sitesi - X PORNO",
  description: "Porno sitemiz Türkiyenin en iyisidir. En kaliteli porno ve sikiş videolarını izlemek için hemen tıklayın. Keyifli bir şekilde mobil porno izleyin. Mobilden sikişin tadını çıkarın ",
  icons:{
    icon:"/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:"Amcık Anal Anüs Meme Büyük Göt Popo Delik Deliği Fışkırtma Boşalma Boşalıyor Fışkırıyor Sikiyor Sikiş Götten Sex Sert Porno Sarışın Sarı Anne Kız Oğlan Üvey üzgün Acımıyor Acımasız Dayak Arsız Parayla Escort Eleman Tamirci Üniversiteli Liseli Öğretmen Hoca Azgın Çıldırmış Zorla  "
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
 <body >
      <div className=' w-full flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex flex-col  flex-grow relative' >{children}</main>
        <Footer />
      </div>
      </body>
    </html>
  );
}
