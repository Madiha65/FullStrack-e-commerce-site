"use client";
import React, { useEffect, useState } from "react";
import { PiExportBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { MdOutlineDeleteForever } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";
import { Tooltip, Button } from "@mui/material";
import { MdOutlineEdit } from "react-icons/md";
import { editData, fetchDataFromApi, updateImage } from "@/utils/api";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { FaRegImages } from "react-icons/fa6";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import { useRouter } from "next/navigation";
const columns = [
  { id: "Image", label: "Image", minWidth: 150 },
  { id: "Category", label: "Category", minWidth: 100 },
  { id: "Color", label: "Color", minWidth: 100 },
  { id: "Actions", label: "Actions", minWidth: 100 },
];

const Category = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
 const [catData, setCatData] = useState([]);
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState({
    name: "",
    color: "",
    images: [],
  });
  const [open, setOpen] = React.useState(false);
  const [editId, setEditId] = useState();
  const [deletingId, setDeletingId] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const handleClose = () => {
    setOpen(false);
  };
 const fetchCategories = () => {
    fetchDataFromApi("/api/get-category").then((res) => {
      setCatData(res.categorys || []);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories();
  }, []);

  
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        fetchCategories();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);


  const editCategory = (id) => {
    console.log("Editing category ID:", id);
    setEditId(id);
    setOpen(true);
    fetchDataFromApi(`/api/category/${id}`).then((res) => {
      const category = res.category || {};
      setSelectedCategory({
        name: category.name || "",
        color: category.color || "",
        images: category.images || [],
      });
    });
  };

  const handleImageUpdate = async (oldFileId, targetId, file) => {
    try {
      await updateImage(
        `/api/update-image/${oldFileId}?target=category&targetId=${targetId}`,
        file
      );
      setSnackbarMessage("Image updated successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      fetchDataFromApi(`/api/category/${targetId}`).then((res) => {
        setSelectedCategory({
          name: res.category.name || "",
          color: res.category.color || "",
          images: res.category.images || [],
        });
      });
    } catch (error) {
      setSnackbarMessage("Error updating image");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const categoryEditFun = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", selectedCategory.name);
    formData.append("color", selectedCategory.color);
    console.log("Submitting form data:", [...formData]);

    editData(`/api/update-category/${editId}`, formData)
      .then((res) => {
        console.log("Category updated:", res);

        setSnackbarMessage("Category updated successfully!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);

        fetchDataFromApi("/api/get-category").then((res) => {
          setCatData(res.categorys || []);
        });
        setOpen(false);
      })
      .catch((err) => {
        setSnackbarMessage("Failed to update category");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  const deleteCategory = async (id) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      const res = await fetch(
        `http://localhost:4000/api/delete-category/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete category");
      setSnackbarMessage("Category deleted successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      fetchDataFromApi("/api/get-category").then((res) => {
        setCatData(res.categorys || []);
      });
    } catch (error) {
      setSnackbarMessage("Error deleting category");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleRemoveImage = async (fileId) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/delete-image/${fileId}?target=category&targetId=${editId}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      setSnackbarMessage("Image removed successfully!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      fetchDataFromApi(`/api/category/${editId}`).then((res) => {
        setSelectedCategory({
          name: res.category.name || "",
          color: res.category.color || "",
          images: res.category.images || [],
        });
      });
    } catch (error) {
      setSnackbarMessage("Error deleting image");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="px-4 py-5 bg-gray-100 dark:bg-[#111113]">
        <div className="card w-full p-0 pr-1 pb-5 dark:bg-themeDark dark:border-[rgba(255,255,255,0.1)] mt-0">
          <div className="p-5 flex items-center justify-between">
            <h2 className="text-[20px] font-bold">Category List</h2>
            <div className="ml-auto flex items-center gap-3">
              <Button
                className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark !text-dark dark:!text-gray-200 !border !border-[rgba(0,0,0,0.99)] dark:!border-[rgba(255,255,255,0.5)] dark:!bg-[rgba(31,41,50,1)]"
                variant="outlined"
                startIcon={<PiExportBold />}
                size="small"
              >
                Export
              </Button>
              <Button
                className="!bg-dark !text-white !capitalize !px-2 dark:!bg-white dark:!text-black !hover:!bg-dark !hover:!text-white !rounded-md !text-[12px] !h-[38px] !w-[150px] flex items-center gap-2"
                variant="contained"
                href="/category/addCategory"
              >
                <FaPlus />
                Add Product
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full px-5 mb-4">
            <div className="searchBox relative w-[450px]">
              <IoSearch
                size={20}
                className="absolute top-[10px] left-[10px] text-gray-500"
              />
              <input
                placeholder="Search products..."
                className="w-full h-[40px] outline-none border border-[rgba(0,0,0,0.2)] dark:border-[rgba(253, 126, 126, 0.1)] rounded-md px-3 pl-8 text-[14px] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.3)] dark:bg-themeDark"
                type="text"
              />
            </div>
            <Button
              className="bg-primary !capitalize !font-[400] !px-4 !hover:!bg-dark !text-dark dark:!text-gray-200 !border !border-[rgba(0,0,0,0.99)] dark:!border-[rgba(255,255,255,0.5)] dark:!bg-[rgba(31,41,50,1)]"
              variant="outlined"
              startIcon={<LiaFilterSolid />}
              size="small"
            >
              Filters
            </Button>
          </div>
          <TableContainer sx={{ maxHeight: 450 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox {...label} />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {catData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((category) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={category._id}
                    >
                      <TableCell>
                        <Checkbox {...label} size="small" />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 flex-wrap">
                          {category.images && category.images.length > 0 ? (
                            category.images.map((img, index) => (
                              <img
                                key={index}
                                src={`http://localhost:4000/api/get-image/${img.fileId}`}
                                alt={category.name}
                                className="w-[40px] h-[40px] object-cover rounded-md border"
                              />
                            ))
                          ) : (
                            <span className="text-gray-400 text-sm">
                              No images
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>
                        <span className="text-nowrap">{category.color}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 actions w-[150]">
                          <Tooltip title="Edit" placement="top">
                            <Button
                              className="!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark"
                              onClick={() => editCategory(category._id)}
                            >
                              <MdOutlineEdit
                                size={25}
                                className="text-themeDark dark:!text-gray-100"
                              />
                            </Button>
                          </Tooltip>

                          <Tooltip title="Delete" placement="top">
                            <Button
                              disabled={deletingId === category._id}
                              className="!min-w-[30px] !w-[30px] !h-[30px] !text-themeDark"
                              onClick={() => deleteCategory(category._id)}
                            >
                              {deletingId === category._id ? (
                                "..."
                              ) : (
                                <MdOutlineDeleteForever
                                  size={25}
                                  className="text-themeDark dark:!text-gray-100"
                                />
                              )}
                            </Button>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 25]}
            component="div"
            count={catData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>

      <Dialog className="editModel" open={open} onClose={handleClose}>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <form onSubmit={categoryEditFun}>
            <h1 className="font-bold text-[28px] font-[600] dark:text-gray-200 pb-5">
              Edit Category
            </h1>
            <div className="row d-flex flex-wrap !ml-[-15px] !mr-[-15px]">
              <div className="col-sm-9 flex flex-col gap-3 w-[100%]">
                <div className="card p-4 mt-0 my-0 bg-white dark:bg-themeDark m-[10px]">
                  <div className="form-group !mb-[15px]">
                    <h6 className="!text-[15px] !mb-[16px] text-black dark:text-gray-200 font-[600]">
                      Category Name
                    </h6>
                    <input
                      name="name"
                      type="text"
                      value={selectedCategory.name}
                      onChange={(e) =>
                        setSelectedCategory({
                          ...selectedCategory,
                          name: e.target.value,
                        })
                      }
                      className="w-full h-[45px] border rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                    />
                  </div>

                  <div className="form-group !mb-[15px]">
                    <h6 className="!text-[15px] !mb-[16px] text-black dark:text-gray-200 font-[600]">
                      Color
                    </h6>
                    <input
                      name="color"
                      type="text"
                      value={selectedCategory.color}
                      onChange={(e) =>
                        setSelectedCategory({
                          ...selectedCategory,
                          color: e.target.value,
                        })
                      }
                      className="w-full h-[45px] border rounded-md px-3 bg-gray-100 dark:bg-gray-800"
                    />
                  </div>
                  <div className="imagesUploadSec">
                    <h5 className="!text-[20px] pt-5 !mb-[13px] text-black dark:text-gray-200 font-[600]">
                      Media And Published
                    </h5>
                    <div className="uploadBox relative bg-white dark:bg-gray-800 border border-dashed rounded-[10px] w-[150px] h-[150px] cursor-pointer">
                      <input
                        name="images"
                        type="file"
                        multiple
                        className="h-full w-full opacity-0 absolute cursor-pointer"
                        onChange={(e) =>
                          handleImageUpdate(
                            selectedCategory.images[0]?.fileId,
                            editId,
                            e.target.files[0]
                          )
                        }
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
                    <div className="flex gap-3 flex-wrap mt-3">
                      {selectedCategory.images.map((img, index) => (
                        <div
                          key={index}
                          className="box p-2 border border-[rgba(0,0,0,0.1)] rounded-md overflow-hidden relative group h-[120px] w-[120px]"
                        >
                          <div className="relative rounded-md overflow-hidden">
                            <img
                              src={`http://localhost:4000/api/get-image/${img.fileId}`}
                              alt="Category"
                              className="w-full h-full object-cover rounded-md"
                            />
                            <div className="overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-4 hidden group-hover:flex">
                              <button
                                type="button"
                                onClick={() =>
                                  document
                                    .getElementById(`file-input-${index}`)
                                    .click()
                                }
                              >
                                <FaRegImages
                                  size={29}
                                  className="text-white cursor-pointer"
                                />
                              </button>

                              <button
                                onClick={() => handleRemoveImage(img.fileId)}
                              >
                                <RiDeleteBinLine
                                  size={29}
                                  className="text-white cursor-pointer"
                                />
                              </button>
                            </div>
                          </div>
                          <input
                            type="file"
                            id={`file-input-${index}`}
                            className="hidden"
                            onChange={(e) => {
                              e.stopPropagation();
                              handleImageUpdate(
                                img.fileId,
                                editId,
                                e.target.files[0]
                              );
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <DialogActions>
                      <Button variant="outlined" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </DialogActions>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <br />
        </DialogContent>
      </Dialog>
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
    </>
  );
};

export default Category;
