// ================================================================
// BÀI VIẾT HIỂN THỊ Ở MỤC "TIN TỨC & HOẠT ĐỘNG" TRÊN WEBSITE
//
// CÁCH THÊM BÀI MỚI (không cần biết lập trình):
//   1. Copy nguyên một khối { ... }, dán lên ĐẦU danh sách.
//   2. Sửa ngày (date), nội dung (content), ảnh (images).
//   3. Ảnh: chép file ảnh vào thư mục "Hình/" rồi ghi đường dẫn.
//   4. link: mở bài viết trên Facebook, bấm vào giờ đăng của bài,
//      copy địa chỉ trên trình duyệt dán vào đây (để nút
//      "Xem bài viết trên Facebook" trỏ đúng bài).
//   Lưu file, đợi web tự cập nhật sau khi push là xong.
//
// Ghi chú: \n trong content = xuống dòng. Bài mới nhất tự lên đầu
// (website sắp xếp theo ngày, mới nhất trước).
// ================================================================
const fbPosts = [
  {
    date: "2026-07-09",
    content: "🌿 NHẬN ĐẶT MÂM CỖ CHAY TRỌN GÓI 🌿\n\nĐám giỗ, tân gia, sinh nhật hay tiệc họp mặt gia đình — Thảo Vân Chay nhận đặt mâm cỗ chay đầy đặn, trang trọng và thanh tịnh, giao tận nơi trong khu vực Buôn Ma Thuột.\n\nMỗi mâm được bếp chuẩn bị từ nguyên liệu rau củ, nấm tươi trong ngày, bày biện chỉn chu để gia đình chỉ việc ngồi vào bàn.\n\n📞 Đặt trước 1 ngày: 0917 003 898\n📍 250 Phạm Ngũ Lão, Buôn Ma Thuột\n#ThaoVanChay #MamCoChay #AnChayBMT",
    images: [
      "Hình/web/mam-tiec.jpg",
      "Hình/web/mam-chay.jpg"
    ],
    link: "https://www.facebook.com/thaovanchay.vn/"
  },
  {
    date: "2026-06-28",
    content: "🍽️ BUFFET CHAY NGÀY RẰM — ĐỦ MÓN, THOẢI MÁI DÙNG 🍽️\n\nNgày Rằm và Mùng Một hàng tháng, Thảo Vân Chay phục vụ buffet chay với hàng chục món thay đổi liên tục: món kho, món xào, gỏi, lẩu, chè và trái cây tráng miệng.\n\nMời cả nhà ghé dùng bữa, vừa ngon miệng vừa nhẹ nhàng thanh tịnh đầu tháng.\n\n⏰ 10h00 – 20h00 · 📞 0917 003 898\n#ThaoVanChay #BuffetChay #NgayRam",
    images: [
      "Hình/web/buffet.jpg",
      "Hình/web/ram.jpg"
    ],
    link: "https://www.facebook.com/thaovanchay.vn/"
  },
  {
    date: "2026-06-15",
    content: "🥟 HÁ CẢO MAY MẮN — MÓN CƯNG CỦA QUÁN 🥟\n\nLớp vỏ mỏng dai, nhân nấm và rau củ băm nhuyễn đậm vị, hấp nóng hổi chấm cùng nước tương gừng. Một phần há cảo may mắn 55.000đ là đủ ấm bụng cho buổi xế chiều.\n\nCó trên cả GrabFood và ShopeeFood — đặt là có, nóng giòn giao tận cửa!\n#ThaoVanChay #HaCao #DoAnChayBMT",
    images: [
      "Hình/web/ha-cao.jpg"
    ],
    link: "https://www.facebook.com/thaovanchay.vn/"
  },
  {
    date: "2026-06-02",
    content: "🌳 KHÔNG GIAN XANH CHO BUỔI HỌP MẶT 🌳\n\nThảo Vân Chay có khu vực riêng cho họp mặt gia đình, sinh nhật, gặp gỡ bạn bè — thoáng mát giữa vườn cây, yên tĩnh và riêng tư.\n\nNhận đặt bàn trước theo nhóm từ 6 đến 40 khách, có hỗ trợ trang trí đơn giản theo yêu cầu.\n\n📞 Đặt bàn: 0917 003 898\n#ThaoVanChay #DatBan #KhongGianXanh",
    images: [
      "Hình/web/hop-mat.jpg",
      "Hình/web/khong-gian-1.jpg",
      "Hình/web/khong-gian-2.jpg"
    ],
    link: "https://www.facebook.com/thaovanchay.vn/"
  }
];

// ================================================================
// ĐÁNH GIÁ HIỂN THỊ Ở MỤC "ĐÁNH GIÁ & CẢM NHẬN"
// Thêm review thật từ Google Maps của quán: copy nguyên văn lời khách,
// điền author (VD: "Chị Lan — khách Google") và stars: 1-5.
// KHÔNG tự bịa đánh giá — chỉ dùng lời khách/báo chí có thật.
// ================================================================
const tvcReviews = [
  {
    author: "Ănchay.vn — chuyên trang ẩm thực chay",
    source: "https://anchay.vn/dia-diem-an-chay/top-5-quan-chay-ngon-o-buon-ma-thuoc.html",
    text: "Chủ quán tận tình, nêm nếm món ăn tỉ mỉ. Thực đơn đa dạng với những món chay chất lượng, trình bày đẹp mắt, hương vị hợp khẩu vị nhiều người."
  }
];
