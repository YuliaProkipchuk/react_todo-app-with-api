import classNames from 'classnames';
import { Filters } from '../types/Filters';

type Props = {
  link: string;
  isActive: boolean;
  name: string;
  value: Filters;
  onChangeFilter: (newFilter: Filters) => void;
};
function FilterButton({ link, isActive, name, value, onChangeFilter }: Props) {
  return (
    <a
      href={link}
      className={classNames('filter__link', {
        selected: isActive,
      })}
      data-cy={name}
      onClick={() => onChangeFilter(value)}
    >
      {value}
    </a>
  );
}

export default FilterButton;
