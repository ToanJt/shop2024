const products = [
  // {
  //   id: 1,
  //   name: "Áo Sweater tay dài",
  //   description:
  //     "Quần legging nữ với chất liệu co giãn tốt, dễ phối với các loại áo, phù hợp cho các hoạt động thể thao và thường ngày.",
  //   price: "120.000",
  //   ratings: 68,
  //   purchases: 400,
  //   imageLink:
  //     "https://img.freepik.com/free-photo/green-front-sweater_125540-736.jpg",
  // },
  // {
  //   id: 2,
  //   name: "Áo sơ mi nam trắng",
  //   price: "299.000",
  //   ratings: 4.5,
  //   purchases: 120,
  //   imageLink:
  //     "https://static.vecteezy.com/system/resources/previews/036/114/258/non_2x/ai-generated-isolated-sweater-fashion-piece-of-clothing-on-a-transparent-background-file-format-png.png",
  //   description:
  //     "Áo sơ mi nam màu trắng, chất liệu cotton thoáng khí, thiết kế cổ bẻ truyền thống phù hợp cho nhiều dịp.",
  // },
  // {
  //   id: 3,
  //   name: "Quần jeans nữ",
  //   price: "450.000",
  //   ratings: 4.7,
  //   purchases: 150,
  //   imageLink:
  //     "https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user",
  //   description:
  //     "Quần jeans nữ với kiểu dáng ôm vừa vặn, chất liệu denim bền bỉ, dễ phối đồ và phù hợp cho nhiều dịp.",
  // },
  // {
  //   id: 4,
  //   name: "Váy dạ hội đỏ",
  //   price: 1"200.000",
  //   ratings: 4.8,
  //   purchases: 85,
  //   imageLink:
  //     "https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721952000&semt=ais_user",
  //   description:
  //     "Váy dạ hội màu đỏ quyến rũ, thiết kế lộng lẫy với chi tiết đính đá, hoàn hảo cho các sự kiện đặc biệt.",
  // },
  // {
  //   id: 5,
  //   name: "Áo khoác da nam",
  //   price: "800.000",
  //   ratings: 4.6,
  //   purchases: 95,
  //   imageLink:
  //     "https://png.pngitem.com/pimgs/s/91-910332_black-is-legendary-eagle-classic-washed-jean-jacket.png",
  //   description:
  //     "Áo khoác da nam phong cách cổ điển, chất liệu da thật cao cấp, giữ ấm và tạo vẻ ngoài mạnh mẽ.",
  // },
  // {
  //   id: 6,
  //   name: "Giày sneaker trắng",
  //   price: "650.000",
  //   ratings: 4.5,
  //   purchases: 200,
  //   imageLink:
  //     "https://www.pngitem.com/pimgs/m/136-1369939_transparent-blue-aesthetic-png-blue-aesthetic-clothes-transparent.png",
  //   description:
  //     "Giày sneaker trắng đơn giản và thanh lịch, thiết kế năng động với đế cao su bền bỉ, dễ phối với nhiều loại trang phục.",
  // },
  // {
  //   id: 7,
  //   name: "Đầm maxi họa tiết",
  //   price: "850.000",
  //   ratings: 4.6,
  //   purchases: 65,
  //   imageLink:
  //     "https://www.pngitem.com/pimgs/m/7-70730_blue-jeans-png-transparent-png.png",
  //   description:
  //     "Đầm maxi với họa tiết hoa nhí, chất liệu mềm mại và thoải mái, lý tưởng cho mùa hè và các bữa tiệc ngoài trời.",
  // },
  // {
  //   id: 8,
  //   name: "Váy ngắn công sở",
  //   price: "550.000",
  //   ratings: 4.4,
  //   purchases: 130,
  //   imageLink:
  //     "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=384&q=75",
  //   description:
  //     "Váy ngắn công sở thiết kế trang nhã, chất liệu vải co giãn tốt, mang lại sự thoải mái và phong cách chuyên nghiệp.",
  // },
  {
    id: 9,
    name: "Áo hoodie nam",
    price: "400.000",
    ratings: 4.6,
    purchases: 160,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75",
    description:
      "Áo hoodie nam với chất liệu nỉ ấm áp, thiết kế đơn giản và thoải mái, phù hợp cho các ngày lạnh.",
  },
  {
    id: 10,
    name: "Áo sơ mi họa tiết",
    price: "350.000",
    ratings: 4.5,
    purchases: 110,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F24.OliveCasualSweater.png&w=384&q=75",
    description:
      "Áo sơ mi với họa tiết hiện đại, chất liệu vải mát, thích hợp cho cả công sở và các buổi gặp gỡ bạn bè.",
  },
  {
    id: 11,
    name: "Giày cao gót đen",
    price: "700.000",
    ratings: 4.7,
    purchases: 90,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FShoes%2F1.Nike%20Red.png&w=384&q=75",
    description:
      "Giày cao gót màu đen cổ điển, thiết kế thanh lịch, phù hợp cho các buổi tiệc và sự kiện quan trọng.",
  },
  {
    id: 12,
    name: "Váy ngắn công sở",
    price: "550.000",
    ratings: 4.4,
    purchases: 130,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=384&q=75",
    description:
      "Váy ngắn công sở thiết kế trang nhã, chất liệu vải co giãn tốt, mang lại sự thoải mái và phong cách chuyên nghiệp.",
  },
  {
    id: 13,
    name: "Áo hoodie nam",
    price: "400.000",
    ratings: 4.6,
    purchases: 160,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75",
    description:
      "Áo hoodie nam với chất liệu nỉ ấm áp, thiết kế đơn giản và thoải mái, phù hợp cho các ngày lạnh.",
  },
  {
    id: 14,
    name: "Quần legging nữ",
    price: "350.000",
    ratings: 4.3,
    purchases: 140,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F4.DenimBlueJeans.png&w=384&q=75",
    description:
      "Quần legging nữ với chất liệu co giãn tốt, dễ phối với các loại áo, phù hợp cho các hoạt động thể thao và thường ngày.",
  },
  {
    id: 15,
    name: "Áo len cổ lọ",
    price: "500.000",
    ratings: 4.5,
    purchases: 110,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75",
    description:
      "Áo len cổ lọ ấm áp, chất liệu len mềm mại, thiết kế tối giản và tinh tế, lý tưởng cho mùa đông.",
  },
  {
    id: 16,
    name: "Đầm chữ A",
    price: "700.000",
    ratings: 4.7,
    purchases: 80,
    imageLink:
      "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F20.GrayOvercoatWomen.png&w=384&q=75",
    description:
      "Đầm chữ A với thiết kế tôn dáng, chất liệu vải mềm mượt, thích hợp cho các bữa tiệc và sự kiện đặc biệt.",
  },
];

export default products;
