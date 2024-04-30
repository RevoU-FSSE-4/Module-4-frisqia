import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryForm from "./CategoryForm";

interface Category {
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

  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

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
        "https://library-crud-sample.vercel.app/api/category",
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
          throw new Error("Failed to fetch User Profile");
        }

        const data = await response.json();

        setUserProfile(data);
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
    <div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <nav>
            <div>
              <span>Hello, {userProfile.name}</span>
              <div>
                <ul>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <CategoryForm
            fetchCategories={fetchCategories}
            setIsLoadingCategories={setIsLoadingCategories}
          />
          {isLoadingCategories && <h1>Loading Categories...</h1>}
          {!isLoadingCategories && categories.length > 0 && (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Category ID</th>
                    <th>Category Name</th>
                    <th>Category Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((cat) => (
                    <tr key={cat.id}>
                      <td>{cat.id}</td>
                      <td>{cat.category_name}</td>
                      <td>{cat.category_description}</td>
                      <td>
                        <button onClick={() => handleDelete(cat.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
