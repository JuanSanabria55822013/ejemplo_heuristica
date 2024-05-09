
const data = [
    {
      id: 1,
      name: "Gato Abisinio",
      img: "https://www.purina.es/sites/default/files/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Abyssinian-Cat-Breed_0-compressed-0.jpg?itok=I_p4sCcj",
      cat: "Gato",
    },
    {
      id: 2,
      name: "spitz japones",
      img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Japanese-Spitz.jpg?itok=uprTdJgM",
      cat: "perro",
    },
    {
      id: 3,
      name: "Gato Balinés",
      img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Balinese-Cat-Breed.jpg?itok=3HC3qRIn",
      cat: "Gato",
    },
    {
      id: 4,
      name: "Golden Retriever",
      img: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0059_golden_retriever.jpg?itok=kiTzsFAi",
      cat: "perro",
    },
    {
      id: 5,
      name: "Pomerania",
      img: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0095_pomeranian.jpg?itok=yNBkCtKm",
      cat: "perro",
    },
    {
      id: 6,
      name: "Schnauzer miniatura",
      img: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/BREED%20Hero_0085_miniature_schnauzer.jpg?itok=pXqBJFXv",
      cat: "perro",
    },
    {
      id: 7,
      name: "Gato Birmano",
      img: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Birman-Cat-Breed.jpg?itok=WUyPuUTr",
      cat: "Gato",
    },
    {
      id: 8,
      name: "Británico de pelo corto",
      img: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/2021-02/CAT%20HERO_0004_British_shorthair.jpg?itok=JwO9XrA5",
      cat: "Gato",
    },
    {
      id: 9,
      name: "Gato Bosque de Siberia",
      img: "https://www.purina.es/sites/default/files/breed_library/cat_siberian_forest.jpg",
      cat: "Gato",
    },
    {
      id: 10,
      name: "Bobtail japonés de pelo corto",
      img: "https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/cat_japanese_bobtail_short_hair.jpg?itok=UVNFBMiC",
      cat: "Gato",
    },
  ];
  

  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriasContainer = document.querySelector(".cats");

  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
          <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">Price: $${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  displayProducts(data);
  

  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  

  const setCategorias = () => {
    const todosCats = data.map((item) => item.cat);
    const categorias = [
      "todos",
      ...todosCats.filter((item, i) => {
        return todosCats.indexOf(item) === i;
      }),
    ];
  
    categoriasContainer.innerHTML = categorias
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriasContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "todos"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };

  setCategorias();
