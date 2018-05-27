import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '12345'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: 4,
            description: 'test',
            note: 'test',
            amount: 12345,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state.length).toBe(4);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'taco bell'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe('taco bell');
});

test('should not edit expense if expense not found', () => {
    const before = expenses.slice();
    const action = {
        type: 'EDIT_EXPENSE',
        id: 12345,
        updates: {
            description: 'test'
        }
    };
    const state = expensesReducer(before, action);
    expect(state).toEqual(before);
});