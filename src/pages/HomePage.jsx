import { Link } from 'react-router-dom'

export default function Home({iguanaImage, STCImg}) {
    return (
    <div>
        <div className='title'>
            Charitable-Polls
        </div>
        <div>
            <Link to="/poll"><button className='start'><p>Start Poll</p></button></Link>
        </div>
        <p className='title'>Followed Charities</p>
        <div className='charity-boxes-container'>
            <p>
                <Link to="/charitypage"><button className='charity-box'><img src={iguanaImage} alt='Iguana Image'></img></button></Link>
            </p>
            {/* <br></br>
            <p>
                <button className='charity-box'><img src={STCImg} alt='STC'></img></button>
            </p> */}
        </div>
    </div>
    )
}