import { Link } from 'react-router-dom'

export default function Home({iguanaImage}, {Poll}) {
    return (
    <div>
        <div className='title'>
            Charitable-Polls
        </div>
        <div>
            <Link to="/poll"><button className='start'><p>Start Poll</p></button></Link>
        </div>
        <div className='charity-boxes-container'>
            <p className='charity-box'>
                <img src={iguanaImage} alt='Iguana Image'></img>
            </p>
            <br></br>
            <p className='charity-box'>
                <img src={iguanaImage} alt='Iguana Image'></img>
            </p>
        </div>
    </div>
    )
}