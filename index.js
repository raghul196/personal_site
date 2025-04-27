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

const skillStatsButton = document.getElementById("skillStatsButton");
const skillStats = document.getElementById("skillStats");

skillStatsButton.addEventListener('click', function(){
    if (skillStats.style.display == 'none'){
        skillStats.style.display = 'block';
    }
    else{
        skillStats.style.display = 'none';
    }
    
});

function syncHeights() {
const first = document.getElementById("skillsGrid");
const second = document.getElementById("skillStats");
const dragOver = document.getElementById("skillDragOver")
const radarGraph = document.getElementById("skillRadar")

// Reset secondDiv's height in case it was already set
second.style.height = "auto";

// Match the height of the firstDiv
const firstHeight = first.offsetHeight;
second.style.height = `${firstHeight}px`;
dragOver.style.height = `${firstHeight *0.25}px`;
radarGraph.style.height = `${firstHeight *0.6}px`;
}

// Run on page load
window.addEventListener('load', syncHeights);

// Optional: run on resize too, in case layout changes
window.addEventListener('resize', syncHeights);

const icons = document.querySelectorAll('#skillsGrid img, #skillsGrid div[draggable="true"]');
const dropZone = document.getElementById('skillDragOver');
var dropZoneIcons;
let draggedIcon = null;

let defaultTextRemoved = false;
let droppedIconIds = new Set();

// When you start dragging an icon
icons.forEach(icon => {
icon.addEventListener('dragstart', (event) => {
    draggedIcon = event.target; // Store the icon that's being dragged
});
});

// When something is dragged over the drop zone
dropZone.addEventListener('dragover', (event) => {
event.preventDefault(); // This is important to allow dropping!
// You can add some visual feedback here, like changing the border color
});

// When you drop something onto the drop zone
dropZone.addEventListener('drop', (event) => {
event.preventDefault(); // Prevent default browser behavior
if (draggedIcon) {
    console.log(draggedIcon.id , ' dropped into the dropzone'); 

    // Check if the icon has already been dropped
    if (droppedIconIds.has(draggedIcon.id)) {
        console.log('Icon already dropped:', draggedIcon.id);
        return; // Don't drop it again
    }

    // Remove the default text only once
    if (!defaultTextRemoved) {
        dropZone.innerHTML = ''; // Remove the text
        defaultTextRemoved = true;  // Set the flag
    }          
    
    if (draggedIcon){
        if (draggedIcon.tagName =='IMG'){
            // Create a new image element to display the dropped icon
            const droppedImage = document.createElement('img');
            droppedImage.src = draggedIcon.src;
            droppedImage.classList.add(
                'w-14',       // width: 3.5rem (roughly 56px, close to 50px)
                'h-14',       // height: 3.5rem (roughly 56px, close to 50px)
                'rounded-full', // borderRadius: 50%
                'bg-white',     // backgroundColor: white
                'p-1',         // padding: 0.25rem (roughly 4px, close to 5px)
                'm-1',         // margin: 0.25rem (roughly 4px, close to 5px)
                'object-contain' // objectFit: contain
            );
            droppedImage.id = 'dropped-' + draggedIcon.id; // Add a unique ID
            dropZone.appendChild(droppedImage);
        
        }
        else if (draggedIcon.tagName =='DIV'){
            const droppedDiv = document.createElement('div');
            droppedDiv.textContent = draggedIcon.textContent;
            droppedDiv.classList.add('p-2' ,'text-center' , 'text-black','bg-white', 'items-center','rounded-md')
            droppedDiv.id = 'dropped-' + draggedIcon.id;
            droppedDiv.draggable = "true";
            dropZone.appendChild(droppedDiv)
        }
    }
        
    // Store the ID of the dropped icon
    droppedIconIds.add(draggedIcon.id);
    updateRadarChart();
    

    
    draggedIcon = null; // Reset draggedIcon
    bindDropZoneIconListeners();
    
}
});



function bindDropZoneIconListeners() {
    const dropZoneIcons = document.querySelectorAll('#skillDragOver img, #skillDragOver div[draggable="true"]');
    let draggedDropZoneIcon = null;
    dropZoneIcons.forEach(icon => {
        icon.setAttribute('draggable', true); // drag behavior
        icon.addEventListener('dragstart', (event) => {
            draggedDropZoneIcon = event.target;
        });
        
        dropZone.addEventListener('dragleave', (event) => {
            // 1. Get the element that is being dragged
            if(draggedDropZoneIcon){
                const draggedElement = document.getElementById(draggedDropZoneIcon.id);

                // 3. Remove the icon from the DOM
                if (draggedElement){
                    draggedElement.remove();
                };

                // 4. Remove the icon's ID from the Set
                
                droppedIconIds.delete(draggedDropZoneIcon.id.split("-")[1]);
                console.log(draggedDropZoneIcon.id.split("-")[1] + ' dragged out of dropzone')
                updateRadarChart();
                draggedDropZoneIcon = null; // Reset draggedIcon
            };
            
        });
    });        
};

// Radar Chart
let radarChart ;

function updateRadarChart(){
    const ctx = document.getElementById('radarChart').getContext('2d');
    const droppedIconIdsArr = Array.from(droppedIconIds);
    const droppedIconScores = droppedIconIdsArr.map(droppedIconId => {
        const iconData = tooltipData[droppedIconId];
        return iconData ? iconData.score : null;
        });
    
    if (radarChart) {
        radarChart.destroy(); 
    }
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: droppedIconIdsArr, 
            datasets: [
                {
                    label: "Raghul's Skills", 
                    data: Array.from(droppedIconScores), 
                    backgroundColor: 'rgba(0, 123, 255, 0.4)',   // Soft Blue
                    borderColor: 'rgba(0, 123, 255, 1)',          // Solid Blue border
                    borderWidth: 2 
                },
                {
                    label: "Expected Skill", 
                    data: Array(droppedIconIdsArr.length).fill(5), 
                    backgroundColor: 'rgba(255, 193, 7, 0.4)',    // Warm Yellow
                    borderColor: 'rgba(255, 193, 7, 1)',          // Solid Yellow border
                    borderWidth: 2 
                }
            ]
        },

        options: {
            scales: {
                r: {
                    beginAtZero: true, // Start the scale from zero
                    grid: {
                        color: 'rgba(220, 220, 220, 0.8)' // Light gray grid lines
                    },
                    pointLabels: {
                        font: {
                            size: 14, // Increased font size
                        },
                        color: '#ffffff' // White label color
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'  // Color of the legend
                    }
                }
            }

        }
    });
};


// icon tool tip data with description and score
const tooltipData = {
    english: {
        name: "English",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9.5
    },
    german: {
        name: "German",
        description: "ML library for classical algorithms.",
        score: 9
    },
    tamil: {
        name: "Tamil",
        description: "ML library for classical algorithms.",
        score: 7
    },
    spanish: {
        name: "Spanish",
        description: "ML library for classical algorithms.",
        score: 7
    },
    python: {
        name: "Python",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9.5
    },
    vba: {
        name: "Excel - VBA",
        description: "ML library for classical algorithms.",
        score: 9
    },
    php: {
        name: "PHP",
        description: "ML library for classical algorithms.",
        score: 7
    },
    js: {
        name: "Javascript",
        description: "ML library for classical algorithms.",
        score: 7
    },
    scikit: {
        name: "Scikit-learn",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9
    },
    pytorch: {
        name: "Pytorch",
        description: "ML library for classical algorithms.",
        score: 9
    },
    tensorflow: {
        name: "Tensorflow",
        description: "ML library for classical algorithms.",
        score: 7
    },
    keras: {
        name: "Keras",
        description: "ML library for classical algorithms.",
        score: 7
    },
    sql: {
        name: "SQL",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9
    },
    aws: {
        name: "AWS",
        description: "ML library for classical algorithms.",
        score: 7
    },
    snowflake: {
        name: "Snowflake",
        description: "ML library for classical algorithms.",
        score: 7
    },
    docker: {
        name: "Docker",
        description: "ML library for classical algorithms.",
        score: 8
    },
    transformer: {
        name: "Transformers",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9
    },
    nn: {
        name: "Neural Networks",
        description: "ML library for classical algorithms.",
        score: 9
    },
    xgboost: {
        name: "XG - Boost",
        description: "ML library for classical algorithms.",
        score: 9
    },
    lstm: {
        name: "LSTM",
        description: "ML library for classical algorithms.",
        score: 9
    },
    sap: {
        name: "SAP",
        description: "ML library for classical algorithms.",
        score: 8
    },
    git: {
        name: "Git",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9
    },
    html: {
        name: "HTML 5",
        description: "ML library for classical algorithms.",
        score: 9
    },
    css: {
        name: "CSS 3",
        description: "ML library for classical algorithms.",
        score: 9
    },
    flask: {
        name: "Flask",
        description: "ML library for classical algorithms.",
        score: 9
    },
    django: {
        name: "Django",
        description: "ML library for classical algorithms.",
        score: 7
    },
    langchain: {
        name: "Langchain",
        description: "ML library for classical algorithms.",
        score: 8
    },
    ollama: {
        name: "Ollama",
        description: "ML library for classical algorithms. ML library for classical algorithms.",
        score: 9
    },
    langflow: {
        name: "Langflow",
        description: "ML library for classical algorithms.",
        score: 9
    },
    n8n: {
        name: "n8n",
        description: "ML library for classical algorithms.",
        score: 9
    },
    linux: {
        name: "Linux",
        description: "ML library for classical algorithms.",
        score: 9
    },
    raspberrypi: {
        name: "Raspberrypi",
        description: "ML library for classical algorithms.",
        score: 7
    },
    powershell: {
        name: "Powershell",
        description: "ML library for classical algorithms.",
        score: 9
    },
    arduino: {
        name: "Arduino",
        description: "ML library for classical algorithms.",
        score: 7
    },
    // more icons...
};



Object.entries(tooltipData).forEach(([id,{name, description, score}]) => {
    const hoveredIcon = document.getElementById(id);
    const tooltip = document.getElementById(`tooltip-${id}`);
    if (hoveredIcon){
        hoveredIcon.addEventListener("mouseenter", () => {
            //console.log('Mouse entered' + `tooltip-${id}`);
            tooltip.innerHTML = `
                <div class = "w-48 flex relative flex-col bg-gray-300 rounded-lg shadow-lg border border-gray-400 px-2 py-2">
                    <div class="font-semibold py-2 text-black text-center">${name}</div>
                    <div class="w-full bg-gray-200 text-black rounded-full h-4">
                        <div class="bg-blue-500 h-4 rounded-full" style="width: ${score * 10}%;"></div>
                    </div>
                    <div class="text-xs text-center text-black mt-1">${score}/10</div>
                    <div class="text-xs py-2 text-gray-800 break-words whitespace-normal"><p>${description}</p></div>
                </div>
                `;
        });
        hoveredIcon.addEventListener("mouseleave", () => {
            //console.log('Mouse exited'+`tooltip-${id}`);
            tooltip.innerHTML = ` `;
        });
    }

});


document.addEventListener('DOMContentLoaded', function () {
    const imageIcons = document.querySelectorAll('#skillsGrid img');
    const staticPath = "static/icon_images/";

    imageIcons.forEach(imageIcon => {
        if (!imageIcon.getAttribute('src')) {
            imageIcon.src = staticPath + imageIcon.id + "_icon.svg";
        }
        imageIcon.classList.add(
            'w-16',
            'h-16',
            'rounded-lg',
            'bg-white',
            'hover:scale-110',
            'transition-transform',
            'shadow-md'
        );
    });
});

const closeSkillStats = document.getElementById('closeSkillStats');

closeSkillStats.addEventListener('click', function(){
    skillStats.style.display = 'none';
});

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

const maximizeStatsButton = document.getElementById('maximizeStatsButton');
maximizeStatsButton.addEventListener('click', ()=>{
    const droppedIconIdsArr = Array.from(droppedIconIds);
    const params = new URLSearchParams();
    params.set("droppedIconIds", JSON.stringify(droppedIconIdsArr));
    window.location.href = `skills.html?${params.toString()}`;

});

const skillRadar = document.getElementById('skillRadar');
const skillRadarTooltip = document.getElementById('skillRadarTooltip');

skillRadar.addEventListener('mousemove', (e) => {
    console.log('mouse in radarGraph');
    const rect = skillRadar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    maximizeStatsButton.style.background = 'green';
    skillRadarTooltip.style.left = `${x + 10}px`;
    skillRadarTooltip.style.top = `${y + 10}px`;
    skillRadarTooltip.style.display = 'block';
});

skillRadar.addEventListener('mouseleave', () => {
    maximizeStatsButton.style.background = 'white'
    skillRadarTooltip.style.display = 'none';
});



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
    })




document.addEventListener('DOMContentLoaded', () => {
    const dtContainer = document.getElementById("dt-container");

    if (dtContainer) {
        dtContainer.addEventListener('click', () => {
            console.log('DT-clicked');
        });
    } else {
        console.error('dt-container not found!');
    }
});