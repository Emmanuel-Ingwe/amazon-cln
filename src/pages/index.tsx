import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from "@/components/Banner"
import Products from "@/components/Products"
import { ProductProps } from '../../type'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  productData: ProductProps
}

export default function Home({ productData }: Props) {
  console.log(productData)
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const productData = await res.json();

    return { props: { productData } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { productData: [] } }; // Handle the error gracefully
  }
};
