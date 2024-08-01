import connectToDB from "@/app/lib/db";
import category from "@/app/models/categoryModel";

import { NextRequest, NextResponse } from "next/server";

// create a new category
export const POST = async (req: NextRequest) => {
  try {
    await connectToDB();
    const { name } = await req.json();
    const existingCategory = await category.findOne({ name });

    if (existingCategory) {
      return new NextResponse("category name already exists", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Something went wrong", {
        status: 400,
      });
    }

    const newCategory = await category.create({
      name,
    });

    await newCategory.save();
    return NextResponse.json(newCategory, { status: 200 });
  } catch (err) {
    console.log("[newCategory]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
