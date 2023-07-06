class car
                {
                    constructor(model,mark,type,year){

                    
                    this.model= model;
                    this.mark = mark;
                    this.type = type;
                    this.year = year;}
                    age(){
                        const date = new Date();
                        return date.getFullYear()-this.year; 
                    }

                    }
                       //first objects
                    const vxc90 = new car ('xc90', 2022, 'volvo','suv');
                      //second object
                    const BMW3 = new car('series', 2022, 'BMW','Sedan');
                      //third objects
                    const gmy = new car ('yukun', 2022, 'gmg','suv');
                      //fourth objects 
                    const ms3 = new car('s350', 2022, 'mercedes','sedan');
                    console.log(`my ${vxc90.model} is ${vxc90.age}. years old`)
                    console.log(vxc90.model);
                    console.log(vxc90.mark);
                    console.log(vxc90.type);
                    console.log(vxc90.year);
                    

                    console.log(BMW3.model);
                    console.log(BMW3.mark);
                    console.log(BMW3.type);
                    console.log(BMW3.year);

                    console.log(gmy.model);
                    console.log(gmy.mark);
                    console.log(gmy.type);
                    console.log(gmy.year);

                    console.log(ms3.model);
                    console.log(ms3.mark);
                    console.log(ms3.type);
                    console.log(ms3.year);
