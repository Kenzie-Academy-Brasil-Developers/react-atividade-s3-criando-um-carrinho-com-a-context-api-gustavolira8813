import { createContext, useState } from "react";

export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    {
      name: "Book",
      price: 20,
      img: "https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg",
    },
    {
      name: "T-shirt",
      price: 50,
      img: "https://lh3.googleusercontent.com/proxy/Y226oWfaj983v2CZBqPmf1QaDmzb7Dy09_QDHTj8C0N6sUfL5TBzIEqm0_Y7ZgKOouIhkumeLMwJECCjLFphmKL4FpjO-iscF1zAk6Xldqe6T4iK_gCJi_PkERHMFCmlwdLFnObNoS5o9N-ZXf81ZgKtwHxCVmfmEg",
    },
    {
      name: "Banana",
      price: 3,
      img: "https://img.ifunny.co/images/cd7aea27bafa8b2e3046e19de58749670857662460caf396489dc8882755e770_1.jpg",
    },
    {
      name: "Manga",
      price: 3,
      img: "https://saberhortifruti.com.br/wp-content/uploads/2020/05/manga-tipo-rosa.jpg",
    },
    {
      name: "Ovo",
      price: 3,
      img: "https://www.sodexobeneficios.com.br/data/files/51/14/9C/2C/A192B610C32D22B6B31BF9C2/ovo.png.pagespeed.ce.Q5tqL7cnU2.png",
    },
    {
      name: "Carro",
      price: 3,
      img: "https://conteudo.imguol.com.br/c/entretenimento/14/2019/09/09/bugatti-chiron-super-sport-300-1568035926554_v2_450x337.jpg",
    },
  ]);

  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  const removeFromCatalogue = (item) => {
    const newList = catalogue.filter((e) => e.name !== item.name);
    setCatalogue(newList);
  };
  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
