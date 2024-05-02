import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'

const rating = () => {
    useEffect(() => {
        function getCookie(name) {
            const cookieString = document.cookie;
            const cookies = cookieString.split(";").map(cookie => cookie.trim());
            for (const cookie of cookies) {
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }
        const params = new URLSearchParams(window.location.search)
        const targetId = params.get('targetId')
        fetch('/api/fetchProfile?id=' + targetId).then(res => res.json()).then(data => {
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    document.querySelector("#tname").textContent = element.name
                    document.querySelector("#tid").textContent = element.uid
                }
            }
        })

        fetch('/api/fetchrating?tid=' + targetId).then(res => res.json()).then(data => {
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    const opt = document.createElement('option')
                    opt.textContent = element.subject
                    opt.value = element.subject
                    document.querySelector('#rateSub').appendChild(opt)
                }
            }
        })
        document.getElementById('submitBTN').addEventListener('click', () => {
            const id = document.getElementById('tid').textContent
            const sub = document.getElementById('rateSub').value
            const rating = document.querySelector('input[name="rating"]:checked').value;
            fetch('/api/rating?tid=' + id + '&uid=' + getCookie('emuser') + '&sub=' + sub + '&rating=' + rating).then(res => res.json()).then(data => {
                if(data.msg === 'rated successfully'){
                    alert('Successfully Rated')
                }
            })
        })
    }, [])
    return (
        <div>
            <NavBar />
            <h1 className='text-4xl text-white text-shadow font-bold text-center'>TEACHER RATING PAGE</h1>
            <div className='bg-blue-500 text-center text-2xl font-bold text-white text-shadow w-max mx-auto mt-10 px-20 py-10 rounded-lg border-2 border-white shadow-lg shadow-black space-y-7'>
                <h2>Teacher Name: <span id="tname"></span></h2>
                <h2>Teacher Id: <span id="tid"></span></h2>
                <select name="rateSub" id="rateSub" className='text-black'>
                    <option value="" hidden>Select Subject</option>
                </select>
                <div className='flex space-x-5'>
                    <span><input type="radio" name="rating" id="1" value="1" /><label htmlFor="1">1⭐</label></span>
                    <span><input type="radio" name="rating" id="2" value="2" /><label htmlFor="2">2⭐</label></span>
                    <span><input type="radio" name="rating" id="3" value="3" /><label htmlFor="3">3⭐</label></span>
                    <span><input type="radio" name="rating" id="4" value="4" /><label htmlFor="4">4⭐</label></span>
                    <span><input type="radio" name="rating" id="5" value="5" /><label htmlFor="5">5⭐</label></span>
                </div>
                <button id='submitBTN' className='bg-yellow-500 px-3 py-1 rounded text-white text-shadow shadow shadow-black text-lg'>Submit Rating</button>
            </div>
        </div>
    )
}

export default rating