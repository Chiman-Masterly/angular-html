import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component'; 
import { AboutComponent } from '../../components/about/about.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceComponent } from '../../components/service/service.component';
import { ProgramsComponent } from '../../components/programs/programs.component';
import { EventsComponent } from '../../components/events/events.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { TeamComponent } from '../../components/team/team.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, ServiceComponent,ProgramsComponent,EventsComponent,BlogComponent,TeamComponent,TestimonialComponent,FooterComponent],
 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
