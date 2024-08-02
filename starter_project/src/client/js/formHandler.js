const serverURL = 'http://localhost:8000/api'

function handleSubmit(event) {
    
    const polarity = document.getElementById('polarity');
    const agreement = document.getElementById('agreement');
    const subjectivity = document.getElementById('subjectivity');
    const confidence = document.getElementById('confidence');
    const irony = document.getElementById('irony');
    const text = document.getElementById('text');
    
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('in').value;

    // Check if the URL is valid
    if(Client.checkForUrl(formText)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        postData(serverURL, {url: formText})
        .then(function(res) {
            // Update the UI with the data received from the server
            polarity.innerHTML = `${res.score_tag}`;
            agreement.innerHTML = `${res.agreement}`;
            subjectivity.innerHTML = `${res.subjectivity}`;
            confidence.innerHTML = `${res.confidence}`;
            irony.innerHTML = `${res.irony}`;
            text.innerHTML = `${res.sentence_list[0].text}`;
      });
    }

    else {
        alert("URL is not valid");
    }
}

// Function to send data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
// Export the handleSubmit function
export { handleSubmit };

