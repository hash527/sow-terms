import BackButton from '../back-button'
import { useState, useEffect } from 'react';
import './index.css'
function LandingPage() {
    const [data, setData] = useState({})
    const [loading, isLoading] = useState(true)
    const url = import.meta.env.VITE_SERVER
    console.log(url,"url")
    const fetchData = async () => {
        const res = await fetch(url)
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
            {isLoading && 'loading terms ...'}
            {data && data?.terms}
        </div>
        <div className='footer'>
            <BackButton />
        </div>
    </>)
}

export default LandingPage