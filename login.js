function validateInputs() {
    const email = document.getElementById('Email').value;
    const firstName = document.getElementById('name1').value;
    const secondName = document.getElementById('name2').value;
    const getButton = document.getElementById('get');

    // Enable the button only if all fields are filled
    getButton.disabled = !(email && firstName && secondName);
}

document.getElementById('Email').addEventListener('input', validateInputs);
document.getElementById('name1').addEventListener('input', validateInputs);
document.getElementById('name2').addEventListener('input', validateInputs);

document.getElementById('get').addEventListener('click', function() {
    const email = document.getElementById('Email').value;
    const firstName = document.getElementById('name1').value;
    const secondName = document.getElementById('name2').value;

    // Retrieve existing user list or initialize an empty array
    let userInfoList = JSON.parse(localStorage.getItem('userInfoList')) || [];

    // Add new user info to the list
    userInfoList.push({ email, firstName, secondName });

    // Store the updated list in local storage
    localStorage.setItem('userInfoList', JSON.stringify(userInfoList));

    alert('Resume will be uploaded soon!!');

    // Redirect to Google Drive link
    window.location.href = '#';
});
document.getElementById("home").addEventListener("click", function() {
window.location.href = "index.html";
});
