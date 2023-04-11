/* eslint-disable no-undef */
const todoList = require('../todo')
const { all, markAsComplete, add, overdue, dueToday, dueLater, toDisplayableList } = todoList()

describe('Todolist Test Suite', () => {
  beforeEach(() => {
    all.length = 0

    add({
      title: 'Test todo',
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10)
    })
  })

  test('should add new todo', () => {
    const todoItemsCount = all.length
    add({
      title: 'Test todo 2',
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

  test('should retrieve overdue items', () => {
    add({
      title: 'Overdue todo',
      completed: false,
      dueDate: new Date(Date.now() - 86400000).toISOString().slice(0, 10)
    })

    const overdueItems = overdue()
    expect(overdueItems.length).toBe(1)
    expect(overdueItems[0].title).toBe('Overdue todo')
  })

  test('should retrieve due today items', () => {
    const dueTodayItems = dueToday()
    expect(dueTodayItems.length).toBe(1)
    expect(dueTodayItems[0].title).toBe('Test todo')
  })

  test('should retrieve due later items', () => {
    add({
      title: 'Later todo',
      completed: false,
      dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10)
    })

    const dueLaterItems = dueLater()
    expect(dueLaterItems.length).toBe(1)
    expect(dueLaterItems[0].title).toBe('Later todo')
  })

  test('should format todo list for display', () => {
    const list = [{ title: 'Test todo', completed: false, dueDate: new Date().toISOString().slice(0, 10) }]
    const displayableList = toDisplayableList(list)
    expect(displayableList).toBe(`[ ] Test todo ${new Date().toISOString().slice(0, 10)}`)
  })
})
