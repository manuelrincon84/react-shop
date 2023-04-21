import { useEffect, useState} from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    /*useEffect( () => {
        axios.get(API).then((response) => {
        setProducts(response.data);
        });
    }, [])*/
    useEffect(()=>{
		const getProducts = async () => {
			const response = await axios(API)
			setProducts(response.data);
		}
		getProducts();

	},[]);

    return products;
};

export default useGetProducts;