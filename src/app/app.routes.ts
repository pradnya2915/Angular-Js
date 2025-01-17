import { Routes } from '@angular/router';
import { ArrayBindingComponent } from './array-binding/array-binding.component';
import { BindingComponent } from './binding/binding.component';
import { InstituteComponent } from './institute/institute.component';
import { DataBindlingComponent } from './data-bindling/data-bindling.component';
import { CompanyComponent } from './company/company.component';
import { TemplateFormComponent } from './template-form/template-form.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservablesComponent } from './observables/observables.component';
import { TableFormatComponent } from './table-format/table-format.component';
import { StatementComponent } from './statement/statement.component';

export const routes: Routes = [
    {
        path: "array-binding",
        component: ArrayBindingComponent
    },
    {
        path: "template-form",
        component: TemplateFormComponent
    },
    {
        path: "binding",
        component: BindingComponent
    },
    {
        path: "institute",
        component: InstituteComponent
    },
    {
        path: "data-binding",
        component: DataBindlingComponent
    },
    {
        path: "company",
        component: CompanyComponent
    },
    {
        path: "reactive-form",
        component: ReactiveFormComponent
    },
    {
        path: "observables",
        component: ObservablesComponent
    },
    {
        path: "table-format",
        component: TableFormatComponent
    },
    {
        path: "statement",
        component: StatementComponent
    }

];
