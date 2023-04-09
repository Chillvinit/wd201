const todolist = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todolist();

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });

  test("should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1);

    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    add({
      title: "Overdue todo",
      completed: false,
      dueDate: yesterday.toISOString().slice(0, 10),
    });
    const newOverdueItems = overdue();
    expect(newOverdueItems.length).toBe(2);
    expect(
      newOverdueItems.filter((item) => item.title === "Overdue todo").length
    ).toBe(1);
    expect(
      newOverdueItems.filter((item) => item.title === "Test todo").length
    ).toBe(1);
  });

  test("should retrieve due today items", () => {
    const dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Test todo");
  });

  test("should retrieve due later items", () => {
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(0);

    const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));
    add({
      title: "Due later todo",
      completed: false,
      dueDate: tomorrow.toISOString().slice(0, 10),
    });
    const newDueLaterItems = dueLater();
    expect(newDueLaterItems.length).toBe(1);
    expect(newDueLaterItems[0].title).toBe("Due later todo");
  });
});
