import { IconLayoutDashboard } from '@tabler/icons-react';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <nav>
      <MenuItem url="/home" texto="Início" icone={<IconLayoutDashboard />} />
    </nav>
  );
}
