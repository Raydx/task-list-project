import { Component, h, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.css',
  shadow: true,
})
export class TaskList {
  @Prop() tasks: string[] = [];

  @Listen('taskAdded', { target: 'window' })
  taskAddedHandler(event: CustomEvent<string>) {
    console.log('La tâche à été ajoutée', event.detail);
    this.tasks = [...this.tasks, event.detail];
  }

  deleteTask(task) {
    const printer = this.tasks.indexOf(task);
    if (printer != -1) {
      this.tasks.splice(printer, 1);
      this.tasks = [...this.tasks];
    } else {
      console.log("Instance de la tâche non-existante");
    }
  }

  render() {
    return (
      <div>
        <h2 class="text-xl underline font-semibold">Liste des tâches : </h2>
        <br />
        <ul>
          {this.tasks.map(task => (
            <li>
              <span class="text-base font-mono"> - {task} &nbsp;</span>
              <button type="submit" onClick={() => this.deleteTask(task)}><svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="15" height="15" x="0" y="0" viewBox="0 0 511.992 511.992"><g><path fill="#e76e54" d="m415.402 495.422-159.406-159.41L96.59 495.422c-22.098 22.094-57.922 22.094-80.02 0-22.093-22.098-22.093-57.922 0-80.02l159.41-159.406L16.57 96.59c-22.093-22.098-22.093-57.922 0-80.02 22.098-22.093 57.922-22.093 80.02 0l159.406 159.41L415.402 16.57c22.098-22.093 57.922-22.093 80.02 0 22.094 22.098 22.094 57.922 0 80.02l-159.41 159.406 159.41 159.406c22.094 22.098 22.094 57.922 0 80.02-22.098 22.094-57.922 22.094-80.02 0zm0 0" data-original="#e76e54" class=""></path></g></svg></button>
            </li>
          ))}
        </ul>
      </div >
    );
  }
}
