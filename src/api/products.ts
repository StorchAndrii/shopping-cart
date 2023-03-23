import { IProduct } from "../interface/product.interface";

const products: IProduct[] = [
  {
    id: 1,
    quantity: 1,

    name: "TV",
    price: 500,
    image:
      "https://helios-i.mashable.com/imagery/articles/04cZhiuzq050Jz9pZMnv6mN/images-1.fill.size_256x256.v1619059155.jpeg",
  },
  {
    id: 2,
    quantity: 1,

    name: "Laptop",
    price: 1000,
    image: "https://content.rozetka.com.ua/goods/images/big/269608304.jpg",
  },
  {
    id: 3,
    quantity: 1,
    name: "Smartphone",
    price: 300,
    image:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg",
  },
  {
    id: 4,
    quantity: 1,

    name: "Headphones",
    price: 50,
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51-+O3-wFxL._AC_UF1000,1000_QL80_.jpg",
  },
];

export const getProduct = (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
