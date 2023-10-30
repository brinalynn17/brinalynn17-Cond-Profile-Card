document.addEventListener('DOMContentLoaded', function () {
    // Function to get the value of an input element or return an empty string
    function getInputValue(input) {
        return input ? input.value : '';
    }
    // Handle social media links
    const socialLinks = {
        facebook: 'Facebook',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
        twitter: 'Twitter',
        github: 'GitHub'
    };

    // Add event listeners to each social media icon
    for (const name in socialLinks) {
        const platform = socialLinks[name];
        const inputElement = document.getElementById(platform);
        const iconElement = document.querySelector(`.fa-${platform.toLowerCase()}`);
        if (inputElement && iconElement) {
            iconElement.parentElement.addEventListener('click', function (e) {
                e.preventDefault();
                let link = inputElement.value;
                if (link) {
                    if(!link.startsWith('http://') && !link.startsWith('https://')){
                        link = 'https://' + link;
                    }
                    window.open(link, '_blank');
                }
        });
    }
}

//Variables
    const includeCoverInput = document.getElementById("includeCover");
    const coverImage = document.querySelector('.image-top'); // Add cover image
    const fNameInput = document.getElementById("fName");
    const lNameInput = document.getElementById("lName");
    const fullNameElement = document.querySelector('.fullname');
    const positionIconsInput = document.getElementById("positionIcons");
    const socialIconsList = document.querySelector('.social-icons');
    const roleInput = document.getElementById("role");
    const roleElement = document.querySelector('.job');
    const cityInput = document.getElementById("city");
    const countryInput = document.getElementById("country");
    const locationElement = document.querySelector('.location');
    
    // Update cover image based on the 'includeCover' selection
    includeCoverInput.addEventListener("change", function() {
        const selectedValue = includeCoverInput.value;
      
        if (selectedValue === "true") {
          // If "Yes" is selected, set the image source to the desired image
          coverImage.src = "img/Cash4Life.jpg"; // Update the image source
          coverImage.style.display = "block"; // Display the image
        } else if (selectedValue === "false") {
          // If "No" is selected, hide the image
          coverImage.style.display = "none"; // Hide the image
        }
    }); 
    // Update profile card with First Name and Last Name 
    fNameInput.addEventListener("input", function() {
        fullNameElement.textContent = `${fNameInput.value} ${lNameInput.value}`; 
    }); 
    lNameInput.addEventListener("input", function() { 
        fullNameElement.textContent = `${fNameInput.value} ${lNameInput.value}`;
    }); 
    // Handle the position change for social icons
    positionIconsInput.addEventListener("change", function () {
        const selectedPosition = positionIconsInput.value;
        socialIconsList.classList.toggle('move-icons-left', selectedPosition === "left");
    });
    // Handle the role selection
    roleInput.addEventListener("change", function () {
        const selectedRole = roleInput.value;
        roleElement.textContent = selectedRole;
    });
    // Handle the City selection
    cityInput.addEventListener("change", function () {
        const selectedCity = cityInput.value;
        updateLocation(selectedCity, countryInput.value);
    });

    // Handle the Country selection
    countryInput.addEventListener("change", function () {
        const selectedCountry = countryInput.value;
        updateLocation(cityInput.value, selectedCountry);
    });
    
    function updateLocation(city, country) {
        locationElement.textContent = `${city}, ${country}`;
    }

});