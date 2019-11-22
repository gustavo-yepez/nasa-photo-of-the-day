import React, {useState, useEffect} from 'react';
import Photocard from './Photocard';
import axios from 'axios';

export default function NasaList() {
    const [pod, setPod] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=ZwUKBPgwpfcXn99ZDah8BaLHsdzDA4djyPxwApVp&date=2012-03-14')
        .then(response => {
            console.log(response.data)
            setPod(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div className='container'>
            <Photocard title={pod.title} url={pod.url} date={pod.date} explanation={pod.explanation} />
        </div>
    );
}