import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from MOISTURE`;
    console.log(rows);
  return (
    <div>
     {JSON.stringify(rows)}
    </div>
  );
}