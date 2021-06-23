class Security {
   constructor(){
        this.access1 = createInput("Code1");
        this.access1.position(200,150);
        this.access1.style("height","20px");
        this.access1.style("width","180px");
        this.access1.style('font-size','15px');
        this.access1.style('background','white');  

        this.button1 = createButton('Check');
        this.button1.position(202,190);
        this.button1.style("height","24px");
        this.button1.style("width","80px");
        this.button1.style('font-size','15px');
        this.button1.style('background','lightgrey');    

        this.access2 = createInput("Code2");
        this.access2.position(1060,350);
        this.access2.style("height","20px");
        this.access2.style("width","180px");
        this.access2.style('font-size', '15px');
        this.access2.style('background','white');  

        this.button2 = createButton('Check');
        this.button2.position(1062,390);
        this.button2.style("height","24px");
        this.button2.style("width","80px");
        this.button2.style('font-size','15px');
        this.button2.style('background','lightgrey');

        //add code for creating and positioning the third input box and button
        this.access3 = createInput("Code3");
        this.access3.position(200,450);
        this.access3.style("height","20px");
        this.access3.style("width","180px");
        this.access3.style('font-size', '15px');
        this.access3.style('background','white');

        this.button3 = createButton('Check');
        this.button3.position(202,490);
        this.button3.style("height","24px");
        this.button3.style("width","80px");
        this.button3.style('font-size','15px');
        this.button3.style('background','lightgrey');

    }
   display(){
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
         })

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        //add code for what happens when the third button is pressed
        this.button3.mousePressed(() =>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.access3.hide();
                this.button3.hide();
                score++;
            }
         })
    }
}