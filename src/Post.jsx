
// props: {autor: "", content: ""}

export function Post(props){
  return(
    <>
    <strong>{props.author}</strong>
    <p>{props.content}</p>
    </>
  )
}


// Default Exports vs Named Exports
// Default = pode nomear na importação
// export(named) = o nome da função é o fixo no import
