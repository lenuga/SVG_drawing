import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'SVG-path';
   pointArrays: any[] = [];
   finalShape = [];
   shapes = '';
   draw = false;
   counter = 0;
   drawPoints: any;
   circleX: any;
   circleY: any;
   x: any;
   y: any;
   positionArray: any[] = [];
   finalPosition: any[] = [];
   positionString= '';
   stringArray: any[]= [];
   mouseupX: any;
   mouseupY: any;
   mousedownX: any;
   mousedownY: any;
   X: any;
   Y: any;
   mouseMoveX: any;
   mouseMoveY: any;

   constructor(){}


  addpoints(event: any){
    if(this.draw){
   this.pointArrays.push(event.offsetX);
   this.pointArrays.push(event.offsetY);
   this.x = event.offsetX;
   this.y = event.offsetY;
    }
  // console.log(this.pointArrays);

  }
  
   count(event: any){ return this.counter++; }

  findShape() {
   let shape;
   let position = '';
   for (let i = 0; i < this.pointArrays.length; i++)
   {
     if (i === 0) {
         shape = 'M' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
         //position = this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
     }
     if (i > 1) {
         shape = shape + ' L' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
        // position = position + ' ' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
         i++;
     }
     this.shapes = shape + ' Z';
     //this.positionString = position;
    }
  //this.finalShape.push(this.shapes);
  // console.log(this.finalShape);

   }

endDraw(event: any){
    this.draw = !this.draw;
   //if(this.draw){
    this.finalShape.push(this.shapes);
    this.positionArray.push(this.positionString);
    console.warn(this.positionArray);
    this.pointArrays.length = 0;
    this.pointArrays.splice(0, this.pointArrays.length);
 // }
}

 click(event: any)
 {
   //console.log(event.target.attributes.d.value);
   let str = event.target.attributes.d.value;
   for(let j = 0; j < str.length; j++){
     str = str.replace('M', '');
     str = str.replace('L', '');
     str = str.replace('Z', '');
   }
   //console.log(str);
 this.stringArray = str.split(" ");
 this.stringArray.pop();
 console.log(this.stringArray);
 let filterd = this.stringArray.filter(function(el) {
return true;
 });
 console.log(filterd);
 
 }

 mouseMove(event: any){
  //  console.log(event.offsetX, event.offsetY);
   // let xyPoint = this.pointArrays.length;
    if(this.draw){
     this.drawPoints = 'M' + this.x + ' ' + this.y + ' L' + event.offsetX + ' ' + event.offsetY;
    }
    //console.log(this.drawPoints);
   this.X = (this.mouseupX - this.mousedownX);
   this.Y = (this.mouseupY - this.mousedownY);
   console.log(this.X);
   console.log(this.Y);
   this.mouseMoveX = event.offsetX;
   this.mouseMoveY = event.offsetY;

   this.startDrag(this.el, this.mouseMoveX, this.mouseMoveY)
 }

private startDrag(selectedShape: SVGGraphicsElement, mx: number, my: number) {
const x = (mx - this.mousedownX);
const y = (my - this.mousedownY);
if (selectedShape) {
selectedShape.setAttribute('transform', `translate(${x}, ${y})`);
console.log(this.x);
console.log(this.y);
console.log(selectedShape);
}
}

el: any;
getShapeId(event: any){
    console.log(event.target.id);
    this.delete(event.target.id);
    console.log(this.pointArrays[event.target.id - 1]);
    this.el = document.getElementById(event.target.id);
    console.log(this.el);
}

delete(id: number) {
    console.log(this.finalShape);
    this.finalShape.splice(id, 1);
   // console.log(this.findShape);
    console.log('deleted');
} 

//Mouse up event 
mouseDrag(event: any){
  this.mouseupX = event.offsetX;
  this.mouseupY = event.offsetY;
  //console.log(this.mouseupX);
  //console.log(this.mouseupY);

}

//Mouse down event
mouseDown(event: any){
  this.mousedownX = event.offsetX;
  this.mousedownY = event.offsetY;
  // console.log(this.mousedownX);
  // console.log(this.mousedownY);

}
// translate(){
//  let a = this.X;
//  let b = this.Y;
// }

} 




