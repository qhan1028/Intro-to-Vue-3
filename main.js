const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      selectedIndex: 0,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedIndex = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    sale() {
      return this.onSale ? this.brand + " " + this.product + " is on sale" : "";
    },
    image() {
      return this.variants[this.selectedIndex].image;
    },
    inStock() {
      return this.variants[this.selectedIndex].quantity > 0;
    },
  },
});
