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
    const task = this.value.trim();
    if (task != "") {
      this.taskAddedEvent.emit(task);
      this.value = '';
    } else {
      console.log('Veuillez entrer une tâche');
    }
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <form onSubmit={(event: Event) => this.handleSubmit(event)}>
        <div class="relative">
          <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2"
            value={this.value} onInput={(event) => this.handleChange(event)} placeholder="Ajouter une tâche" />

          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2">
            Ajouter</button>
        </div>
      </form>
    );
  }
}