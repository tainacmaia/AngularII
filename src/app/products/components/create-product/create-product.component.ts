import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/users/models/user.model';
import { ProductCategory } from '../../models/product-category.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public form!: FormGroup;
  public product!: User;
  public productId!: string;
  public categories!: ProductCategory[];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.buildForm();
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.updateForm();
    }
  }

  private getCategories(): void {
    this.categories = this.productsService.getCategories();
  }

  private updateForm(): void {
    const product = this.productsService.getProductById(this.productId);
    this.form.patchValue(product);
  }

  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [ Validators.required ]),
      categoryId: new FormControl(null, [ Validators.required ]),
      price: new FormControl(null, [ Validators.required ]),
      quantity: new FormControl(null, [ Validators.required ]),
    })
  }

  public onSubmit(): void {
    const product = this.form.getRawValue();
    this.productsService.saveProduct(product);
    this.form.reset();
    this.router.navigate(['/products']);
  }
}
