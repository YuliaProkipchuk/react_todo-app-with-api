import { Filters } from '../types/Filters';
import FilterButton from './FilterButton';

type Props = {
  activeTodosNum: number;
  filter: Filters;
  allCompleted: boolean;
  onChangeFilter: (newFilter: Filters) => void;
  onClearTodos: () => Promise<void>;
};
function Footer({
  activeTodosNum,
  allCompleted,
  filter,
  onChangeFilter,
  onClearTodos,
}: Props) {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodosNum} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <FilterButton
          link="#/"
          isActive={filter === Filters.All}
          name="FilterLinkAll"
          value={Filters.All}
          onChangeFilter={onChangeFilter}
        />
        <FilterButton
          link="#/active"
          isActive={filter === Filters.Active}
          name="FilterLinkActive"
          value={Filters.Active}
          onChangeFilter={onChangeFilter}
        />
        <FilterButton
          link="#/completed"
          isActive={filter === Filters.Completed}
          name="FilterLinkCompleted"
          value={Filters.Completed}
          onChangeFilter={onChangeFilter}
        />
        {/* <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === Filters.All,
          })}
          data-cy="FilterLinkAll"
          onClick={() => onChangeFilter(Filters.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filter === Filters.Active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => onChangeFilter(Filters.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filter === Filters.Completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onChangeFilter(Filters.Completed)}
        >
          Completed
        </a> */}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!allCompleted}
        onClick={onClearTodos}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
