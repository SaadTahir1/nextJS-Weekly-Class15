import Link from "next/link";

export default async function Home() {
 
let url = await fetch("https://jsonplaceholder.typicode.com/users")
let response = await url.json()
console.log(response)

    return(
    <div>
   {
    response.map( (resource: any) => (
        <div className="text-3xl">
        <Link href={`${resource.id}`}>
            <br />
          <h1 className="text-yellow-500"> Id is {resource.id}</h1>
          {resource.name}
        </Link>
        </div>
    ) )
   }
    </div>
    );
};