
const data = [
    {
      id: 1,
      name: "Angular",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
      cat: "lenguajes de programación",
    },
    {
      id: 2,
      name: "Java",
      img: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
      cat: "lenguajes de programación",
    },
    {
      id: 3,
      name: "Chatgpt",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
      cat: "Inteligencia Artificial",
    },
    {
      id: 4,
      name: "Python",
      img: "https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png",
      cat: "lenguajes de programación",
    },
    {
      id: 5,
      name: "Gemini",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png",
      cat: "Inteligencia Artificial",
    },
    {
      id: 6,
      name: "C",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      cat: "lenguajes de programación",
    },
    {
      id: 7,
      name: "Perplexity",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Perplexity_AI_logo.svg/2560px-Perplexity_AI_logo.svg.png",
      cat: "Inteligencia Artificial",
    },
    {
      id: 8,
      name: "Bing",
      img: "https://news.microsoft.com/wp-content/uploads/prod/sites/652/2023/02/Bing-Icon-1000x1000.png",
      cat: "Inteligencia Artificial",
    },
    {
      id: 9,
      name: "Jasper chat",
      img: "https://store-images.s-microsoft.com/image/apps.47595.9a5b943f-887a-4fe7-b1c6-d44a90c658fe.31db5641-66e6-4f64-9ab4-2a3ba66c2d73.9653c625-a855-4a91-bc32-ab984fa9bd91.png",
      cat: "Inteligencia Artificial",
    },
    {
      id: 10,
      name: "C++",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      cat: "lenguajes de programación",
    },
    {
      id: 11,
      name: "clean code",
      img: "https://images.cdn3.buscalibre.com/fit-in/360x360/10/fb/10fb170d7732b7dca25ebb81ded2572d.jpg",
      cat: "Libros",
    },
    {
      id: 12,
      name: "the mythical man month",
      img: "https://m.media-amazon.com/images/I/71fCJWIx4UL._AC_UF1000,1000_QL80_.jpg",
      cat: "Libros",
    },
    {
      id: 13,
      name: "the pragmatic programmer",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/03/1a/031af9d7e401bb2d08911c317ecbedad.jpg",
      cat: "Libros",
    },
    {
      id: 14,
      name: "code complete",
      img: "https://images.cdn1.buscalibre.com/fit-in/360x360/fb/81/fb8142804f0953b5a797d7f05b222009.jpg",
      cat: "Libros",
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

