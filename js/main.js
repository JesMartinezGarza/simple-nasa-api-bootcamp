//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API

//API Key: slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC

//NASA's Pictur of the Day url: https://api.nasa.gov/planetary/apod?api_key=slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC

document.querySelector('button').addEventListener('click', getMedia)


function getMedia(){

    let day = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC&date=${day}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.media_type)


        if(data.media_type === 'image'){
            document.querySelector('img').src = data.url
            document.getElementById('videoURL').innerText = ""
            document.querySelector('h2').innerText = data.title
            document.querySelector('h4').innerText = data.explanation
            
        }else if(data.media_type !== 'image'){
            document.querySelector('img').src = ""
            document.getElementById('videoURL').innerText = "Video URL: " + data.url
            document.getElementById('videoLink').href = data.url
            document.querySelector('h2').innerText = data.title
            document.querySelector('h4').innerText = data.explanation    
        }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}