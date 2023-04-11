/* eslint-disable no-undef */
const todolist = require('../todo')
const { all, markAsComplete, add } = todolist()

describe('Todolist Test Suite', () => {
  beforeAll(() => {
    add({
      title: 'Test todo',
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10)
    })
  })

  test('should add new todo', () => {
    const todoItemsCount = all.length
    add({
      title: 'Test todo',
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10)
    })
    expect(all.length).toBe(todoItemsCount + 1)
  })

  test('should mark a todo as complete', () => {
    expect(all[0].completed).toBe(false)
    markAsComplete(0)
    expect(all[0].completed).toBe(true)
  })
})
