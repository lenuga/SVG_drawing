import { Component } from '@angular/core';
import { count } from 'console';

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
  //  r: any;
  //  cy: any[] =[];
  //  cx: any[] =[];
   positionArray: any[] = [];
  finalPosition: any[] = [];
  positionString= '';
  stringArray: any[]= [];

   constructor(){}


  addpoints(event: any){
   this.pointArrays.push(event.offsetX);
   this.pointArrays.push(event.offsetY);
  // console.log(this.pointArrays);

  }
  
   count(event: any){ return this.counter++; }

  findShape() {
   let shape = '';
  // let position = '';
   for (let i = 0; i < this.pointArrays.length; i++)
   {
     if (i === 0) {
         shape = 'M' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
        // position = this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
     }
     if (i > 1) {
         shape = shape + ' L' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
        // position = position + ' ' + this.pointArrays[i] + ' ' + this.pointArrays[i + 1];
         i++;
     }
     this.shapes = shape + ' Z';
    // this.positionString = position;
    }
  //this.finalShape.push(this.shapes);
 // console.log(this.finalShape);
   }

endDraw(event: any){
    this.draw = !this.draw;
    if(this.draw){
    this.finalShape.push(this.shapes);
    this.positionArray.push(this.positionString);
    console.warn(this.positionArray);
    this.pointArrays.length = 0;
    this.pointArrays.splice(0, this.pointArrays.length);
  }
}

mouseMove(event: any){

  //  console.log(event.offsetX, event.offsetY);
    let xyPoint = this.pointArrays.length;
    
    this.drawPoints = 'M' + this.pointArrays[xyPoint - 2] + ' ' + this.pointArrays[xyPoint - 1] + ' L' + event.offsetX + ' ' + event.offsetY;
    //console.log(this.drawPoints);
 
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
 console.log(this.stringArray);
 let filterd = this.stringArray.filter(function(el) {
return true;
 });
 console.log(filterd);
 }


getShapeId(event: any){
    console.log(event.target.id);
    this.delete(event.target.id);
    console.log(this.pointArrays[event.target.id - 1])
}
// positionChange(id: number){
//   this.finalPosition.(id, 1);
// }

delete(id: number) {
    console.log(this.finalShape);
    this.finalShape.splice(id, 1);
   // console.log(this.findShape);
    console.log('deleted');
} 

 } 

// let x;
// for(let j = 0; j < this.pointArrays.length; j++)
// {
  
// }

//  @ViewChild('connectorSVG', { static: false }) connectorSVG: ElementRef;
// resetPath(path: string) {
//   this.finalShape = path;
//   let rect = this.connectorSVG.nativeElement.getBBox();
//   this.finalShape.Height = rect.height;
//   this.finalShape.Width = rect.width;
//}



