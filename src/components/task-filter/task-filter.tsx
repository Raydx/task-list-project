import { Component, h } from '@stencil/core';

@Component({
  tag: 'task-filter',
  styleUrl: 'task-filter.css',
  shadow: true
})
export class TaskFilter {
  filter = 'all';

  handleFilterChange(event: Event) {
    this.filter = (event.target as HTMLInputElement).value;
  }

  render() {
    return (
      <div>
        <label>
          <input type="radio" name="filter" value="all" checked={this.filter === 'all'} onChange={(event: Event) => this.handleFilterChange(event)} />
          Toutes les tâches
        </label>
        <label>
          <input type="radio" name="filter" value="completed" checked={this.filter === 'completed'} onChange={(event: Event) => this.handleFilterChange(event)} />
          Tâches terminées
        </label>
        <label>
          <input type="radio" name="filter" value="active" checked={this.filter === 'active'} onChange={(event: Event) => this.handleFilterChange(event)} />
          Tâches en cours
        </label>
      </div>
    );
  }
}
