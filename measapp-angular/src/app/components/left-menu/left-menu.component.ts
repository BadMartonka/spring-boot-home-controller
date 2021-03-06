import { Component, OnInit } from '@angular/core';
import { SidenavService } from "../../services/sidenav.service";
import { animateText, onSideNavChange } from "../../animations/animations";


interface Page {
  link: string;
  name: string;
  icon: string;
}


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
  animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {


  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    {name: 'Inbox', link:'some-link', icon: 'inbox'},
    {name: 'Starred', link:'some-link', icon: 'star'},
    {name: 'Send email', link:'some-link', icon: 'send'},
  ]

  constructor(private _sidenavService: SidenavService) { }

  ngOnInit() {
  }

  onSinenavToggle() {
    console.log('Togleeeed'),
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this._sidenavService.sideNavState$.next(this.sideNavState)

}
}
