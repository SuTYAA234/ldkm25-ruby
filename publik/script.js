function runPython() {
    const runBtn = document.getElementById('runBtn');
    const outputDiv = document.getElementById('colabOutput');
    const inputField = document.getElementById('pythonInput');
    const finalResult = document.getElementById('finalResult');

   
    runBtn.innerHTML = '<div class="spinning"></div>'; 
    
   
    outputDiv.style.display = 'none';
    finalResult.innerHTML = '';
    inputField.value = '';
    inputField.disabled = false;

    
    setTimeout(() => {
        
        outputDiv.style.display = 'flex';
        
       
        runBtn.innerHTML = '<i class="ri-play-fill"></i>';
        
        
        inputField.focus();
    }, 800);

    
    inputField.onkeydown = function(event) {
        if (event.key === "Enter") {
            const nama = inputField.value;
            
        

            
            inputField.disabled = true;
            inputField.style.borderColor = "transparent";
            inputField.style.background = "transparent";
            inputField.style.paddingLeft = "0";

          
            finalResult.innerHTML = `Halo, ${nama}! Selamat belajar Python.`;
        }
    };
}

document.addEventListener("DOMContentLoaded", () => {
    
    const modal = document.getElementById("modalTeam");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalNim = document.getElementById("modalNim");
    
    
    const btnIg = document.getElementById("btnIg");
    const btnWa = document.getElementById("btnWa");
    const closeBtn = document.querySelector(".close-btn");
    const teamCards = document.querySelectorAll(".card");

    
    teamCards.forEach((card) => {
        card.addEventListener("click", function () {
           
            const imgElement = this.querySelector("img");
            const nameElement = this.querySelector("h4");
            const nimElement = this.querySelector("p");

            const linkIg = this.getAttribute("data-ig");
            const linkWa = this.getAttribute("data-wa");

            
            if (imgElement) modalImg.src = imgElement.src;
            if (nameElement) modalName.innerText = nameElement.innerText;
            if (nimElement) modalNim.innerText = nimElement.innerText;

          
            if (btnIg) btnIg.href = linkIg ? linkIg : "#";
            if (btnWa) btnWa.href = linkWa ? linkWa : "#";

            
            modal.style.display = "flex";
        });
    });

   
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});