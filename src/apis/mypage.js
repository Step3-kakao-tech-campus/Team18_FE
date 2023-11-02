import {
  mockUsers,
  ProfileData,
  mockResponse,
} from "../components/account/mockUser";

// export const userInfo = () => {
//   return instance.get("/userInfo");
// };

// 백앤드 api 연결 전 까지 mock api 사용 - userInfo
export const userInfo = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = mockUsers["user@example.com"];
  if (!user) {
    throw new Error("User not found");
  }

  const responseUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    profileImage: user.profileImage,
    role: user.role,
    categoryList: user.categoryList,
    country: user.country,
    phone: user.phone,
    age: user.age,
    introduction: user.introduction,
  };

  return {
    message: "successful",
    user: responseUser,
    success: true,
  };
};

// export const getProfileById = (id) => {
//   if (!id) {
//     throw Error("해당 ID를 사용하는 사용자를 찾을 수 없습니다.  ");
//   }
//   return instance.get("mypage/profiles" + id);
// };

export const getProfileById = async (uid) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = ProfileData[uid];

  if (!user) {
    throw new Error("User not found");
  }

  return {
    message: "successful",
    user: user,
    success: true,
  };
};
