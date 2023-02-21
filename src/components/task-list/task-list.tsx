import { Component, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'task-list',
  styleUrl: 'task-list.css',
  shadow: true,
})
export class TaskList {
  @Prop() tasks: string[] = [];
  @Event() taskCompleted: EventEmitter<string>;

  @Listen('taskAdded', { target: 'window' })
  taskAddedHandler(event: CustomEvent<string>) {
    console.log('La tâche à été ajoutée', event.detail);
    this.tasks = [...this.tasks, event.detail];
  }

  render() {
    console.log(this.tasks)
    return (
      <div>
        <ul>
          {this.tasks.map(task => (

            <li>
              <input type="checkbox" onChange={() => this.taskCompleted.emit(task)} />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

    );
  }

}
