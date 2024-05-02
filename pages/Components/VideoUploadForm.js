import React, { useEffect } from 'react';

const VideoUploadForm = () => {
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
    document.getElementById('submit').addEventListener('click', async () => {

      const video = document.querySelector('#video').files[0];
      const formData = new FormData();
      formData.append('video', video);

      await fetch("/api/upload?tid=" + getCookie('emuser'), {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(data => {
        if (data.msg === 'video uploaded successfully') {
          alert('Video uploaded successfully');
          window.location.reload();
        }
      })
    })
  }, [])

  return (
    <div className='dark:text-white font-bold dark:text-shadow flex justify-center items-center space-x-10'>
      <div className='my-20'>
        <label htmlFor='video' className='border-4 shadow-md shadow-black rounded-xl border-yellow-400 w-max px-7 py-10 text-xl cursor-pointer'>Upload A Video</label>
        <input type="file" name="video" id="video" className='invisible w-0' />
      </div>
      <button id='submit' className='bg-yellow-400 px-3 py-1 text-shadow rounded shadow shadow-black w-max h-max'>Upload</button>
    </div>
  );
};

export default VideoUploadForm;
