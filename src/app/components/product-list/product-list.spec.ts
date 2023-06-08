import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';
import { CamelCasePipe } from 'src/pipes/camel-case.pipe';
import { Product } from 'src/models/product';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent, CamelCasePipe],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should show 2 products when 2 products are bound', () => {
    // Arrange
    component.products = [
      { name: '', price: 0, photo: '' },
      { name: '', price: 0, photo: '' },
    ];

    // Act
    fixture.detectChanges();

    // Assert
    expect(element.querySelectorAll('tbody tr').length).toBe(2);
  });

  it('should format the product name correctly', async () => {
    // Arrange
    component.products = [{ name: 'Witte thee', price: 0 }];

    // Act
    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    const tableCell = element.querySelector('tbody tr:first-child>td:nth-child(2)') as HTMLTableCellElement;
    expect(tableCell.innerText).toBe('witteThee');
  });

  describe('when deleting a product', () => {
    let firstRow: HTMLTableRowElement;
    let deleteButton: HTMLButtonElement;
    let products: Product[];

    beforeEach(async() => {
      // Arrange
      products = [
        {
          name: 'Witte thee',
          price: 2.99,
        },
      ];

      component.products = products;
      fixture.detectChanges();
      await fixture.whenStable();
      firstRow = document.querySelector('tbody>tr:first-child') as HTMLTableRowElement;
      deleteButton = firstRow.querySelector('button.delete-btn') as HTMLButtonElement;
    });

    it('should emit a "delete" event', async() => {
      let actual: Product | undefined;

      component.productDeleted.subscribe((deletedProduct: Product) => {
        actual = deletedProduct;
      });

      deleteButton.click();
      fixture.detectChanges();
      await fixture.whenStable();

      expect(actual).toBe(products[0]);
    });
  });
});