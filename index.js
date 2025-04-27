// Manages Background Video timeout so that video fades smoothly as it ends
// and main content appers seamlessly as the video plays
// manages also that the video plays only once per session

function background_video(){
    const content = document.getElementById('main-content');
    const header = document.getElementById('header');
    const videoBackground = document.getElementById('background-video');
    const video = document.getElementById('video1');
    const introPlayed = sessionStorage.getItem('introPlayed');

    if (introPlayed){
        if(videoBackground){
            videoBackground.remove();
        }
        content.style.opacity = 1;
        header.style.opacity = 1;
    }

    else {// Show content after 1.65 seconds the video starts playing
        
        video.addEventListener("playing", () => {
            setTimeout(() => {
                content.style.opacity = 1;
                header.style.opacity = 1;
                sessionStorage.setItem('introPlayed', 'true');
            }, 1650);
        });


        video.addEventListener('play', () => {
            setTimeout(() => {
            video.style.opacity = '0';
            }, 10000); // 10 seconds
        });
    }
}

background_video();

function about_video(){
    const playButton = document.getElementById('play-button');
    const skipButton = document.getElementById('skip-button');
    const about_video = document.getElementById('about_video');
    const thumbnail = document.getElementById('video-thumbnail');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const progressBar = document.getElementById('progress-bar');
    const pausePlayButton = document.getElementById('pause-play-button');
    const pauseIcon = document.getElementById('pause-icon');
    const playIcon = document.getElementById('play-icon');

    function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }
    playButton.addEventListener('click', () => {
        playButton.classList.add('hidden');
        thumbnail.classList.add('hidden');
        about_video.currentTime = 0;
        about_video.classList.remove('hidden');
        skipButton.classList.remove('hidden');
        pausePlayButton.classList.remove('hidden');
        about_video.play();
        about_video.addEventListener('timeupdate', () => {
            currentTimeEl.textContent = formatTime(about_video.currentTime);
            const progressPercent = (about_video.currentTime / about_video.duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
        });
    });

    skipButton.addEventListener('click', () => {
        about_video.pause();
        about_video.currentTime = 0;
        about_video.classList.add('hidden');
        skipButton.classList.add('hidden');
        playButton.classList.remove('hidden');
        thumbnail.classList.remove('hidden');
        pausePlayButton.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
    });

    about_video.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(about_video.duration);
    });


    pausePlayButton.addEventListener('click', () => {
        if (about_video.paused) {
            about_video.play();
            pauseIcon.classList.remove('hidden');
            playIcon.classList.add('hidden');
        } else {
            about_video.pause();
            pauseIcon.classList.add('hidden');
            playIcon.classList.remove('hidden');
        }
    });

    about_video.addEventListener('ended', () => {
        about_video.currentTime = 0;
        about_video.classList.add('hidden');
        playButton.classList.remove('hidden');
        thumbnail.classList.remove('hidden');
        skipButton.classList.add('hidden');
        pausePlayButton.classList.add('hidden');
    });
}

about_video();


const projectsContainer = document.getElementById('projects-container');

fetch('projects.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load projects.html');
        }
        return response.text();
    })
    .then(data => {
        projectsContainer.innerHTML = data;

        const script = document.createElement('script');
        script.src = 'projects.js';
        script.defer = true; // optional
        document.body.appendChild(script);
    })

const skillsContainer = document.getElementById('skills-container');


fetch('skills.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load skills.html');
        }
        return response.text();
    })
    .then(data => {
        skillsContainer.innerHTML = data;

        // Now load skills.js dynamically
        const script = document.createElement('script');
        script.src = 'skills.js';
        script.defer = true; // optional
        document.body.appendChild(script);
    })



const academicBackgroundButton = document.getElementById('academicBackgroundButton');
const workExperienceButton = document.getElementById('workExperienceButton');
const educationSection = document.getElementById('educationSection');
const experienceSection = document.getElementById('experienceSection');

academicBackgroundButton.addEventListener('click', function() {
    if (educationSection.style.display === 'none') {
        experienceSection.style.display = 'none';
        educationSection.style.display = 'block'; // Show the section
    } else {
        educationSection.style.display = 'none'; // Hide the section
    }
});

workExperienceButton.addEventListener('click', function() {
    if (experienceSection.style.display === 'none') {
        educationSection.style.display = 'none';
        experienceSection.style.display = 'block'; // Show the section
    } else {
        experienceSection.style.display = 'none'; // Hide the section
    }
});

const additionalText_education = document.getElementById("educationDetails");
const additionalText_experience = document.getElementById("experienceDetails");
const hoverMap_education = {
    srm: "info-srm",
    thb: "info-bingen",
    tud: "info-darmstadt"
};

Object.entries(hoverMap_education).forEach(([hoverId, infoId]) => {
    const hoverElement = document.getElementById(hoverId);
    const infoContent = document.getElementById(infoId).innerHTML;

    hoverElement.addEventListener("mouseenter", () => {
    additionalText_education.innerHTML = infoContent;
    });

});


const exitEducationButton = document.getElementById("exitEducationButton")

exitEducationButton.addEventListener('click', function(){
    educationSection.style.display = 'none';
    additionalText_education.innerHTML = document.getElementById("defaultEducationDetails").innerHTML;

});
const hoverMap_experience = {
    werkstudent : "info-werkstudent",
    infoManager : "info-infoManager"

}

Object.entries(hoverMap_experience).forEach(([hoverId, infoId]) => {
    const hoverElement = document.getElementById(hoverId);
    const infoContent = document.getElementById(infoId).innerHTML;

    hoverElement.addEventListener("mouseenter", () => {
    additionalText_experience.innerHTML = infoContent;
    });

});

const exitExperienceButton = document.getElementById("exitExperienceButton")

exitExperienceButton.addEventListener('click', function(){
    experienceSection.style.display = 'none';
    additionalText_experience.innerHTML = document.getElementById("defaultExperienceDetails").innerHTML;

});

window.onload = function() { // This means "run this code when the page finishes loading"
document.getElementById('name').value = '';
document.getElementById('email').value = '';
document.getElementById('message').value = '';
};


