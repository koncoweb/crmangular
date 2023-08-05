import { Component, OnInit } from '@angular/core';
import { CustomersType } from '../models/northwind/customers';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks';
import { RevenueType } from '../models/e-commerce/revenue';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppDataService } from '../services/crmapp-data.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public eCommerceRevenue!: RevenueType[];
  public northwindCustomers!: CustomersType[];
  public cRMAppDataMeetingsTasks!: MeetingsTasksType[];

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppDataService: CRMAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
    this.cRMAppDataService.getMeetingsTasks().subscribe(data => this.cRMAppDataMeetingsTasks = data);
  }
}
