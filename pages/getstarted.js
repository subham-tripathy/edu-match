import Link from 'next/link'
import React, { useEffect } from 'react'
import NavBar from './Components/NavBar'






const subjectsList = [
    'Python', 'C', 'Java', 'Mysql'
];

const getstarted = () => {
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
        const emuser = getCookie('emuser');
        if (emuser) {
            alert('You already logged in !')
            window.location.href = '/'
        }
        else {

            const teacherBTN = document.querySelector('#teacherBTN')
            const studentBTN = document.querySelector('#studentBTN')
            teacherBTN.addEventListener('click', () => {
                document.querySelector('#teacherFORM').classList.remove('hidden')
                document.querySelector('#studentFORM').classList.add('hidden')
            })
            studentBTN.addEventListener('click', () => {
                document.querySelector('#studentFORM').classList.remove('hidden')
                document.querySelector('#teacherFORM').classList.add('hidden')
            })



            const teacherFormSubmit = document.querySelector('#teacherFormSubmit')
            teacherFormSubmit.addEventListener('click', (e) => {
                e.preventDefault()
                if (document.querySelector('#teacherName').value === '') {
                    alert('Teacher Name Cannot Be Empty')
                }
                else if (document.querySelector('#teacherId').value === '') {
                    alert('Teacher Id Cannot Be Empty')
                }
                else if (document.querySelector('#teacherPassword').value === '') {
                    alert('Password Cannot Be Empty')
                }
                else {

                    if (document.querySelector('#teacherPassword').value === document.querySelector('#teacherCpassword').value) {

                        let url = '/api/signup?name=' + document.querySelector('#teacherName').value + '&id=' + document.querySelector('#teacherId').value + '&password=' + document.querySelector('#teacherPassword').value + '&type=teacher'

                        let subCount = 1
                        const selectArr = document.querySelectorAll('#chooseSubjects select')
                        for (const key in selectArr) {
                            if (Object.hasOwnProperty.call(selectArr, key)) {
                                const element = selectArr[key];
                                url += '&sub' + (subCount++) + '=' + element.value
                            }
                        }


                        fetch(url, { method: 'POST' })
                            .then(res => res.json()).then((data) => {
                                if (data.msg === 'signup success') {
                                    alert('Successfully Sign Up')
                                    document.cookie = "emuser=" + document.querySelector('#teacherId').value + "; expires=7; path=/; secure";
                                    window.location.href = '/'
                                }
                                else if (data.msg === 'user exists') {
                                    alert('User Already Exists, Please Login !')
                                    window.location.href = '/login'
                                }
                            })
                    }
                }
            })




            const studentFormSubmit = document.querySelector('#studentFormSubmit')
            studentFormSubmit.addEventListener('click', (e) => {
                e.preventDefault()

                if (document.querySelector('#studentName').value === '') {
                    alert('Student Name Cannot Be Empty')
                }
                else if (document.querySelector('#studentId').value === '') {
                    alert('Student Id Cannot Be Empty')
                }
                else if (document.querySelector('#studentPassword').value === '') {
                    alert('Password Cannot Be Empty')
                }
                else {
                    if (document.querySelector('#studentPassword').value === document.querySelector('#studentCpassword').value) {
                        let url = '/api/signup?name=' + document.querySelector('#studentName').value + '&id=' + document.querySelector('#studentId').value + '&password=' + document.querySelector('#studentPassword').value + '&type=student'
                        fetch(url, { method: 'POST' })
                            .then(res => res.json()).then((data) => {
                                if (data.msg === 'signup success') {
                                    alert('Successfully Sign Up')
                                    document.cookie = "emuser=" + document.querySelector('#studentId').value + "; expires=7; path=/; secure";
                                    window.location.href = '/'
                                }
                                else if (data.msg === 'user exists') {
                                    alert('User Already Exists, Please Login !')
                                    window.location.href = '/login'
                                }
                            })
                    }
                }
            })







            const addNewSubject = document.querySelector('#addNewSubject')

            let subNo = 1
            const select = document.createElement('select')
            select.name = 'subject' + subNo

            const opt = document.createElement('option')
            opt.value = ''
            opt.textContent = 'Select Subject ' + subNo
            opt.hidden = true

            select.appendChild(opt)

            subjectsList.forEach((e) => {
                const opt = document.createElement('option')
                opt.textContent = e
                opt.value = e
                select.appendChild(opt)
            })

            document.querySelector('#chooseSubjects').appendChild(select)

            addNewSubject.addEventListener('click', (elem) => {
                let addSub = true;
                elem.preventDefault()
                const allSelect = (document.querySelectorAll('#chooseSubjects select'))
                allSelect.forEach((x) => {
                    if (x.value === '') {
                        addSub = false
                    }
                })
                if (addSub) {
                    subNo += 1;
                    const select = document.createElement('select')
                    select.name = 'subject' + subNo

                    const opt = document.createElement('option')
                    opt.value = ''
                    opt.textContent = 'Select Subjecct ' + subNo
                    opt.hidden = true

                    select.appendChild(opt)

                    subjectsList.forEach((e) => {
                        const opt = document.createElement('option')
                        opt.textContent = e
                        opt.value = e
                        select.appendChild(opt)
                    })
                    document.querySelector('#chooseSubjects').appendChild(select)
                }
                else {
                    alert('Subject ' + subNo + ' is not selected !')
                }
            })
        }
    })


















    return (
        <>
            <NavBar />
            <h1 className='text-white text-shadow font-bold text-3xl md:text-4xl text-center'>Lets Start By Creating Your Account</h1>
            <div className='mt-10'>
                <h1 className='text-xl font-bold text-white text-center text-shadow'>Select Your Role:</h1>
                <br />
                <div className='flex gap-10 justify-center'>
                    <button className='bg-blue-400 rounded-lg border-2 border-white px-5 py-2 text-2xl font-bold text-white text-shadow' id='teacherBTN'>Teacher</button>
                    <button className='bg-blue-400 rounded-lg border-2 border-white px-5 py-2 text-2xl font-bold text-white text-shadow' id='studentBTN'>Student</button>
                </div>
            </div>



            <section className='hidden' id='teacherFORM'>
                <div className='p-10'>
                    <form className='flex flex-col items-center w-[95%] md:w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-slate-400 gap-5 p-10 py-20'>
                        <h1 className='text-2xl md:text-5xl text-white font-bold text-shadow mb-5'>Teacher's Sign Up</h1>
                        <input id='teacherName' type="text" name='name' placeholder='Enter Name' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='teacherId' type="text" name='id' placeholder='Enter User Id' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='teacherPassword' type="password" name='password' placeholder='Enter Password' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='teacherCpassword' type="password" name='cpassword' placeholder='Confirm Password' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <label>Choose your Subjects/Topics</label>
                        <div id="chooseSubjects" className='flex flex-col'>
                        </div>
                        <button id="addNewSubject">Add New Subject</button>
                        <Link href={'/login'} className='font-semibold hover:bg-yellow-400 px-3 py-1 rounded'>Have an Account?</Link>
                        <button type="submit" id="teacherFormSubmit" className='shadow shadow-black text-base md:text-lg bg-blue-400 px-4 py-1.5 rounded-md font-bold hover:bg-blue-500'>Sign Up</button>
                    </form>
                </div>
            </section>


            <section className='hidden' id='studentFORM'>
                <div className='p-10'>
                    <form className='flex flex-col items-center w-[95%] md:w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-slate-400 gap-5 p-10 py-20'>
                        <h1 className='text-2xl md:text-5xl text-white font-bold text-shadow mb-5'>Student's Sign Up</h1>
                        <input id='studentName' type="text" name='name' placeholder='Enter Name' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='studentId' type="text" name='id' placeholder='Enter User Id' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='studentPassword' type="password" name='password' placeholder='Enter Password' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <input id='studentCpassword' type="password" name='cpassword' placeholder='Confirm Password' className='shadow shadow-black border-2 w-[90%] md:w-80 p-2 pl-3' />
                        <Link href={'/login'} className='font-semibold'>Have an Account?</Link>
                        <button type="submit" id="studentFormSubmit" className='shadow shadow-black text-base md:text-lg bg-blue-400 px-4 py-1.5 rounded-md font-bold hover:bg-blue-500'>Sign Up</button>
                    </form>
                </div>
            </section>

        </>
    )
}

export default getstarted