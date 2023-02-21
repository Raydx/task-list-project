import { Component, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'add-task',
  styleUrl: 'add-task.css',
  shadow: true
})
export class AddTask {
  @State() value: string;

  @Event({
    eventName: 'taskAdded',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) taskAddedEvent: EventEmitter<string>;

  handleSubmit(e) {
    e.preventDefault()
    // console.log(this.value)
    const task = this.value.trim();
    this.taskAddedEvent.emit(task);
    console.log(task);
    this.value = '';
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(event: Event) => this.handleSubmit(event)}>
        <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} placeholder="Ajouter une tâche" />
        <button type="submit">Ajouter</button>
      </form>
    );
  }
}