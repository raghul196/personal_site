
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

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const isImageLeft = project.layout === "image-left";
  const gridCols = isImageLeft ? "grid-cols-[39%_2%_59%]" : "grid-cols-[59%_2%_39%]";
  
  const projectDiv = document.createElement('div');
  projectDiv.id = project.id;
  projectDiv.className = "mx-auto max-w-5xl p-4 bg-gray-700 rounded-lg hover:scale-105 transition";

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

  container.appendChild(projectDiv);
});
  
