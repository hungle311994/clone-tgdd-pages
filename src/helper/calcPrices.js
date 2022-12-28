export const getNumberOfPrice = (price) => {
  const a = price.replace(" ₫", "").split(".").join("");
  return Number(a);
};

export const VND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
