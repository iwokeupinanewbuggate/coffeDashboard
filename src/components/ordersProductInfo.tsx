import { useGetOneProductQuery } from "../../generated";

export const OrdersProductInfo = ({
  productId,
}: {
  productId: string | undefined;
}) => {
  const { data, loading, error } = useGetOneProductQuery({
    variables: {
      getOneProductId: productId || "",
    },
  });
  return (
    <div>
      <div>
        <h1>{data?.getOneProduct.name}</h1>
      </div>
    </div>
  );
};
