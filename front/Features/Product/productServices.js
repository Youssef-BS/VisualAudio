import axios from "axios";

const GetAllProductMarket = async(market_id)=>{
    const response = await axios.get(
        'product/market',
    );
    return response.data;
}

const GetProductById = async (id) => {
  const response = await axios.post(
    `product/${id}`,
   
  );

  return response.data;
};

const AuthProduct = {
    GetProductById,
    GetAllProductMarket
};

export default AuthProduct;

