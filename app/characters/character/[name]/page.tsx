import { prisma } from "@/lib/db";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const character = await prisma.character.findUnique({
    where: { name },
  });

  if (!character) {
    return <div>Character doesn't exist </div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <ul>
        <li>Attack : {character.attack}</li>
        <li>Defense : {character.defense}</li>
        <li>HP : {character.healthPoints}</li>
        <li>EXP : {character.experience}</li>
      </ul>
    </div>
  );
}
