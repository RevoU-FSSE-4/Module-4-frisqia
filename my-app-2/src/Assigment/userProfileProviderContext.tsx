// import React, { createContext, useContext, useState } from "react";

// interface UserProfile {
//   name: string;
//   email: string;
// }

// const UserProfileProviderContext = createContext<UserProfile | null>(null);

// export const UserProfileProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

//   useEffect(() => {
//     async function ProfileUserProv() {
//       const storedProfile = localStorage.getItem("userProfile");
//     }
//     if (storedProfile) {
//       setUserProfile(JSON.parse(storedProfile));
//     }
//   }, []);

//   return (
//     <UserProfileProviderContext.Provider
//       value={{ userProfile, setUserProfile }}
//     >
//       {children}
//     </UserProfileProviderContext.Provider>
//   );
// };

// export const useUserProfile = () => {
//   const context = useContext(UserProfileProviderContext);

//   if (!context) {
//     throw new Error("useUserProfile must be used within a UserProfileProvider");
//   }

//   return context;
// };

// export default UserProfileProviderContext;
