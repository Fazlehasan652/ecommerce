import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Outlet } from "react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { UserContext } from "../UserContext";

const RootLayout = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const productsCollectionRef = collection(db, "products");
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      // console.log(data);
      const filterData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(filterData)
      setProducts(filterData);
    };
    getProducts();
  }, []);
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <UserContext.Provider value={products}>
          <Outlet/>
        </UserContext.Provider>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
