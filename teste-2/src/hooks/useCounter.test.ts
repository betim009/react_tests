import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
    it('initializes with the correct value', () => {
        const { result } = renderHook(() => useCounter(10));
        console.log(result)
        expect(result.current.count).toBe(10);
    });

    it('increments the counter', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    it('decrements the counter', () => {
        const { result } = renderHook(() => useCounter(10));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(9);
    });
});