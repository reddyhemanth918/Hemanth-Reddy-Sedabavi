import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-click',
  templateUrl: './product-click.component.html',
  styleUrls: ['./product-click.component.css']
})
export class ProductClickComponent {
  id:any;
  product:any;
  details:any;
 constructor(private hs:ProductService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getproductsById(this.id).subscribe({
       next: (data:any)=> this.product=data,
       error: ()=> this.product = {}
    })

    this.hs.getdetails(this.id).subscribe({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })
 }

}
