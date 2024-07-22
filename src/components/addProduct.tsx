import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAddProductMutation, useGetProductQuery } from "../../generated";
const style = {
  position: "absolute",
  top: "30%",
  left: "17.5vw",
  right: "17.5vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "65vw",
  height: "40vh",
  border: "none",
  backgroundColor: "#CE9760",
  borderRadius: "20px",
};

export default function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { refetch } = useGetProductQuery();
  const [productName, SetProductName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [descripiton, SetDescription] = React.useState("");
  const [image, SetImage] = React.useState("");
  const [smallPrice, SetSmallPrice] = React.useState(0);
  const [meduimPrice, SetMeduimPrice] = React.useState(0);
  const [largePrice, SetLargePrice] = React.useState(0);
  const [err, setErr] = React.useState("");
  const price = { large: largePrice, meduim: meduimPrice, small: smallPrice };
  const close = () => {
    setOpen(false);
    setCategory("");
    SetProductName("");
    SetImage("");
    SetDescription("");
    SetSmallPrice(0);
    SetMeduimPrice(0);
    SetLargePrice(0);
  };

  const nameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetProductName(event.target.value);
  };
  const CategoryHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  const descriptionHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetDescription(event.target.value);
  };
  const imageHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetImage(event.target.value);
  };
  const smallPriceHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSmallPrice(parseFloat(event.target.value));
  };
  const meduimPriceHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetMeduimPrice(parseFloat(event.target.value));
  };
  const largePriceHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetLargePrice(parseFloat(event.target.value));
  };

  const [addProductMutation, { data, loading, error }] =
    useAddProductMutation();

  const addProduct = async () => {
    if (
      productName !== "" &&
      category !== "" &&
      descripiton !== "" &&
      image !== "" &&
      price.large &&
      price.meduim &&
      price.small !== 0
    ) {
      setErr("");
      try {
        const res = await addProductMutation({
          variables: {
            input: {
              name: productName,
              category: category,
              description: descripiton,
              image: image,
              price: price,
            },
          },
        });
        console.log(res);
        handleClose();
        refetch();
      } catch (err) {
        console.error(err);
      }
    } else {
      setErr("Fill all the inputs");
    }
  };

  return (
    <div>
      <Button
        className={
          "bg-black p-[4px] text-white rounded-[10px] border-[1px] border-solid border-white"
        }
        onClick={handleOpen}
      >
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={"w-[100vw] h-[100vh] bg-[rgba(10, 10, 10, 0.1)]"}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div onClick={close}>X</div>
              <div
                style={{
                  width: "50vw",
                  height: "30vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                <input
                  placeholder="Name"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  value={productName}
                  onChange={nameHandle}
                />
                <input
                  placeholder="Category Id"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  value={category}
                  onChange={CategoryHandle}
                />
                <input
                  placeholder="Description"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  value={descripiton}
                  onChange={descriptionHandle}
                />
                <input
                  placeholder="Image"
                  type="file"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  onChange={imageHandle}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <h1>Price:</h1>

                  <div>
                    <input
                      placeholder="Small"
                      type="number"
                      style={{
                        background: "#543A20",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      value={smallPrice}
                      onChange={smallPriceHandle}
                    />
                    <input
                      placeholder="Meduim"
                      type="number"
                      style={{
                        background: "#543A20",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      value={meduimPrice}
                      onChange={meduimPriceHandle}
                    />
                    <input
                      placeholder="Large"
                      type="number"
                      style={{
                        background: "#543A20",
                        padding: "10px",
                        borderRadius: "10px",
                      }}
                      value={largePrice}
                      onChange={largePriceHandle}
                    />{" "}
                  </div>
                </div>
              </div>
              {err}
              <button onClick={addProduct}>Add Product</button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
