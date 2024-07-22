"use client";
import { useGetOrdersQuery } from "../../../generated";
import { ChangeEvent, useState } from "react";
import { Trash } from "@/components/icons/trashCan";
import { EditIcon } from "@/components/icons/editIcon";
import Link from "next/link";
import { OrdersList } from "@/components/order";

export default function Orders() {
  const [searchBar, setSearchBar] = useState("");
  const { data, loading, error } = useGetOrdersQuery();

  const [username, setUsername] = useState<string | undefined>("");
  const filteredBySearch = data?.getOrders?.filter(() => {
    if (searchBar === "") {
      return data?.getOrders;
    } else {
      return username
        ?.toLocaleLowerCase()
        .includes(searchBar.toLocaleLowerCase());
    }
  });
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  const getQuery = window.location.pathname;

  const isPageOnMainProduct = getQuery === "/" || getQuery === "/orders";
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
                width: "80vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  border: "1px black solid",
                  width: "10vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Username
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "10vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Email
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "11vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                Date
              </h1>
              <h1
                style={{
                  border: "1px black solid",
                  width: "15vw",
                  padding: "5px",
                  height: "3vh",
                }}
              >
                status
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
                  Quanity
                </h1>
                <h1
                  style={{
                    border: "1px solid black",
                    padding: "5px",
                    width: "10vw",
                    borderBottom: "none",
                    borderTop: "none",
                  }}
                >
                  Ingrediant Amount
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
                  Size
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
          {filteredBySearch?.map((order, key) => (
            <OrdersList
              key={key}
              date={order.orderedAt}
              orderData={order}
              setUsername={setUsername}
              orderStatus={order.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
