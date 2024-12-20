import Name from "../Components/Name"
const page = async (props:any) => {
    console.log(props)
    let url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`)
    const response = await url.json()
    console.log(response)
  return (
    <div>
      <h1 className="text-xl">
            <Name></Name> {response.name}
        </h1>
    </div>
  )
}

export default page
