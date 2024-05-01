import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryForm from "./CategoryForm";

interface Category {
  //komponen server kategorinya ka abi
  id: string;
  category_name: string;
  category_description: string;
  is_active: boolean;
}
interface UserProfile {
  name: string;
  email: string;
}
function CategoryDashboard() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
  });

  const [categories, setCategories] = useState<Category[]>([]); //interface komponen dari Category
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true); //jika sedang loading seperti lin 167

  async function fetchCategories() {
    try {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category", //api server kategori
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Categories");
      }

      const data = await response.json();
      setCategories(data);
      console.log(data);
      setIsLoadingCategories(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const token = localStorage.getItem("token");
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        };
        const response = await fetch(
          "https://library-crud-sample.vercel.app/api/user/profile",
          options
        );

        if (!response.ok) {
          // kalau responnya tidak ok maka dia akan eror
          throw new Error("Failed to fetch User Profile");
        }

        const data = await response.json();

        setUserProfile(data);
        //console.log(data); email dan nama yang terdaftar
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    }

    fetchUserProfile();
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/user/logout",
        options
      );

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      localStorage.removeItem("token");
      navigate("/Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoadingCategories(true);
      const token = localStorage.getItem("token");
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(
        `https://library-crud-sample.vercel.app/api/category/${id}`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to Delete Category");
      }

      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
      alert(error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <nav className="flex justify-between items-center mb-2">
            <div>
              <span className="text-center">Hello, {userProfile.name}</span>
              <div>
                <ul>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Logout
                    </button>
                    {/* ketika di klik akan keluar dari web  */}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <CategoryForm
          // form penulisan kategorinya di file CategoryForm.tsx
            fetchCategories={fetchCategories}
            setIsLoadingCategories={setIsLoadingCategories}
          />
          {isLoadingCategories && <h1>Loading Categories...</h1>}
          {/* sebelum menjalankan proses dia akan loading terlebih dahulu dan ini pemberitahuannya */}
          {!isLoadingCategories && categories.length > 0 && (
            //  setelah berhasil di proses maka akan masuk kategori yang diinput akan masuk ke dalam tabel
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-2">Category ID</th>
                    <th className="py-2">Category Name</th>
                    <th className="py-2">Category Description</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map(
                    (
                      cat // mapping ini untuk meletakan posisi data yang dimasukkan sesuai tabel yang di buat di thead
                    ) => (
                      <tr key={cat.id}>
                        <td className="border px-4 py-2">{cat.id}</td>
                        <td className="border px-4 py-2">
                          {cat.category_name}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          {cat.category_description}
                        </td>
                        <td className="border px-4 py-2">
                          <button
                            onClick={() => handleDelete(cat.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CategoryDashboard;
