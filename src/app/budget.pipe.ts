import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget',
  standalone: true
})
export class BudgetPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(budget: string): string {
    if (!budget) return '';

    // Assuming budget is given in million, else adjust the logic accordingly
    if (budget.includes('-')) {
      const [min, max] = budget.split('-');
      return `$${min}-${max} million`;
    } else {
      return `$${budget} million`;
    }
  }

}
