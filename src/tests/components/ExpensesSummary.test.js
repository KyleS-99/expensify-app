import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} total={100} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} total={23515} />);
    expect(wrapper).toMatchSnapshot();
});