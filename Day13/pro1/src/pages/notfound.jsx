import { Link } from "react-router"

const Notfound=()=>{
    return(
        <div>
            <h2>Page not found</h2>
            <a href="/">Home</a>
            <br />
            <Link to="/">Home ki Link</Link>
        </div>
    )
}

export default Notfound