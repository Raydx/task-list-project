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
          <input type="text" class="bg-gray-50 border font-style: italic border-black placeholder-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2"
            value={this.value} onInput={(event) => this.handleChange(event)} placeholder="Ajouter une tâche.." />

          <button type="submit" class="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="16" x="0" y="0" viewBox="0 0 448 448"><g><path d="M408 184H272a8 8 0 0 1-8-8V40c0-22.09-17.91-40-40-40s-40 17.91-40 40v136a8 8 0 0 1-8 8H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h136a8 8 0 0 1 8 8v136c0 22.09 17.91 40 40 40s40-17.91 40-40V272a8 8 0 0 1 8-8h136c22.09 0 40-17.91 40-40s-17.91-40-40-40zm0 0" fill="#000000" data-original="#000000" class=""></path></g></svg></button>
        </div>
      </form>
    );
  }
}