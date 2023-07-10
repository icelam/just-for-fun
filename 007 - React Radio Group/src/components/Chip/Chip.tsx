import { FC } from 'react';

export interface ChipProps {
  label: string;
}

const Chip: FC<ChipProps> = ({ label }) => (
  <span className="chip">{label}</span>
);

export default Chip;
