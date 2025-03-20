import axios from 'axios';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export type StorageClientTypes = {
  client_id: string;
  client_company_name: string;
  client_pic_name: string;
  client_email: string;
  client_phone: string;
  client_address: string;
  client_fee: number;
};

export type StorageProductTypes = {
  product_id: string;
  product_image: string | null | undefined;
  product_name: string;
  product_stok: number;
  product_serial: string | null;
  product_price: number;
};

export const KEY_TYPE = {
  PRODUCTS: 'PRODUCTS',
  CLIENTS: 'CLIENTS',
};

export const storageSetClient = (value: StorageClientTypes) => {
  const key = KEY_TYPE.CLIENTS;

  // Check if the storage already has CLIENTS data
  const hasClient = storage.contains(key);

  if (hasClient) {
    // Retrieve existing clients from storage
    const existingClients: StorageClientTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Check if the client already exists based on `client_id`
    const isExist = existingClients.some(
      client => client.client_id === value.client_id,
    );

    if (!isExist) {
      // Add new client and update storage
      const updatedClients = [...existingClients, value];
      storage.set(key, JSON.stringify(updatedClients));
    }
  } else {
    // If no clients exist, create a new array with the first client
    storage.set(key, JSON.stringify([value]));
  }
};

export const storageGetClientById = (
  client_id: string,
): StorageClientTypes | null => {
  const key = KEY_TYPE.CLIENTS;

  // Check if CLIENTS data exists
  if (storage.contains(key)) {
    // Retrieve and parse existing clients
    const existingClients: StorageClientTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Find the client by `client_id`
    return (
      existingClients.find(client => client.client_id === client_id) || null
    );
  }

  return null; // Return null if no clients found
};

export const storageUpdateClient = (updatedClient: StorageClientTypes) => {
  const key = KEY_TYPE.CLIENTS;

  if (storage.contains(key)) {
    // Get existing clients
    const existingClients: StorageClientTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Find index of the client to update
    const clientIndex = existingClients.findIndex(
      client => client.client_id === updatedClient.client_id,
    );

    if (clientIndex !== -1) {
      // Update client data while keeping others the same
      existingClients[clientIndex] = updatedClient;

      // Save updated data to storage
      storage.set(key, JSON.stringify(existingClients));
    }
  }
};

export const storageDeleteClient = (client_id: string) => {
  const key = KEY_TYPE.CLIENTS;

  if (storage.contains(key)) {
    // Retrieve existing clients
    const existingClients: StorageClientTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Filter out the client to delete
    const updatedClients = existingClients.filter(
      client => client.client_id !== client_id,
    );

    // Save updated list back to storage
    storage.set(key, JSON.stringify(updatedClients));
  }
};

export const storageSetProduct = (value: StorageProductTypes) => {
  const key = KEY_TYPE.PRODUCTS;

  // Check if the storage already has PRODUCTS data
  const hasProduct = storage.contains(key);

  if (hasProduct) {
    // Retrieve existing products from storage
    const existingProducts: StorageProductTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Check if the product already exists based on `product_id`
    const isExist = existingProducts.some(
      product => product.product_id === value.product_id,
    );

    if (!isExist) {
      // Add new product and update storage
      const updatedProducts = [...existingProducts, value];
      storage.set(key, JSON.stringify(updatedProducts));
    }
  } else {
    // If no products exist, create a new array with the first product
    storage.set(key, JSON.stringify([value]));
  }
};

export const storageGetProductById = (
  product_id: string,
): StorageProductTypes | null => {
  const key = KEY_TYPE.PRODUCTS;

  // Check if PRODUCTS data exists
  if (storage.contains(key)) {
    // Retrieve and parse existing products
    const existingProducts: StorageProductTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Find the product by `product_id`
    return (
      existingProducts.find(product => product.product_id === product_id) ||
      null
    );
  }

  return null; // Return null if no products found
};

export const storageUpdateProduct = (updatedProduct: StorageProductTypes) => {
  const key = KEY_TYPE.PRODUCTS;

  if (storage.contains(key)) {
    // Get existing products
    const existingProducts: StorageProductTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Find index of the product to update
    const productIndex = existingProducts.findIndex(
      product => product.product_id === updatedProduct.product_id,
    );

    if (productIndex !== -1) {
      // Update product data while keeping others the same
      existingProducts[productIndex] = updatedProduct;

      // Save updated data to storage
      storage.set(key, JSON.stringify(existingProducts));
    }
  }
};

export const storageDeleteProduct = (product_id: string) => {
  const key = KEY_TYPE.PRODUCTS;

  if (storage.contains(key)) {
    // Retrieve existing products
    const existingProducts: StorageProductTypes[] = JSON.parse(
      storage.getString(key) || '[]',
    );

    // Filter out the product to delete
    const updatedProducts = existingProducts.filter(
      product => product.product_id !== product_id,
    );

    // Save updated list back to storage
    storage.set(key, JSON.stringify(updatedProducts));
  }
};

export const storageUpdateSelectedProducts = (
  updatedProducts: StorageProductTypes[],
) => {
  // Check if data exists
  const storedProducts = storage.getString(KEY_TYPE.PRODUCTS);
  if (!storedProducts) return;

  const products = JSON.parse(storedProducts);

  // Update only matching products
  const updatedProductList = products.map((product: StorageProductTypes) => {
    const updatedProduct = updatedProducts.find(
      p => p.product_id === product.product_id,
    );
    return updatedProduct ? {...product, ...updatedProduct} : product;
  });

  // Save updated products back to MMKV
  storage.set(KEY_TYPE.PRODUCTS, JSON.stringify(updatedProductList));
  console.log('Products updated successfully!');
};

export const storageDeleteSelectedProducts = (
  selectedProducts: StorageProductTypes[],
) => {
  // Get stored products
  const storedProducts = storage.getString(KEY_TYPE.PRODUCTS);
  if (!storedProducts) return;

  const products: StorageProductTypes[] = JSON.parse(storedProducts);

  // Extract product_ids from selected products
  const selectedProductIds = selectedProducts.map(
    product => product.product_id,
  );

  // Filter out selected products
  const updatedProductList = products.filter(
    product => !selectedProductIds.includes(product.product_id),
  );

  // Save updated list back to MMKV
  storage.set(KEY_TYPE.PRODUCTS, JSON.stringify(updatedProductList));
  console.log('Selected products deleted successfully!');
};

export const storageCheckVerison = async (token: string) => {
  try {
    const response = await axios.get(
      'http://nodepos.id/co_branding_version_v1.php?tkn=' + token,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return response?.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
