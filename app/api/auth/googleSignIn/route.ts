import { NextResponse } from "next/server";
import dataSource from "../../../../lib/typeORM";
import { User } from "../../../../entities/user";

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

export async function POST(req: Request) {
  try {
    const user = await req.json();


    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = "";
    newUser.Post = {};
    newUser.bookmarks = {};
    newUser.notifications = {};
    newUser.verified = false;
    newUser.profilePic = user.image

    await initDataSource();
    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: user.email,
    });

    if (!userExist) {
      await userRepository.save(newUser);
      return NextResponse.json("User has been saved");
    }

    return NextResponse.json("User Already Exist");
  } catch (error) {
    return NextResponse.json({ error_message: "route failed" });
  }
}
