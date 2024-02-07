import BackButton from '../back-button'
import { useState, useEffect } from 'react';
import './index.css'
function LandingPage() {
    const [data, setData] = useState({})
    const [loading,isLoading] = useState(true)
    const fetchData = async () => {
        const res = await fetch('http://localhost:3000/terms')
        const data = await res.json()
        setData(data[0])
        isLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <h1>Terms</h1>
        <BackButton />
        <div className='card'>
            {isLoading && 'loading terms ...' }
            {data && data?.terms}
        </div>
        <div className='footer'>
            <BackButton />
        </div>
    </>)
}

export default LandingPage