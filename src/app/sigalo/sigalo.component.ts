import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-sigalo',
  templateUrl: './sigalo.component.html',
  styleUrls: ['./sigalo.component.scss']
})
export class SigaloComponent {
 images:string[] = ["gallo-hem.jpeg" , "marans.jpeg","gallo-hem.jpeg"  , "marans.jpeg"]
 selectedIndex = signal(0)
 selected = computed(() => this.images[this.selectedIndex()]) 

 select(index:number){
  this.selectedIndex.update(() => index)
 }

 selectNext(){
  this.selectedIndex.update((index) => {
    if(index === this.images.length-1){
     return 0; // go to start
    }

    return index + 1 
  })
 }

 selectPrev(){
  this.selectedIndex.update((index) => {
    if(index === 0){
      return this.images.length - 1// go to last
    }
    return index - 1
  })
 }

}
