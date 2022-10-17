//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API

//API Key: slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC

//https://api.nasa.gov/planetary/apod?api_key=slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC

document.querySelector('button').addEventListener('click', getMedia)

const date = document.querySelector('input').value

function getMedia(date){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=slVhcN8Sw5NNWnJlfnwdNrZGwUJJpuWprKTJV9lC`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      console.log('hello')

        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}