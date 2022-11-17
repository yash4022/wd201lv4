/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("To do list test suits", () => {
  beforeAll(() => {
    const todayDate = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    const yesterdayDate = new Date(todayDate.getTime() - 1 * oneDay);
    const tomorrowDate = new Date(todayDate.getTime() + 1 * oneDay);

    const today = todayDate.toLocaleDateString("en-CA");
    const yesterday = yesterdayDate.toLocaleDateString("en-CA");
    const tomorrow = tomorrowDate.toLocaleDateString("en-CA");

    add({
      title: "Pay house bill",
      dueDate: yesterday,
      completed: true,
    });
    add({
      title: "Pay shop bill",
      dueDate: today,
      completed: true,
    });
    add({ title: "dating service", dueDate: today, completed: false });
    add({ title: "recruitment", dueDate: tomorrow, completed: false });
    add({ title: "meeting with girlfriend", dueDate: tomorrow, completed: false });
  });
  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "6th todo due today",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });
  test("Should markAsComplete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Check retrieval of overdue items", () => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    const existingOverdueItems = overdue();
    add({
      title: "An overdue test item",
      completed: false,
      dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(existingOverdueItems.length + 1);
  });

  test("Check retrieval of due today items", () => {
    const today = new Date();
    const existingTodaysItems = dueToday();
    add({
      title: "An Today test item",
      completed: false,
      dueDate: new Date(today.getTime()).toLocaleDateString("en-CA"),
    });
    const todayItems = dueToday();
    expect(todayItems.length).toBe(existingTodaysItems.length + 1);
  });

  test("Check retrieval of due later items", () => {
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    const existingdueLaterItems = dueLater();
    add({
      title: "An due later test item",
      completed: false,
      dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
        "en-CA"
      ),
    });
    const dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(existingdueLaterItems.length + 1);
  });
});
