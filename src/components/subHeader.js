export function SubHeader(props) {
    return <h1 className={props?.onClick ? "text-3xl text-blue-500 hover:underline font-semibold cursor-pointer w-fit" : "text-3xl font-semibold"} onClick={props?.onClick}>{props?.children}</h1>
}