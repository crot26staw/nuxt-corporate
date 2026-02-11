import type { MenuItem } from './menu';

export interface Footer {
  menu: {
    column1: MenuItem[];
    column2: MenuItem[];
  };
  phone: string;
  email: string;
  address: string;
}
