import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component')
      },

      {
        path: 'producto',
       loadComponent: () =>
  import('./productos-component/productos-component')
    .then(m => m.ProductosComponent)

      },

      {
        path: 'color',
        loadComponent: () => import('./color/color.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {}
