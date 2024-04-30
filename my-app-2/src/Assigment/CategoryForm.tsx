import React, { useState } from "react";

// Interface untuk props yang diperlukan oleh CategoryForm
interface CategoryFormProps {
  fetchCategories: () => void; // Fungsi untuk memperbarui daftar kategori setelah penambahan
  setIsLoadingCategories: (isLoading: boolean) => void; // Fungsi untuk mengatur status loading kategori
}

// Komponen CategoryForm
const CategoryForm: React.FC<CategoryFormProps> = ({
  fetchCategories,
  setIsLoadingCategories,
}) => {
  const [categoryName, setCategoryName] = useState(""); // State untuk menyimpan nama kategori yang diinput
  const [categoryDescription, setCategoryDescription] = useState(""); // State untuk menyimpan deskripsi kategori yang diinput

  // Fungsi untuk menangani pengiriman formulir kategori
  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault(); //Mencegah reload halaman saat submit tulisan yang di inputannya tidak hilang
    setIsLoadingCategories(true); // Mengatur status loading kategori menjadi true saat proses pengiriman dimulai
    console.log(handleSubmit);

    try {
      const token = localStorage.getItem("token");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          category_name: categoryName,
          category_description: categoryDescription,
          is_active: true,
        }),
      };

      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category",
        options
      );

      if (!response.ok) {
        throw new Error("Failed to add Category");
      }

      fetchCategories(); // Memanggil fungsi untuk memperbarui daftar kategori setelah penambahan
      setCategoryName(""); // Mengosongkan input nama kategori setelah submit
      setCategoryDescription(""); // Mengosongkan input deskripsi kategori setelah submit
    } catch (error) {
      console.error("Error adding category:", error);
    } finally {
      setIsLoadingCategories(false); // Mengatur status loading kategori menjadi false setelah selesai proses pengiriman
    }
  };

  // Mengembalikan tampilan form untuk input kategori
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category Name:
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
        />
      </label>
      <label>
        Category Description:
        <input
          type="text"
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Category</button>{" "}
      {/* Tombol untuk mengirimkan formulir kategori */}
    </form>
  );
};

export default CategoryForm;
