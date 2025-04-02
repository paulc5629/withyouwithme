
export class Render{
    constructor(container) {
        this.container = document.getElementById("revel-container");
    }

    playScreen = function(container) {
        //display play screen
        // Clear previous content
        this.container.innerHTML = '';
        // Add new content
        this.container.innerHTML = `<h1>Welcome to Revel</h1>`;
        this.container.innerHTML += `<button type="button">Completed</button>`;
        return this.container.innerHTML += `<button type="button">Forfit</button>`;
    }
}