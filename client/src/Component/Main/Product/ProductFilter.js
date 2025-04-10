import Products from "../Product/Product";

export const allProductFilter = ({ searchTerm }) => {
  if (!Products || typeof Products !== "object") {
    console.error("Products is not defined or not an object");
    return [];
  }

  const allProducts = [
    ...(Products.airPods || []),
    ...(Products.iPhones || []),
    ...(Products.iPads || []),
    ...(Products.Macs || []),
    ...(Products.iWatches || []),
    ...(Products.iAccessories || []),
  ];

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// Airpod Filter
export const airpodFilter = ({ searchTerm }) => {
  if (!Products.airPods || !Array.isArray(Products.airPods)) {
    console.error("Products.airPods is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.airPods.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// Accessories Filter
export const accessoriesFilter = ({ searchTerm }) => {
  if (!Products.iAccessories || !Array.isArray(Products.iAccessories)) {
    console.error("Products.iAccessories is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.iAccessories.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// iPad Filter
export const ipadFilter = ({ searchTerm }) => {
  if (!Products.iPads || !Array.isArray(Products.iPads)) {
    console.error("Products.iPads is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.iPads.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// iPhone Filter
export const iphoneFilter = ({ searchTerm }) => {
  if (!Products.iPhones || !Array.isArray(Products.iPhones)) {
    console.error("Products.iPhones is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.iPhones.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// Mac Filter
export const macFilter = ({ searchTerm }) => {
  if (!Products.Macs || !Array.isArray(Products.Macs)) {
    console.error("Products.Macs is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.Macs.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};

// Watch Filter
export const watchFilter = ({ searchTerm }) => {
  if (!Products.iWatches || !Array.isArray(Products.iWatches)) {
    console.error("Products.iWatches is not defined or not an array");
    return [];
  }
  const filteredProducts = Products.iWatches.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  return filteredProducts;
};
