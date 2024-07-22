"use client";
import { Product } from "@/components/product";
import { useGetProductQuery } from "../../generated";
import AddProduct from "@/components/addProduct";
import { ChangeEvent, useState } from "react";
import { Trash } from "@/components/icons/trashCan";
import { EditIcon } from "@/components/icons/editIcon";
import Link from "next/link";

export default function Home() {
  const [searchBar, setSearchBar] = useState("");
  const { data, loading, error } = useGetProductQuery();
  console.log(data?.getProduct);

  const getQuery = window.location.pathname;

  const isPageOnMainProduct = getQuery === "/" || getQuery === "/orders";

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const filteredBySearch = data?.getProduct?.filter((product) => {
    if (searchBar === "") {
      return data?.getProduct;
    } else {
      return product.name
        .toLocaleLowerCase()
        .includes(searchBar.toLocaleLowerCase());
    }
  });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchBar(event.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#543A20",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#CE9760",
            width: "80vw",
            height: "90vh",
            borderRadius: "40px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
          }}
        >
          {!isPageOnMainProduct && (
            <div
              style={{ width: "80vw", top: "10vh", justifyContent: "center" }}
            >
              <Link href={"/"}>Products</Link> |
              <Link href={"/orders"}> Orders</Link>
            </div>
          )}
          {isPageOnMainProduct && (
            <div
              style={{ width: "80vw", top: "10vh", justifyContent: "center" }}
            >
              <Link href={"/"}>Products</Link> |
              <Link href={"/orders"}> Orders</Link>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <AddProduct />
            <input
              placeholder="Search"
              value={searchBar}
              onChange={handleSearch}
              style={{
                color: "black",
                backgroundColor: "#543A20",
                padding: "10px",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                width: "75vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  border: "1px black solid",
                  width: "15vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                ID
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "11vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Name
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "11vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Description
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "15vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Category
              </h1>
              <div
                style={{
                  border: "1px black solid",
                  width: "11vw",
                  height: "3vh",
                  display: "flex",
                }}
              >
                <h1
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    width: "3vw",
                    borderBottom: "none",
                    borderTop: "none",
                  }}
                >
                  Large
                </h1>
                <h1
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    width: "5vw",
                    borderBottom: "none",
                    borderTop: "none",
                  }}
                >
                  Meduim
                </h1>
                <h1
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    width: "3vw",
                    borderBottom: "none",
                    borderTop: "none",
                  }}
                >
                  Small
                </h1>
                <div
                  style={{
                    width: "6vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Trash />
                  <EditIcon />
                </div>
              </div>
            </div>
          </div>
          {filteredBySearch?.map((info, key) => (
            <Product
              key={key}
              name={info.name}
              price={info.price}
              id={info.id}
              description={info.description}
              category={info.category}
              image={info.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
