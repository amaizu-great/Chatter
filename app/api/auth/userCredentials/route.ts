import bcrypt from "bcrypt";
import dataSource from "../../../../lib/typeORM";
import { User } from "../../../../entities/user";
import { NextRequest, NextResponse } from "next/server";

// Ensure the data source is initialized
const initDataSource = async () => {
  if (!dataSource.isInitialized) {
    try {
      await dataSource.initialize();
    } catch (error) {
      return { error_message: error };
    }
  }
};

export async function POST(req: NextRequest) {
  try {
    await initDataSource();
    const user = await req.json();
    const requestUrl = user.callbackUrl;

    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: user.email,
    });

    const signUp = async () => {
      let result;
      if (!userExist) {
        const newUser = new User();
        newUser.name = user.name;
        newUser.email = user.email;
        const saltRounds = 10; // You can adjust the number of salt rounds
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        newUser.password = hashedPassword;
        newUser.Post = {};
        newUser.bookmarks = {};
        newUser.notifications = {};
        newUser.verified = false;
        newUser.profilePic = "";

        result = await userRepository.save(newUser);
        return result;
      } else {
        result = null;
        return result;
      }
    };
    const login = async () => {
      let result;
      if (userExist) {
        const isPasswordValid = await bcrypt.compare(
          user.password,
          userExist.password ?? ""
        );
        if (isPasswordValid) {
          result = userExist;
          return result;
        } else {
          result = null;
          return result;
        }
      } else {
        result = null;
        return result;
      }
    };

    if (requestUrl === "http://localhost:3000/auth/login") {
      console.log("test");
      
      const res = await login();

      return NextResponse.json(res);
    } else if (requestUrl === "http://localhost:3000/auth/signup") {
      const res = await signUp();

      return NextResponse.json(res);
    }

    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error_message: "route failed" });
  }
}
