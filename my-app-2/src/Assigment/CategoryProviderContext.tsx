import React, { createContext, useContext, useState, useEffect } from "react";

interface Category {
  id: number;
  category_name: string;
  category_description: string;
}

const CategoryProviderContext = createContext<Category[] | null>(null);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Missing token! User needs to be authenticated.");
          return;
        }

        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoryProviderContext.Provider
      value={{ categories, setCategories, isLoadingCategories }}
    >
      {children}
    </CategoryProviderContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoryProviderContext);

  if (!context) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }

  return context;
};

export default CategoryProviderContext;
