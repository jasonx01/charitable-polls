import './charitypage.css'

const items = ['Aug 3 | @BlueGuardians: We met the goal to raise $100,000! Thanks everyone!',
               "Aug 2 | @BlueGuardians: Don't be so blue, watch Iggy live on Youtube!",
               'Aug 1 | @BlueGuardians: Blue iguanas are the cool-est in the reptile world!',
               'Aug 1 | @BlueGuardians: Saved 1,000 blue iguanas and counting!',
               'Jul 31 | @BlueGuardians: Save the blue iguanas and win prizes!',];

export default function Search({iguanaImage}) {
    return (
    <main>
        <div>
            <h1>Blue Iguana Guardians</h1>
        </div>
    
        <div className='charitybox'>
            <img 
                src={iguanaImage} 
                alt="Blue Iguana"
            />
        </div>

        <div>
            <p style={{margin:'10px'}}>
                The "Blue Iguana Guardians" is a dedicated conservation group established to protect and preserve the critically endangered blue iguana (Cyclura lewisi) species. With the aim of ensuring the long-term survival of this magnificent reptile, the group operates under a strong commitment to research, conservation efforts, education, and community engagement.
            </p>
        </div>

        <div>
            <button>
                Follow
            </button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button>
                Start Poll
            </button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <button>
                Donate
            </button>
        </div>

        <div style={{bottom:'40px', position: 'absolute'}}>
            <h2>
                Feed
            </h2>
            <ul className='feed'>
                {items.map((item, i) => <li className = 'tweet' key={i}>{item}</li>)}
            </ul>     
        </div>
    </main>
    )
}