"use server";

import { prisma } from "@/lib/db";

export async function createCharacter(formData: FormData) {
  await prisma.character.create({
    data: {
      name: formData.get("name") as string,
    },
  });
}
