import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};

export const postData = async (url, data) => {
  const isFormData = data instanceof FormData;

  return fetch(`http://localhost:4000${url}`, {
    method: "POST",
    body: data,
    headers: isFormData ? {} : { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const editData = async (url, uploadData) => {
  const response = await axios.put(BASE_URL + url, uploadData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateImage = async (url, imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await axios.put(BASE_URL + url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};
