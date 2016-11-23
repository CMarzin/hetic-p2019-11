export class appLoader {
    constructor() {
        window.loadState = "initJs";
        this.loadState = window.loadState;
        this.container = document.querySelector('.loader');
        this.display = document.querySelector('.loader--state');
        return this;
    }



    changeState(state) {
        window.loadState = state;
        if(state === "end"){
            //return document.querySelector('.loader').className += "hide";
            return  document.querySelector('.loader').className = "loader hide";
          }

        if (this.display)
            this.display.innerHTML = state;
        else
            document.querySelector('.loader--state').innerHTML = state
    }
}