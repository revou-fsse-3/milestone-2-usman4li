import { Link } from "react-router-dom"
import { Button } from "../../Components"

const Home = () => {

    return(
        <div className="flex-1 justify-center item-center text-center border-y-blue-100">
            <h3 className="text-5xl pb-20">Home Page</h3>
            <Link to='/page'><Button label={'Lihat Cuaca'}/></Link>
        </div>
    )
}

export default Home