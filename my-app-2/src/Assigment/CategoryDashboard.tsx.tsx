import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import UserProfileProviderContext from "./userProfileProviderContext";
// import CategoryProviderContext from "./CategoryProviderContext";

interface UserProfile{
  name:string;
  email: string;
  categories:string
}

function CategoryDashboard() {
  const {setUserProfile } = useState<UserProfile>({
    name:"",
    email:"",
    categories: "",
  });
  const { categories, setCategories } = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  async function fetchCategories() {
    try {
      let token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
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
      setIsLoadingCategories(false);
    } catch (eror) {
      alert(eror);
    }
  }
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        let token = localStorage.getItem("token");
        const options = {
          method: "GET",
          headers: {
            "Context-Type": "application/json",
            Authorization: "Bearer" + token,
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
      } catch (eror) {
        alert(eror);
      }
    }
    fetchUserProfile();
    fetchCategories();
  }, []);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    let token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        "context-Type": "application/json",
        Authorization: "Bearer" + token,
      },
    };
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/logout",
      options
    );
    const data = await response.json();
    localStorage.removeItem("token");
    navigate("/Login");
  };
  const handleDelete = async (id: string) => {
    try {
      setIsLoadingCategories(true);
      let token = localStorage.getItem("token");
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer" + token,
        },
      };
      const response = await fetch(
        "https://library-crud-sample.vercel.app/api/category/${id}",
        options
      );
      if (!response.ok) {
        throw new Error("Failed to Delete Category");
      }
      const data = await response.json();
      fetchCategories();
    } catch (eror) {}
  };

  return (
    <div>
      {isLoading == true ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <nav>
            <div>
              <span>Hello, {setUserProfile.name!}</span>
              <div>
                <ul>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <CategoryForm fetchCategories={fetchCategories}={setIsLoadingCategories}/>
          {isLoadingCategories && <h1>Loading Categories...</h1>}
          {categories.length !== 0 && isLoadingCategories == false && (
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
                  {categories.map((cat) => {
                    return (
                      <tr key={`${cat.id}-row`} className="bg-white border-b dark:bg-gray-800 dark:border-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >{cat.id}</th>
                        <td className="px-6 py-4">{cat.category_name}</td>
                        <td className="px-6 py-4">{cat.category_description}</td>
                        <td className="px-6 py-4">
                            {" "}
                          <button onClick={() => handleDelete(cat.id)} className="text-white bg-red-700 hover:bg-800">
                           
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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
