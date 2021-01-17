import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { MetaComponent } from '../../meta/meta.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'habito',         component: TablesComponent },
    { path: 'meta',           component: MetaComponent },
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
];
