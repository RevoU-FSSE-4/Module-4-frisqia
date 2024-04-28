import {useContext, useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
// import UserProfileProviderContext from "./userProfileProviderContext";
// import CategoryProviderContext from "./CategoryProviderContext";



function CategoryDashboard(){

    const {name, email, setUserProfile} = useContext();
    const {categories, setCategories} = useContext ();
    const [isLoading,setIsLoading] = useState(true);
    const [isLoadingCategories,setIsLoadingCategories] = useState(true);
    async function fetchCategories(){
        try{
            let token = localStorage.getItem("token");
            const options ={
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer" + token,
                }
            };
            const response = await fetch ("https://library-crud-sample.vercel.app/api/category", options)
            if (!response.ok){
                throw new Error('Failed to fetch Categories');

            }
            const data = await response.json();
            setCategories(data);
            setIsLoadingCategories(false);
        }catch(eror){
            alert(eror)
        }
    }
    useEffect(()=>{
        async function fetchUserProfile() {
            try{
                let token = localStorage.getItem("token");
                const options = {
                    method: "GET",
                    headers: {
                        "Context-Type": "application/json",
                        Authorization: "Bearer" + token,
                    },
                };
                const response = await fetch ("https://library-crud-sample.vercel.app/api/user/profile", options)
                if(!response.ok){
                throw new Error ("Failed to fetch User Profile");
            }
                const data = await response.json();
                 setUserProfile(data);
                setIsLoading(false);
        } catch (eror){
            alert(eror);
        }
        }
        fetchUserProfile();
        fetchCategories();
    }, []);
    const navigate = useNavigate();
    const handleLogOut= async () => {
        let token = localStorage.getItem("token");
        const options ={
            method: "DELETE",
            headers: {
                "context-Type": "application/json",
                Authorization: "Bearer" +token,
            },
        };
        const response = await fetch ("https://library-crud-sample.vercel.app/api/user/logout", options);
        const data = await response.json();
        localStorage.removeItem("token");
        navigate("/Login");
    };
    const handleDelete = async (id:string) => {
        try{
            setIsLoadingCategories(true);
            let token = localStorage.getItem("token");
            const options = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer" + token,
                },
            };
            const response = await fetch ("https://library-crud-sample.vercel.app/api/category/${id}", options);
            if (!response.ok){
                throw new Error ("Failed to Delete Category");
            }
            const data = await response.json();
            fetchCategories()
        }catch(eror){}
    };

    return(
        <div >
            {isLoading == true? (
                <h1>Loading....</h1>
            ):(
                <>
                <nav>
                    <div>
                    <span>Hello, {name!}</span>
                    <div>
                    <ul>
                    <li>
                    <button onClick={handleLogOut}>Logout</button>
                    </li>
                    </ul>
                    </div></div></nav>
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
                                    {categories.map((cat)=>{
                                        return(
                                            <tr>
                                                <th>{cat.id}</th>
                                                <td>{cat.category_name}</td>
                                                <td>{cat.category_description}</td>
                                                <td>
                                                <button onClick={()=>handleDelete(cat.id)}> Delete</button>
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
    )

}
export default CategoryDashboard