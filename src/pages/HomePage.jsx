
export default function Home({iguanaImage}) {
    return (
    <div>
        <div className='title'>
            Charitable-Polls
        </div>
        <p>
            Start Polling button
        </p>
        <p>
            Followed Charities
        </p>
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