class CardComponent extends HTMLElement{
    connectedCallback(){
        this.render();
    }
    
    render(){
        let label = this.getAttribute('label');
        this.innerHTML = `${label}`;
    }
}

customElements.define("card-component",CardComponent);