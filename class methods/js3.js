class Changer{
    //constructor
    constructor(id){
        this.element=document.getElementById(id)
    }

    //getter
    get element(){
        return this.element
    }

    //setter 
    set newid(nid){
        this.element=document.getElementById(nid)
    }

    //member method
    changecolour(){
        this.element.style.color=document.getElementById("text").value
        console.log(this.element.style.color)
    }

    static method
    static changestate(btnid){
        document.getElementById(btnid).disabled=!(document.getElementById(btnid).disabled)
    }

}


document.getElementById('btn').addEventListener("click", function(){var ch = new Changer("one");
ch.changecolour()});
document.getElementById("btn3").onclick= ()=>{Changer.changestate("btn2")}

