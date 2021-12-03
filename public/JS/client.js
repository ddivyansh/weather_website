console.log("client side JS file loaded")

const url = '/weather?address='

//input
const search = document.querySelector('input')
const MessageOne = document.querySelector('.message-1')
const MessageTwo = document.querySelector('.message-2')
//form
const weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //to prevent form from refreshing
    const location = search.value
    if (!location) {
        //console.log("Please enter a location !")
        MessageOne.textContent = 'Please enter a location !'
    }
    //location is present
    else {
        const urlToFetch = url + location
        MessageOne.textContent = 'Loading....'
        //console.log(urlToFetch)
        fetch(urlToFetch).then((response) => {
            response.json().then((data) => {
                //in case of error
                if (data.errorMessage) {
                    //console.log(data.error)
                    MessageOne.textContent = ''
                    MessageTwo.textContent = data.errorMessage
                } else {
                    MessageOne.textContent = ''
                    MessageTwo.textContent = data.city + ', ' + data.country + '. ' + data.weather + ' throughout the day. It is currently ' + data.temperature + ' degrees out.'
                    console.log(data)
                }
            })
        })
    }
})