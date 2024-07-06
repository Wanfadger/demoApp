import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
 tabs:{icon:string ,iconColor?:string , title:string}[] = [
  {icon:"person" , title:"Dati Personali"},
  {icon:"settings" , title:"Impostazioni"},
  {icon:"domain" , title:"Profilo Aziendale'"},
  {icon:"verified" ,iconColor:"text-[#6C920C]", title:"Certificato KYC"},
  {icon:"verified" ,  title:"Certificato KYB"},
 ]
}
