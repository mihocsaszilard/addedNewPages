import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private renderer: Renderer2) { }


  onToggleColorTheme(event){
      console.log(event.detail.checked);
      if(event.detail.checked){
       // document.body.setAttribute('color-theme','dark');
       this.renderer.setAttribute(document.body, 'color-theme','dark')
      } else{
       // document.body.setAttribute('color-theme','light');
       this.renderer.setAttribute(document.body, 'color-theme','light')
      }
  }
  
 /* onToggle(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }
    else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('color-theme', 'dark');		
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }*/

  ngOnInit() {
  }

}
