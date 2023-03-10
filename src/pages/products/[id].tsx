import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";
import { GetStaticPaths, GetStaticProps } from "next";
import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
import { getProductApi, getProductsApi } from "@/redux/product/product.api";
import { Product } from "@/utils/types";

export type ProductDetails = {
 product: Product;
};

const Prodcut = ({ product }: ProductDetails) => {
 return (
  <>
   <NextSEO
    title="homepage"
    description="Home page for my webpage"
    ogImage="/og-image.png"
    url={new URL("http://localhost:3000/")}
   />
   <Box
    w="calc(11/12)%"
    mt="16"
    maxW="5xl"
    mx="auto"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    position="relative"
   >
    <Link href="/">
     <Text
      display="flex"
      alignItems="center"
      gap={2}
      textColor="gray.400"
      transition="text-color"
      transitionDuration="200s"
      _hover={{
       textColor: "gray.800",
      }}
     >
      <MdKeyboardBackspace />
      Back to shop
     </Text>
    </Link>
   </Box>
   <ProductDetails product={product} />
  </>
 );
};

export default Prodcut;

export const getStaticPaths: GetStaticPaths = async () => {
 const data = await getProductsApi();
 return {
  paths: data.map((product) => ({ params: { id: String(product.id) } })),
  fallback: false, // can also be true or 'blocking'
 };
};

export const getStaticProps: GetStaticProps = async (context) => {
 const id: any = context.params?.id || "";
 console.log(id);
 const data = await getProductApi(id);

 return {
  // Passed to the page component as props
  props: {
   product: data,
  },
 };
};
