import { createCharacter } from "@/actions/actions";
import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function CharactersPage() {
  const characters = await prisma.character.findMany();

  return (
    <>
      <h1>Characters</h1>
      <ul className="p-4">
        {characters.map((character) => (
          <li className="flex gap-4 p-2 items-center" key={character.id}>
            {character.name}
            <Link
              className="border-1 p-1"
              href={`/characters/character/${character.name}`}
            >
              See stats
            </Link>
          </li>
        ))}
      </ul>
      <form action={createCharacter} className="bg-blue-300 p-5 ]">
        <input
          type="text"
          name="name"
          placeholder="name"
          className=" px-2 py-1 mx-2 border-2 outline-0 border-yellow-100  rounded-sm "
        />
        <button
          type="submit"
          className="px-2 py-1 rounded-sm text-blue-500 bg-amber-200"
        >
          Create character
        </button>
      </form>
    </>
  );
}
