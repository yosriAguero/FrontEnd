

export default function TabButton(props){
    function handleClick(args)
    {
        console.log('Hello ');
        alert(args);
    }
    return <li><button onClick={()=>handleClick(props.children)}>{props.children}</button></li>
}