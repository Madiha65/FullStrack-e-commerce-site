"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaRegImages } from "react-icons/fa6";
import { IoMdCloudUpload } from "react-icons/io";
import { postData } from "@/utils/api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

const AddCategory = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    color: "",
    images: [],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
 const router = useRouter();
  const changeInput = (e) => {
    setFormFields(() => ({
      ...formFields,
      [e.target.name]: e.target.value,
    }));
  };

const addCategory = (e) => {
    e.preventDefault();

    if (!formFields.name || !formFields.color || formFields.images.length === 0) {
      setSnackbarMessage("Please fill all fields and upload at least one image.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", formFields.name);
    formData.append("color", formFields.color);
    formFields.images.forEach((img) => formData.append("images", img.file));

    postData("/api/create-category", formData)
      .then((res) => {
        setSnackbarMessage("Category created successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        setTimeout(() => {
          router.push("/category");
        }, 10);
      })
      .catch((err) => {
        setSnackbarMessage("Failed to create category.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const changeImages = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormFields({ ...formFields, images: previews });
  };

  return (
    <div className="right-content w-100 p-[10px]">
      <form className="form" onSubmit={addCategory}>
        <h1 className="font-bold text-[28px] font-[600] dark:text-gray-200 pb-5">
          Add Category
        </h1>

        <div className="row d-flex flex-wrap !ml-[-15px] !mr-[-15px]">
          <div className="col-sm-9 flex flex-col gap-3 w-[75%]">
            <div
              className="card p-4 mt-0 my-0 bg-white dark:bg-themeDark border border-[rgba(0,0,0,0.1)] 
            rounded-[10px] m-[10px]"
            >
              <div className="form-group !mb-[15px]">
                <h6 className="!text-[15px] !mb-[16px] text-black dark:text-gray-200 font-[600]">
                  Category Name
                </h6>
                <input
                  onChange={changeInput}
                  name="name"
                  type="text"
                  className="w-full h-[45px] border rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="form-group !mb-[15px]">
                <h6 className="!text-[15px] !mb-[16px] text-black dark:text-gray-200 font-[600]">
                  Color
                </h6>
                <input
                  name="color"
                  onChange={changeInput}
                  type="text"
                  className="w-full h-[45px] border rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div className="imagesUploadSec">
                <h5 className="!text-[20px] pt-5 !mb-[13px] text-black dark:text-gray-200 font-[600]">
                  Media And Published
                </h5>

                <div className="imgUploadBox d-flex gap-[10px] mb-5">
                  <div className="uploadBox relative bg-white dark:bg-gray-800 border border-dashed rounded-[10px] w-[150px] h-[150px] cursor-pointer">
                    <input
                      name="images"
                      onChange={changeImages}
                      type="file"
                      multiple
                      className="h-full w-full opacity-0 absolute cursor-pointer"
                    />
                    <div className="info flex flex-col justify-center items-center h-full">
                      <FaRegImages
                        size={"2rem"}
                        className="text-[50px] opacity-[0.2] dark:text-gray-300"
                      />
                      <h5 className="text-center font-semibold opacity-50 text-black dark:text-gray-300">
                        image upload
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="preview-images flex gap-3 flex-wrap mt-3">
                  {formFields.images.length > 0 &&
                    formFields.images.map((img, index) => (
                      <div key={index} className="relative w-[100px] h-[100px]">
                        <img
                          src={img.preview}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md border"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = [...formFields.images];
                            updated.splice(index, 1);
                            setFormFields({ ...formFields, images: updated });
                          }}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                </div>

                <br />
                <Button
                  variant="contained"
                  type="Submit"
                  className="Primary !btn-blue !btn-lg !btn-big w-full"
                >
                  <IoMdCloudUpload size={"2rem"} />
                  &nbsp; PUBLISH AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          elevation={6}
          variant="filled"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default AddCategory;
