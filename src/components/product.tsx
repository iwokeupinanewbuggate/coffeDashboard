import {
  Maybe,
  PriceType,
  useGetProductQuery,
  useRemoveProductMutation,
} from "../../generated";
import EditProduct from "./editPorduct";
import { Trash } from "./icons/trashCan";

export const Product = ({
  name,
  id,
  description,
  category,
  price,
  image,
}: {
  name: string;
  id: string;
  description: string;
  category: string;
  price: Maybe<PriceType> | undefined;
  image: string;
}) => {
  const [removeProductMutation, { data, loading, error }] =
    useRemoveProductMutation();
  const { refetch } = useGetProductQuery();
  const removeProduct = async () => {
    try {
      const res = removeProductMutation({
        variables: {
          removeProductId: id,
        },
      });
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        width: "75vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px black solid",
          width: "15vw",
          padding: "5px",
          height: "3vh",
        }}
      >
        <h1>{id}</h1>
      </div>
      <div
        style={{
          border: "1px black solid",
          width: "11vw",
          padding: "5px",
          height: "3vh",
        }}
      >
        <h1>{name}</h1>
      </div>
      <div
        style={{
          border: "1px black solid",
          width: "11vw",
          padding: "5px",
          height: "3vh",
        }}
      >
        <h3>{description} </h3>
      </div>
      <div
        style={{
          border: "1px black solid",
          width: "15vw",
          padding: "5px",
          height: "3vh",
        }}
      >
        <h3>{category} </h3>
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
            width: "3vw",
            borderBottom: "none",
            borderTop: "none",
          }}
        >
          <h3>{price?.large}</h3>
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
          <h3>{price?.meduim}</h3>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "5px",
            width: "3vw",
            borderBottom: "none",
            borderTop: "none",
          }}
        >
          <h3>{price?.small}</h3>
        </div>
        <div
          style={{
            width: "3vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={removeProduct}
        >
          <Trash />
        </div>
        <EditProduct
          id={id}
          name={name}
          description={description}
          category={category}
          price={price}
          image={image}
        />
      </div>
    </div>
  );
};
