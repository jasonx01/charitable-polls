// Cap image taken from Madison N, Tote from VivianRosalee, Plushie from WISHPETS

import Coin from '../images/coin.png'
import Plushie from '../images/plushie.jpg'
import Tote from '../images/bluetote.jpg'
import Cap from '../images/cap.jpg'

export default function Raffles() {
    return (
    <>
        <div className='topbar'>
            <p style={{marginLeft:'25px', color:'orange'}} className='gg-crowdfire'>
                <div style={{marginLeft:'22px'}}>1</div>
            </p>
            <p style={{marginLeft:'100px', color:'yellow'}}>
                <img src={Coin}></img>
                10
            </p>
        </div>
        <h1 style={{marginTop:'55px', fontSize:'25px'}}>Raffles</h1>
        <div style={{marginTop:'10px', fontSize:'20px'}}>
            Blue Iguana Guardians
        </div>
        <div className='rafflecontainer'>
            <img src={Plushie}></img>
            <img src={Tote}></img>
            <img src={Cap}></img>
        </div>
    </>
    )
}
