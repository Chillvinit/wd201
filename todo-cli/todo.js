/* eslint-disable no-undef */
const todoList = () => {
  const all = []

  const formattedDate = (date) => {
    const year = date.getFullYear()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)
    return `${year}-${month}-${day}`
  }

  const add = (todoItem) => {
    all.push(todoItem)
  }

  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    const condition1 = all.filter(
      (event) => event.dueDate < formattedDate(new Date())
    )
    return condition1
  }

  const dueToday = () => {
    const condition2 = all.filter(
      (event) => event.dueDate === formattedDate(new Date())
    )
    return condition2
  }

  const dueLater = () => {
    const condition3 = all.filter(
      (event) => event.dueDate > formattedDate(new Date())
    )
    return condition3
  }

  const toDisplayableList = (list) => {
    return list
      .map(
        (todo) =>
          `[${todo.completed ? 'x' : ' '}] ${todo.title} ${
            todo.dueDate ? todo.dueDate : ''
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
