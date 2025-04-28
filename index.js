

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
                // sessionStorage.setItem('introPlayed', 'true');
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





// ############################## About Me ####################################################

// About Video 
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
// typed Text

const words = ["Data Scientist", "Data Analyst", "AI Engineer", "ML Developer", "Energy Model Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  const typingSpeed = 150;
  const erasingSpeed = 10;
  const newWordDelay = 2000; // delay between words

  const dynamicText = document.getElementById("dynamic-text");

  function type() {
    if (charIndex < words[wordIndex].length) {
      dynamicText.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
      setTimeout(type, typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (words.length) setTimeout(type, newWordDelay);
  });


// Time Lines
const educationData = [
    { title: "M.Sc. - Energy Science and Engineering", time: "2021 - 2024" , 
        inst: "TU Darmstadt",   place:"Darmstadt, Germany",
        info :["Modelling of Energy Systems", "Energy Geration and Storage systems","Life Cycle Analysis and Circular Economy",
            "Energy Markets and Environmental Regulation", "Energy Project Management"
         ]},
    { title: "M.Sc. - Environmental Engineering", time: "2023 - 2024" , 
        inst: "(Erasmus) UPM Madrid",   place:"Madrid, Spain",
        info :["Risk Assesment" 
        ]},
    { title: "B.Sc. - Electrical Engineering", time: "2018 - 2019" , 
        inst:"TH Bingen", place :"Bingen, Germany",
        info :["Power Electronics and Components" ]
    },
    { title: "B.Tech. - Electrical and Electronics Engineering", inst: "2014 - 2017" , 
        inst:"SRM University", place : "Chennai, India",
        info :["Fundamentals of Electric Motors and Transformers", "Electrical Circuits and Components",
            "Digital Signal Processing", "Statistics"

         ]
    },
  ];

const experienceData = [
{ title: "Information Manager", time: "2023- present" , 
    inst: "Mainzer Verkehr Gesellschaft mbH.", place:"Mainz, Germany",
    info :["Analysed data trends to support strategic decision-making.", 
        "Designed and implemented automated workflows.",
        "Managed technical integration for multiple projects launches."
        ]
},
{ title: "Working Student", time: "2021 - 2023", 
    inst: "Mainzer Verkehr Gesellschaft mbH.", place:"Mainz, Germany" ,
    info :["Analysed data trends", 
        "Assisted in Fleet maintenance"
        ]
},
];

function createTimeline(containerId, data, color) {
const container = document.getElementById(containerId);

data.forEach((item, index) => {
    const entry = document.createElement('div');
    const metaData = document.createElement('div');
    const detData = document.createElement('div');

    entry.className = `relative flex items-center`;

    let infoList = '';
    item.info.forEach(infoItem => {
        infoList += `<li>${infoItem}</li>`;
    });

    metaData.className = 'w-1/2 pr-8 text-right fade-slide-left';
    metaData.innerHTML = `<!-- Time on left -->
        <p class="text-md text-white">${item.time}</p>
        <p class="text-md text-${color}-300">${item.inst}</p>
        <p class="text-md text-white">${item.place}</p>`;

    detData.className = `w-1/2 pl-8 fade-slide-right`;
    detData.innerHTML = `<!-- Text on right -->
        <h3 class="text-lg font-semibold text-${color}-300">${item.title}</h3>
        <ul class="list-disc list-inside text-lg leading-relaxed pl-4">${infoList}</ul>`;

    entry.appendChild(metaData);

    const dot = document.createElement('div');
    dot.className = `relative z-10`;
    dot.innerHTML = `
    <div class="w-4 h-4 bg-${color}-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
    `;
    entry.appendChild(dot);

    entry.appendChild(detData);

    container.appendChild(entry);

    // Add scroll-trigger animation
    observeVisibility(metaData);
    observeVisibility(detData);

    // Function to handle adding classes for animation
    function observeVisibility(element) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            else {
                entry.target.classList.remove('visible');}
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
        }
});
}


// Render timelines
createTimeline("education-timeline", educationData, "blue");
createTimeline("experience-timeline", experienceData, "blue");

// ############################### End of About ME ##########################################################




// ###################################### Projects ##############################################################

const projects = [
    {
      id: "dt-container",
      title: "Deutsche Telekom CO 2030",
      imgSrc: "static/projects_images/dt_1.jpg",
      layout: "image-left",
      details: {
        Aim: "Saving Energy Cost",
        Description: "Created a digital twin for the electricity system of Telecommunication Nodes spread throughout Germany. With the help of the digital twin, optimal values of PV and BESS installations were devised to maximize cost savings.",
        Outcome: "Around <b>15%</b> cost saving can be realized by installing optimal PV and batteries.",
        "Applied Skills": "Python, Energy Market, Energy Modelling, SQL"
      }
    },
    {
      id: "ihack-container",
      title: "Transport Hub of Future",
      imgSrc: "static/projects_images/ihack.png",
      layout: "image-right",
      details: {
        Aim: "Business model for future Transport Hub",
        Description: "Conceived a version of futuristic Transport Hub and devised a business model.",
        Outcome: "Won <b>First</b> Place",
        "Applied Skills": "Business Model Canvas, Team work, Brainstorming"
      }
    },
    {
      id: "sap_automation-container",
      title: "Workflow Automation",
      imgSrc: "static/projects_images/sap_automation_3.png",
      layout: "image-left",
      details: {
        Aim: "Automated Workflows and Processes",
        Description: "Consulting with Co-workers on time-consuming tasks and recommend a custom automation workflow, to ease their tasks. The major part is in identifying the problem as a problem.",
        Outcome: "Ease of workflow and lower manual errors.",
        "Applied Skills": "Python, VBA, SAP, PHP"
      }
    },
    {
      id: "iep-container",
      title: "Global Energy Model",
      imgSrc: "static/projects_images/iep.png",
      layout: "image-right",
      details: {
        Aim: "Analyse and Evaluate Decarbonisation Scenarios",
        Description: "Digital representation of global energy system was modelled and plausible paths for decarbonisation were evaluated.",
        Outcome: "Carbon Price based and Regulation based Scenarios were analysed.",
        "Applied Skills": "ESDP compact (modelling Tool), Energy Modelling, Energy Reports (IEA, IRENA)"
      }
    },
    {
      id: "tess-container",
      title: "Energy Storage Technology",
      imgSrc: "static/projects_images/tess_2.png",
      layout: "image-left",
      details: {
        Aim: "Designing of Energy Storage Solution",
        Description: "Devised a Thermal Energy Storage Technology for a Commercial Building to store ice. Modeled the storage cycle to find optimal size and rating of Storage.",
        Outcome: "Storage Solution with a payback time of <b>12</b> years",
        "Applied Skills": "Python, VBA"
      }
    }
  ];

const projectsContainer = document.getElementById('projects-container');

projects.forEach((project, index)=> {
  const isImageLeft = project.layout === "image-left";
  const gridCols = isImageLeft ? "grid-cols-[39%_2%_59%]" : "grid-cols-[59%_2%_39%]";
    // alternate slide direction
  const slideClass = index % 2 === 0 ? 'project-slide-left' : 'project-slide-right';
  const projectDiv = document.createElement('div');
  projectDiv.id = project.id;
  projectDiv.className = `mx-auto max-w-5xl p-4 bg-gray-700 rounded-lg hover:scale-105 transition ${slideClass}`;

  projectDiv.innerHTML = `
    <h2 class="text-3xl font-semibold mb-4 text-center mx-auto">${project.title}</h2>
    <div class="mx-auto grid ${gridCols}">
      ${isImageLeft ? `
        <div>
          <img src="${project.imgSrc}" class="w-full rounded-lg">
        </div>
        <div></div>
        <div class="grid grid-cols-[80px_1fr] gap-4 p-4">
          ${Object.entries(project.details).map(([key, value]) => `
            <div class="font-semibold text-blue-300 text-left">${key}</div>
            <div class="text-left">${value}</div>
          `).join('')}
        </div>
      ` : `
        <div class="grid grid-cols-[80px_1fr] gap-4 p-4">
          ${Object.entries(project.details).map(([key, value]) => `
            <div class="font-semibold text-blue-300 text-left">${key}</div>
            <div class="text-left">${value}</div>
          `).join('')}
        </div>
        <div></div>
        <div>
          <img src="${project.imgSrc}" class="w-full rounded-lg">
        </div>
      `}
    </div>
  `;
  
  function observeVisibility(element) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('project-visible');
        }
        else {
            entry.target.classList.remove('project-visible');}
        });
    }, { threshold: 0.1 });
    
    observer.observe(element);
    }
  observeVisibility(projectDiv);  
  projectsContainer.appendChild(projectDiv);

});




//##################################### End of Projects #######################################################




// ###################################### Skills ##############################################################
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


    
//##################################### End of Skills #######################################################






// ###################################### Contact ##############################################################
  
window.onload = function() { // This means "run this code when the page finishes loading"
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    };
    
//##################################### End of Contact #######################################################