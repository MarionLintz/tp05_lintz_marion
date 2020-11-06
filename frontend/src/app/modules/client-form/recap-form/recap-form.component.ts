import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/shared/models/client';

@Component({
  selector: 'app-recap-form',
  templateUrl: './recap-form.component.html',
  styleUrls: ['./recap-form.component.scss']
})
export class RecapFormComponent implements OnInit {
  public client:Client = {} as Client;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.client = params as Client;
    });
  }

}
