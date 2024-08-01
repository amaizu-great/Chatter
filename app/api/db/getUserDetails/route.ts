import { User } from "../../../../entities/user";
import dataSource from "../../../../lib/typeORM";
import { NextRequest, NextResponse } from "next/server";

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
    const { email } = await req.json();
    await initDataSource();

    const userRepository = dataSource.getRepository(User);
    const userExist = await userRepository.findOneBy({
      email: email,
    });

    if (userExist) {
      return NextResponse.json(userExist);
    }
    return NextResponse.json(null);
  } catch (error) {
    return NextResponse.json({ error_message: "route failed" });
  }
}
