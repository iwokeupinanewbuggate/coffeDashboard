import { Dispatch, SetStateAction, useState } from "react";
import { GetOrdersQuery, Order, useGetOrdersQuery } from "../../generated";
import { OrdersProductInfo } from "./ordersProductInfo";
import { UserInfo } from "./orderUserinfo";

export const OrdersList = ({
  date,
  orderData,
  setUsername,
  orderStatus,
}: {
  date: string;
  orderData: Order;
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  orderStatus: string;
}) => {
  const { data, loading, error } = useGetOrdersQuery();
  return (
    <div>
      <div
        style={{
          width: "75vw",
          height: "5vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px black solid",
            width: "10vw",
            padding: "5px",
            height: "3vh",
          }}
        >
          {data?.getOrders?.map((info, key) => (
            <UserInfo
              key={key}
              userId={info.userId}
              SetUsername={setUsername}
            />
          ))}
        </div>
        <div
          style={{
            border: "1px black solid",
            width: "11vw",
            padding: "5px",
            height: "3vh",
          }}
        >
          {orderData.product.map((product, key) => (
            <OrdersProductInfo key={key} productId={product?.productId} />
          ))}
        </div>
        <div
          style={{
            border: "1px black solid",
            width: "11vw",
            padding: "5px",
            height: "3vh",
          }}
        >
          <h3>{date} </h3>
        </div>
        <div
          style={{
            border: "1px black solid",
            width: "11vw",
            padding: "5px",
            height: "3vh",
          }}
        >
          <h3>{orderStatus}</h3>
        </div>
        {orderData.product.map((product, key) => (
          <div style={{ display: "flex" }} key={key}>
            <div
              style={{
                border: "1px black solid",
                width: "5vw",
                padding: "5px",
                height: "3vh",
              }}
            >
              <h3>{product?.quantity}</h3>
            </div>
            <div
              style={{
                border: "1px black solid",
                width: "11vw",
                height: "3vh",
                display: "flex",
              }}
            >
              <div
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  width: "5vw",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <h3>{product?.ingridientAmount}</h3>
              </div>

              <div
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  width: "5vw",
                  borderBottom: "none",
                  borderTop: "none",
                }}
              >
                <h3>{product?.size}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
