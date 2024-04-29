import React, { useState } from "react";

interface CategoryFormProps {
  fetchCategories: () => void;
  setIsLoadingCategories: (isLoading: boolean) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  fetchCategories,
  setIsLoadingCategories,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoadingCategories(true);
    try {
      let token = localStorage.getItem("token");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          category_name: categoryName,
          category_description: categoryDescription,
        }),
      };
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category",
        options
      );
      if (!response.ok) {
        throw new Error("Failed to add Category");
      }
      fetchCategories();
      setCategoryName("");
      setCategoryDescription("");
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  return (
    <div>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoryName">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="categoryDescription">Category Description:</label>
          <input
            type="text"
            id="categoryDescription"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryForm;
