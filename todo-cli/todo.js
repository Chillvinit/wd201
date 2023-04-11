/* eslint-disable no-undef */
const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let condition1 = []
    condition1 = all.filter(
      (event) => event.dueDate < formattedDate(new Date())
    )
    return condition1
  }

  const dueToday = () => {
    let condition2 = []
    condition2 = all.filter(
      (event) => event.dueDate === formattedDate(new Date())
    )
    return condition2
  }

  const dueLater = () => {
    let condition3 = []
    condition3 = all.filter(
      (event) => event.dueDate > formattedDate(new Date())
    )
    return condition3
  }

  const toDisplayableList = (list) => {
    return list
      .map(
        (todo) =>
          `[${todo.completed ? 'x' : ' '}] ${todo.title} ${
            todo.dueDate !== formattedDate(new Date()) ? todo.dueDate : ''
          }`
      )
      .join('\n')
      .trim()
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  }
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
module.exports = todoList
