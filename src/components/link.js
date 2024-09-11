export function Link(props) {
    return <a href={props?.url} className="text-blue-500 hover:underline font-bold">{props?.text}</a>
}