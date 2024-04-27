import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function CategoryComponent() {
  const [responseCategory, setCategoryResponse] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {}
    getProfile();
    getCategory();
  }, []);

  async function getCategory() {
    const token = localStorage.getItem("token");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    try {
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category",
        options
      );
      if (!response.ok) {
        throw new Error("Your network response not ok");
      }
      const result = await response.json();
      const data = (result as string[]) || [];
      setCategoryResponse(data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  async function deletCategory(id: any) {}
  return (
    <div>
      <h1> Category Data</h1>
      <table>
        <head>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </head>
        <body>
          {responseCategory.length === 0 ? (
            <tr>
              <td colSpan={5}>
                <br />
                <br />
                No Data Entry
              </td>
            </tr>
          ) : (
            responseCategory.map((item) => (
              <tr key={item.id}>
                <td>{item.category_name}</td>
                <td>{item.category_description}</td>
                <td>{string(item.is_active)}</td>
                <td>
                  {" "}
                  <button>Update</button>
                  <button onClick={() => deletCategory(item.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </body>
      </table>
    </div>
  );
}
