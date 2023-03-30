const video = document.getElementById('my-video'); // replace with your video element

// request access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    // set the video element's source to the camera stream
    video.srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing camera:', error);
  });
