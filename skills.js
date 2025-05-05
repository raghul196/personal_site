const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let screenSize;
if (screenWidth >= 1536) {
    screenSize = "2xl" ;
} 
else if (screenWidth >= 1280) {
    screenSize = "xl";
} 
else if (screenWidth >= 1024) {
    screenSize = "lg";
}
else if (screenWidth >= 768) {
    screenSize = "md";
}
else if (screenWidth >= 640) {
    screenSize = "sm";
}
else {
    screenSize = "not in Tailwind class";
}


console.log("Screen Size is " + screenSize);
const iconStaticPath = "static/icon_images/";
const iconIdSources= {
    english: {
        name: "English",
        description: "I am Bilingual in English, I have been speaking English alongside my Mother toungue.",
        score: 9,
        source: "div", 
        iconGroup : 'Languages'
    },
    german: {
        name: "German",
        description: "I am Fluent in German and been living in Germany for the past six years",
        score: 8,
        source: "div",
        iconGroup : 'Languages'
    },
    tamil: {
        name: "Tamil",
        description: "my Mother toungue, A south indian Language",
        score: 9,
        source: "div",
        iconGroup : 'Languages'
    },
    spanish: {
        name: "Spanish",
        description: "Very Basic level, learned during my stay in Spain.",
        score: 3,
        source: "div",
        iconGroup : 'Languages'
    },
    python: {
        name: "Python",
        description: "My goto Language of Programming Overall.",
        score: 9,
        source: iconStaticPath + "python_icon.svg",
        iconGroup : 'Programming Languages'
    },
    vba: {
        name: "Excel - VBA",
        description: "prefers VBA when doing simple calculation and Analysis with Excel Shees.",
        score: 9,
        source: "static/icon_images/vba_icon.jpg",
        iconGroup : 'Programming Languages'
    },
    php: {
        name: "PHP",
        description: "Learned at Mainzer Verkehr Gesellschaft mbH.",
        score: 6,
        source: iconStaticPath + "php_icon.svg",
        iconGroup : 'Programming Languages'
    },
    js: {
        name: "Javascript",
        description: "Knows Basics of Javascript to design user friendly Interaction with the backend",
        score: 5,
        source: iconStaticPath + "js_icon.svg",
        iconGroup : 'Programming Languages'
    },
    scikit: {
        name: "Scikit-learn",
        description: "Competent in Modelling with Scikit-Learn",
        score: 8,
        source: iconStaticPath + "scikit_icon.svg",
        iconGroup : 'ML & DL Libraries'
    },
    pytorch: {
        name: "Pytorch",
        description: "preferred ML Library over Tensorflow or Keras",
        score: 8,
        source: iconStaticPath + "pytorch_icon.svg",
        iconGroup : 'ML & DL Libraries'
    },
    tensorflow: {
        name: "Tensorflow",
        description: "Can Create Models using Tensorflow",
        score: 6,
        source: iconStaticPath + "tensorflow_icon.svg",
        iconGroup : 'ML & DL Libraries'
    },
    keras: {
        name: "Keras",
        description: "Can Create Models using Keras",
        score: 6,
        source: iconStaticPath + "keras_icon.svg",
        iconGroup : 'ML & DL Libraries'
    },
    sql: {
        name: "SQL",
        description: "Strong competence in Querying from Data Bank",
        score: 9,
        source: iconStaticPath + "sql_icon.svg",
        iconGroup : 'Data Management'

    },
    
    aws: {
        name: "AWS",
        description: "Have used EC2, dynamoDB instances",
        score: 5,
        source: iconStaticPath + "aws_icon.svg",
        iconGroup : 'Software & Services'
        
    },
    snowflake: {
        name: "Snowflake",
        description: "have used Data Warehouse in AWS",
        score: 5,
        source: "static/icon_images/snowflake_icon.png",
        iconGroup : 'Data Management'
    },
    docker: {
        name: "Docker",
        description: "Strong competence in compartmentalisation",
        score: 8,
        source: iconStaticPath + "docker_icon.svg",
        iconGroup : 'Software & Services'
    },
    transformer: {
        name: "Transformers",
        description: "strong knowledge in the Architecture of Transformer",
        score: 8,
        source: "div",
        iconGroup : 'ML Architecture & Algorithms'
    },
    nn: {
        name: "Neural Networks",
        description: "Strong competence in modelling both CNN and RNN",
        score: 8,
        source: "div",
        iconGroup : 'ML Architecture & Algorithms'
    },
    xgboost: {
        name: "XG - Boost",
        description: "Competence in Gradient Boosting Algorithms",
        score: 8,
        source: "div",
        iconGroup : 'ML Architecture & Algorithms'
    },
    lstm: {
        name: "LSTM",
        description: "Competent in Time Seires Analysis",
        score: 8,
        source: "div",
        iconGroup : 'ML Architecture & Algorithms'
    },
    sap: {
        name: "SAP",
        description: "Competent in execute scripts in SAP from python or VBA using OOPS",
        score: 8,
        source: "static/icon_images/sap_icon.png",
        iconGroup : 'Software & Services'
    },
    git: {
        name: "Git",
        description: "Competence in CI/CD Workflow",
        score: 8,
        source: iconStaticPath + "git_icon.svg",
        iconGroup : 'Software & Services'
    },
    html: {
        name: "HTML 5",
        description: "Have Basic understand of HTML components and structure",
        score: 4,
        source: iconStaticPath + "html_icon.svg",
        iconGroup : 'Web Development'
    },
    css: {
        name: "CSS 3",
        description: "Have Basic Understand of CSS components and its design",
        score: 4,
        source: iconStaticPath + "css_icon.svg",
        iconGroup : 'Web Development'
    },
    flask: {
        name: "Flask",
        description: "have created websites using flask",
        score: 5,
        source: iconStaticPath + "flask_icon.svg",
        iconGroup : 'Web Development'
    },
    django: {
        name: "Django",
        description: "have created websites using Django",
        score: 5,
        source: iconStaticPath + "django_icon.svg",
        iconGroup : 'Web Development'
    },
    langchain: {
        name: "Langchain",
        description: "Strong competence in creating RAG using langchain",
        score: 8,
        source: iconStaticPath + "langchain_icon.svg",
        iconGroup : 'AI-Agents & RAG'
    },
    ollama: {
        name: "Ollama",
        description: "Strong competence in local LLm models.",
        score: 8,
        source: iconStaticPath + "ollama_icon.svg",
        iconGroup : 'AI-Agents & RAG'
    },
    langflow: {
        name: "Langflow",
        description: "Have created AI-Agents using Langflow",
        score: 7,
        source: iconStaticPath + "langflow_icon.svg",
        iconGroup : 'AI-Agents & RAG'
    },
    n8n: {
        name: "n8n",
        description: "Have created AI-Agents using n8n",
        score: 7,
        source: iconStaticPath + "n8n_icon.svg",
        iconGroup : 'AI-Agents & RAG'
    },
    linux: {
        name: "Linux",
        description: "have Experince in Debian based distros",
        score: 8,
        source: iconStaticPath + "linux_icon.svg",
        iconGroup : 'Others'
    },
    raspberrypi: {
        name: "Raspberrypi",
        description: "Have Experience in setuping a raspberry pi for VPN and Network wide Ad-blocking",
        score: 7,
        source: iconStaticPath + "raspberrypi_icon.svg",
        iconGroup : 'Others'
    },
    powershell: {
        name: "Powershell",
        description: "Competent in Powershell and Terminal commands",
        score: 7,
        source: iconStaticPath + "powershell_icon.svg",
        iconGroup : 'Others'
    },
    arduino: {
        name: "Arduino",
        description: "Compentent in Arduino",
        score: 7,
        source: iconStaticPath + "arduino_icon.svg",
        iconGroup : 'Others'
    },    
};

const skillGrid = document.getElementById("skillGrid");
const skillDragOver = document.getElementById("skillDragOver");
const dropZone = document.getElementById("dropZone");
const dropZoneName = document.getElementById("dropZoneName");
const raghulScore = document.getElementById("raghulScore");
const expectedScore = document.getElementById("expectedScore")

const groupContainers = new Map();

// Populating Available Skills
Object.entries(iconIdSources).forEach(([id, { name, description, score, source, iconGroup }]) => {
// Create group container if it doesn't exist
if (!groupContainers.has(iconGroup)) {
const groupDiv = document.createElement("div");
groupDiv.classList.add("mb-6", "2xl:mb-6",
    "w-full"
);
groupDiv.dataset.group = iconGroup;

// Optional: Add a title
const groupTitle = document.createElement("h4");
groupTitle.textContent = iconGroup;
groupTitle.classList.add("text-lg", "font-semibold", "mb-2", "capitalize");
groupDiv.appendChild(groupTitle);

const iconsWrapper = document.createElement("div");
iconsWrapper.classList.add(
"flex",
"flex-wrap",
"grid-cols-[repeat(auto-fit,minmax(20px,1fr))]" ,
"gap-4",
"w-full"// Responsive grid with fixed icon size
);
groupDiv.appendChild(iconsWrapper);

groupContainers.set(iconGroup, { groupDiv, iconsWrapper });
}

// Create icon div
const iconDiv = document.createElement("div");
iconDiv.classList = "relative group w-[20%] ";

if (source === "div") {
const mainDiv = document.createElement("div");
const textDiv = document.createElement("div");

textDiv.textContent = name;
textDiv.classList.add(
"text-center", "whitespace-normal", "w-full", "h-full", "flex",
"items-center", "justify-center",'2xl:text-[12px]', 'xl:text-[12px]', 'lg:text-[10px]','font-sans'
);
textDiv.style.overflowWrap = 'break-word';
textDiv.style.wordBreak = 'break-word';

mainDiv.id = id;
mainDiv.draggable = true;
mainDiv.classList.add(
"w-full", "aspect-square", "rounded-lg", "bg-white", "text-black",
"hover:scale-110", "text-sm", "border-2", "border-gray-400",
"hover:bg-gray-100", "hover:border-gray-500", "group", "relative",
"transition-colors", "transition-transform", "shadow-md", "flex",
"items-center", "justify-center", "p-1", "text-center"
); 

mainDiv.appendChild(textDiv);
iconDiv.appendChild(mainDiv);
} else {
const img = document.createElement("img");
img.src = source;
img.id = id;
img.classList.add(
"w-full", "aspect-square", "rounded-lg", "bg-white", "hover:scale-110",
"transition-transform", "shadow-md", "border-2", "border-gray-400"
);
iconDiv.appendChild(img);
}

// iconDiv.innerHTML += `<span id="tooltip-${id}" class="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap pointer-events-none"></span>`;

groupContainers.get(iconGroup).iconsWrapper.appendChild(iconDiv);
});

// Append all groups to skillGrid
groupContainers.forEach(({ groupDiv }) => {
skillGrid.appendChild(groupDiv);
});




const params = new URLSearchParams(window.location.search);
let droppedIconIdsArr = JSON.parse(params.get("droppedIconIds"));

if (droppedIconIdsArr == null){
droppedIconIdsArr = [];
}


let radarChart ;


function addSkillsToDragOver(droppedIconId){
const source = iconIdSources[droppedIconId].source;
const name = iconIdSources[droppedIconId].name;
const score = iconIdSources[droppedIconId].score;      
const tableRow = document.createElement("tr");
tableRow.id = `${droppedIconId}Row`;
// === 1. Icon Cell ===
const iconCell = document.createElement("td");
if (source == "div"){
    const mainDiv = document.createElement("div");
    const textDiv = document.createElement("div");

    textDiv.textContent = name;
    textDiv.classList.add(
        'text-center',
        'whitespace-normal',
        'w-full',
        "aspect-square",
        'items-center',
        'justify-center',
        'flex',
        '2xl:text-[11px]', 'xl:text-[11px]', 'lg:text-[9px]'
        
        
    );
    textDiv.style.overflowWrap = 'break-word';
    textDiv.style.wordBreak = 'break-word';

    mainDiv.id = "dropped-" + droppedIconId;
    mainDiv.draggable = true;

    mainDiv.classList.add(
        'w-full',
        'aspect-square',
        'min-w-14',
        'max-w-18',
        'rounded-lg',
        'bg-white',
        'text-black',
        'hover:scale-110',
        'text-[12px]',
        'border-2',
        'border-gray-400',
        'hover:bg-gray-100',
        'hover:border-gray-500',
        'group',
        'relative',
        'transition-colors',
        'transition-transform',
        'shadow-md',
        'flex',           // Add this to enable flex layout
        'items-center',   // Vertical centering
        'justify-center', // Horizontal centering
        'p-1', 
        'text-center'
    );

    mainDiv.appendChild(textDiv);
    iconCell.appendChild(mainDiv);
    

    } 
    else{
        const img = document.createElement("img");
        img.src = source;
        img.id = "dropped-" + droppedIconId;
        img.classList.add(
            'max-w-18',
            'min-w-12',
            'aspect-square',       
            'rounded-full', 
            'bg-white',                   
            'object-contain',
            'shadow-md' , 
            'border-2',
            'border-gray-500',
            );
        iconCell.appendChild(img);
        
    }

    iconCell.classList.add("p-4", "2xl:p-4", "align-middle"); 

    // === 2. Input Cell ===
    const inputCell = document.createElement("td");
    const expectedScoreInput = document.createElement("input");
    expectedScoreInput.type = "number";
    expectedScoreInput.value = 5;
    expectedScoreInput.id = `${droppedIconId}ExpectedScore`;
    expectedScoreInput.classList.add(
        "border",
        "items-center",
        "justify-center",
        "h-8",
        "rounded",
        "px-2",
        "py-1",
        "w-16",
        "max-w-full",
        "text-black"
    );
    inputCell.appendChild(expectedScoreInput);

    // === 3. Name Cell ===
    const nameCell = document.createElement("td");
    const nameP = document.createElement("p");
    nameP.textContent = name;
    nameP.classList.add(
        "words-break",
        "flex",
        "items-center",
        "justify-center",
        "text-center"

    );
    nameCell.appendChild(nameP);

    iconCell.classList.add("p-4", "align-middle");
    nameCell.classList.add("p-2", "align-middle");
    inputCell.classList.add("p-2", "align-middle");
    // === Append cells to row ===
    tableRow.appendChild(iconCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(inputCell);
    

    // === Append row to table body ===
    skillGridTable.appendChild(tableRow);

};

droppedIconIdsArr?.length && droppedIconIdsArr.forEach(addSkillsToDragOver);


if (droppedIconIdsArr != null){
updateRadarChart();
bindExpectedScores();
}



function bindExpectedScores(){
const expectedScoreFields = document.querySelectorAll('#skillDragOver input');
expectedScoreFields.forEach(expectedScoreField => {
expectedScoreField.addEventListener('input', () => {
    updateRadarChart();
    });
});
}

function updateRadarChart(){
const droppedIconScores = [];
const droppedIconLabels = [];
const droppedIconExpectedScores = [];
droppedIconIdsArr.forEach(droppedIconId =>{
    const score = iconIdSources[droppedIconId].score;
    const label = iconIdSources[droppedIconId].name; 
    const expectedScore = document.getElementById(droppedIconId + 'ExpectedScore').value;         
    droppedIconScores.push(score);
    droppedIconLabels.push(label);
    droppedIconExpectedScores.push(expectedScore);

});
    if(document.getElementById('radarChart')){
    const ctx = document.getElementById('radarChart').getContext('2d');                     
    if (radarChart) {
        radarChart.destroy(); 
    }
    radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: droppedIconLabels,
        datasets: [
            {
                label: "Raghul's Proficiency",
                data: droppedIconScores,
                backgroundColor: 'rgba(0, 123, 255, 0.4)', // Soft Blue
                borderColor: 'rgba(0, 123, 255, 1)',        // Solid Blue border
                borderWidth: 2
            },
            {
                label: "Expected Proficiency",
                data: droppedIconExpectedScores,
                backgroundColor: 'rgba(255, 193, 7, 0.4)', // Warm Yellow
                borderColor: 'rgba(255, 193, 7, 1)',        // Solid Yellow border
                borderWidth: 2
            }
        ]
    },
    options: { // <-- moved here
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: { // r axis settings
                beginAtZero: true,
                grid: {
                    color: 'rgba(220, 220, 220, 0.8)' // Light gray grid lines
                },
                pointLabels: {
                    font: {
                        size: 14
                    },
                    color: '#ffffff'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16 // Increase legend label font size
                    },
                    color: '#ffffff' // Color of the legend
                }
            }
        }
    }
});

}
}

const icons = document.querySelectorAll('#skillGrid img, #skillGrid div[draggable="true"]');
var dropZoneIcons;
let draggedIcon = null;

let defaultTextRemoved = false;  

// When you start dragging an icon
icons.forEach(icon => {
icon.addEventListener('dragstart', (event) => {
    draggedIcon = event.target; // Store the icon that's being dragged
});
});

// When something is dragged over the drop zone
skillDragOver.addEventListener('dragover', (event) => {
event.preventDefault(); // This is important to allow dropping!
// You can add some visual feedback here, like changing the border color
});

// When you drop something onto the drop zone
skillDragOver.addEventListener('drop', (event) => {
event.preventDefault(); // Prevent default browser behavior
if (draggedIcon) {
    console.log(draggedIcon.id , ' dropped into the dropzone'); 

    // Check if the icon has already been dropped
    if (droppedIconIdsArr.includes(draggedIcon.id)) {
        console.log('Icon already dropped:', draggedIcon.id);
        return; // Don't drop it again
    }
    
    addSkillsToDragOver(draggedIcon.id);
        
    // Store the ID of the dropped icon
    droppedIconIdsArr.push(draggedIcon.id);
    updateRadarChart();
    bindExpectedScores();

    
    draggedIcon = null; // Reset draggedIcon
    bindDropZoneIconListeners();
    
}
});
bindDropZoneIconListeners();
function bindDropZoneIconListeners() {
const dropZoneIcons = document.querySelectorAll('#skillDragOver img, #skillDragOver div[draggable="true"]');
let draggedDropZoneIcon = null;
dropZoneIcons.forEach(icon => {
    icon.setAttribute('draggable', true); // drag behavior
    icon.addEventListener('dragstart', (event) => {
        draggedDropZoneIcon = event.target;
    });
    
    skillDragOver.addEventListener('dragleave', (event) => {
        // 1. Get the element that is being dragged
        if(draggedDropZoneIcon){
            const draggedElement = document.getElementById(`${draggedDropZoneIcon.id.split("-")[1]}Row`);
            const draggedElementName = document.getElementById(draggedDropZoneIcon.id.split("-")[1] + "-NameDiv");
            const draggedElementExpectedScore = document.getElementById(draggedDropZoneIcon.id.split("-")[1] + "-ExpectedScoreDiv");

            // 3. Remove the icon from the DOM
            if (draggedElement){
                draggedElement.remove();
            };

            // 4. Remove the icon's ID from the Set
            const droppedIconIndex = droppedIconIdsArr.indexOf(draggedDropZoneIcon.id.split("-")[1]);
            if (droppedIconIndex > -1) {
                droppedIconIdsArr.splice(droppedIconIndex, 1);
            }

            console.log(draggedDropZoneIcon.id.split("-")[1] + ' dragged out of dropzone')
            updateRadarChart();
            draggedDropZoneIcon = null; // Reset draggedIcon
        };
        
    });
});        
};

Object.entries(iconIdSources).forEach(([id, { name, description, score, source }]) => {
    const hoveredIcon = document.getElementById(id);
    const tooltipId = `tooltip-${id}`;

    if (hoveredIcon) {
        let tooltip = document.getElementById(tooltipId);
        if (!tooltip) {
            tooltip = document.createElement("span");
            tooltip.id = tooltipId;
            tooltip.className = "absolute z-50 pointer-events-none transition-opacity duration-200 opacity-0";
            hoveredIcon.parentElement.appendChild(tooltip);
        }

        hoveredIcon.addEventListener("mouseenter", () => {
            tooltip.innerHTML = `
                <div class="w-48 flex relative flex-col bg-gray-300 rounded-lg shadow-lg border border-gray-400 px-2 py-2">
                    <div class="font-semibold py-2 text-black text-center">${name}</div>
                    <div class="w-full bg-gray-200 text-black rounded-full h-4">
                        <div class="bg-blue-500 h-4 rounded-full" style="width: ${score * 10}%;"></div>
                    </div>
                    <div class="text-xs text-center text-black mt-1">${score}/10</div>
                    <div class="text-xs py-2 text-gray-800 break-words whitespace-normal">
                        <p>${description}</p>
                    </div>
                </div>
            `;

            // Reset tooltip styles
            tooltip.style.opacity = "1";
            requestAnimationFrame(()=>{tooltip.style.top = '';
                tooltip.style.bottom = '';
                tooltip.style.left = '';
                tooltip.style.right = '';
                tooltip.style.transform = '';

                // Smart positioning
                const iconRect = hoveredIcon.getBoundingClientRect();
                const gridRect = skillGrid.getBoundingClientRect();
                const tooltipRect = tooltip.firstElementChild.getBoundingClientRect();

                const spaceBelow = gridRect.bottom - iconRect.bottom;
                const spaceAbove = iconRect.top - gridRect.top;
                const spaceRight = gridRect.right - iconRect.right;
                const spaceLeft = iconRect.left - gridRect.left;
                
                // Try to show below
                if (spaceBelow >= tooltipRect.height && spaceLeft >= tooltipRect.width/2 && spaceRight >=tooltipRect.width/2) {             
                    tooltip.style.top = `${hoveredIcon.offsetHeight + 8}px`;
                    tooltip.style.left = "50%";
                    tooltip.style.transform = "translateX(-50%)";
                }
                // Else show above
                else if (spaceAbove >= tooltipRect.height && spaceBelow <= tooltipRect.height && spaceLeft >= tooltipRect.width/2 && spaceRight >=tooltipRect.width/2) {
                    tooltip.style.bottom = `${hoveredIcon.offsetHeight + 8}px`;
                    tooltip.style.left = "50%";
                    tooltip.style.transform = "translateX(-50%)";
                }
                // Else show right
                else if (spaceRight >= tooltipRect.width) {
                    tooltip.style.top = "50%";
                    tooltip.style.left = `${hoveredIcon.offsetWidth + 8}px`;
                    tooltip.style.transform = "translateY(-50%)";
                }
                // Else show left
                else if (spaceLeft >= tooltipRect.width) {
                    tooltip.style.top = "50%";
                    tooltip.style.right = `${hoveredIcon.offsetWidth + 8}px`;
                    tooltip.style.transform = "translateY(-50%)";
                } else {
                    // Default to below if all else fails
                    tooltip.style.top = `${hoveredIcon.offsetHeight + 8}px`;
                    tooltip.style.left = "50%";
                    tooltip.style.transform = "translateX(-50%)";
                }
            });
        });
        hoveredIcon.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
            tooltip.innerHTML = '';
        });
    }
});



function autoDropIcons() {
    const iconIdsToAutoDrop = ['python', 'pytorch', 'sql', 'english'];
    const skillDragOver = document.getElementById('skillDragOver');
    const skillDragOverRect = skillDragOver.getBoundingClientRect();
  
    let delay = 0;
  
    // Schedule the automatic "drag-out" after the loop finishes
    // setTimeout(() => {
    //   // For each dropped icon ID, remove associated DOM elements
    //   droppedIconIdsArr.forEach((id) => {
    //     const row = document.getElementById(`${id}Row`);
    //     const nameDiv = document.getElementById(`${id}-NameDiv`);
    //     const expectedScoreDiv = document.getElementById(`${id}-ExpectedScoreDiv`);
  
    //     if (row) row.remove();
    //     if (nameDiv) nameDiv.remove();
    //     if (expectedScoreDiv) expectedScoreDiv.remove();
  
    //     console.log(`${id} auto-dragged out of dropzone`);
    //   });
  
    //   // Clear the dropped icon list
    //   droppedIconIdsArr = [];
    //   updateRadarChart();
    // }, iconIdsToAutoDrop.length * 1200 + 1500); // After last icon drops + small buffer
    
  
    iconIdsToAutoDrop.forEach((id) => {
      const originalIcon = document.getElementById(id);
      if (!originalIcon) return;
  
      setTimeout(() => {
        const clone = originalIcon.cloneNode(true);
        clone.id = 'clonned-'+id;
        document.body.appendChild(clone);
  
        const iconRect = originalIcon.getBoundingClientRect();
        clone.style.position = 'absolute';
        clone.style.left = `${iconRect.left}px`;
        clone.style.top = `${iconRect.top}px`;
        clone.style.width = `${iconRect.width}px`;
        clone.style.height = `${iconRect.height}px`;
        clone.style.opacity = '0.5';
        // clone.style.transition = 'all 1s ease-in-out';
        console.log(clone);
        clone.style.pointerEvents = 'none';
        clone.classList.add('z-20');

        const targetX = skillDragOverRect.left ;
        const targetY = skillDragOverRect.top;
        
        clone.style.transform = `translate(${targetX}px, ${targetY}px)`;

  
        setTimeout(() => {
          if (!droppedIconIdsArr.includes(id)) {
            addSkillsToDragOver(id);
            droppedIconIdsArr.push(id);
            updateRadarChart();
            bindExpectedScores();
            bindDropZoneIconListeners();
          }
          clone.remove();
        }, 1000);
      }, delay);
  
      delay += 1200;
    });
  }
  
  window.addEventListener('load', () => {
    autoDropIcons();
  
    // setInterval(() => {
    //   autoDropIcons();
    // }, 8000);
  });
  
  
  

