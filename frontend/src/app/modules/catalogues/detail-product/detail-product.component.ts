import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data-service/data.service';
import { AddProduct } from 'src/shared/actions/product.action';
import { DetailProduct } from 'src/shared/models/detail-product';
import { Product } from 'src/shared/models/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {

  id: number = -1;
  detailedProduct: Observable<DetailProduct>;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.detailedProduct = this.dataService.GetDetails(this.id);
  }

  addProductToBasket(){
    this.dataService.GetProductFromId(this.id).subscribe((product: Product) => {
      this.store.dispatch(new AddProduct(product));
    });
  }
}
