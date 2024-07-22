import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Maybe,
  PriceType,
  useEditProductMutation,
  useGetProductQuery,
} from "../../generated";
import { EditIcon } from "./icons/editIcon";
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

export default function EditProduct({
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
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { refetch } = useGetProductQuery();
  const [productName, SetProductName] = React.useState(name);
  const [EditCategory, setEditCategory] = React.useState(category);
  const [editDescription, SetDescription] = React.useState(description);
  const [EditImage, SetEditImage] = React.useState(image);
  const [smallPrice, SetSmallPrice] = React.useState(price?.small || 0);
  const [meduimPrice, SetMeduimPrice] = React.useState(price?.meduim || 0);
  const [largePrice, SetLargePrice] = React.useState(price?.large || 0);
  const [err, setErr] = React.useState("");
  const editPrice = {
    large: largePrice,
    meduim: meduimPrice,
    small: smallPrice,
  };
  const close = () => {
    setOpen(false);
  };

  const nameHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetProductName(event.target.value);
  };
  const EditCategoryHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditCategory(event.target.value);
  };
  const descriptionHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetDescription(event.target.value);
  };
  const EditImageHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetEditImage(event.target.value);
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

  const [editProductMutation, { data, loading, error }] =
    useEditProductMutation();

  const addProduct = async () => {
    if (
      productName !== "" &&
      EditCategory !== "" &&
      editDescription !== "" &&
      EditImage !== "" &&
      editPrice.large &&
      editPrice.meduim &&
      editPrice.small !== 0
    ) {
      setErr("");
      try {
        const res = await editProductMutation({
          variables: {
            input: {
              name: productName,
              category: EditCategory,
              description: editDescription,
              image: EditImage,
              price: editPrice,
              productId: id,
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
      <Button style={{ width: "3vw" }} onClick={handleOpen}>
        <EditIcon />
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
                  value={EditCategory}
                  onChange={EditCategoryHandle}
                />
                <input
                  placeholder="Description"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  value={editDescription}
                  onChange={descriptionHandle}
                />
                <input
                  placeholder="Image"
                  type="url"
                  style={{
                    background: "#543A20",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                  value={EditImage}
                  onChange={EditImageHandle}
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
              <button onClick={addProduct}>Edit Product</button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
