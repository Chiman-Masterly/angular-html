import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us Page'
    },
    {
        path: 'service',
        component: ServiceComponent,
        title: 'About Us Page'
    },
    {
        path: 'program',
        component: ProgramsComponent,
        title: 'About Us Page'
    },
    {
        path: 'event',
        component: EventsComponent,
        title: 'About Us Page'
    },
    {
        path: '', title: 'Admin Page', children: [
            { path: 'blog', component: BlogComponent,  title: 'Blog' },
            { path: 'team', component: TeamComponent,  title: 'Team' },
            { path: 'testimonial;', component: TestimonialComponent, title: 'Testimonial' }
        ]
    },

];
