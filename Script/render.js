
export class Render{
    constructor(container) {
        this.container = document.getElementById("revel-container");
    }

    playScreen = function(container) {
        //display play screen
        // Clear previous content
        this.container.innerHTML = '';
        // Add new content
        this.container.innerHTML = `<h3>Welcome to Revel</h3>`;
        this.container.innerHTML += `<button >Completed</button>`;
        this.container.innerHTML += `<button id="forfit">Forfit</button>`;
        
        return this.container.innerHTML;
    }

    forfitScreen = function() {
        // Add new content
        this.container.innerHTML = `<h3>Player has forfeited</h3>`;
        this.container.innerHTML += `<button >Back to Game</button>`;
        return this.container.innerHTML;
    }
}